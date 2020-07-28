import React from "react"
import defaultStyles from "./defaultStyles"
import { Grid, Paper } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import { getColor } from "../../../maps/colorMap"
import { makeStyles } from "@material-ui/core/styles"
import { cardComponentDict } from "../../../maps/componentMap"
import { overrideStyle } from "../../../functions/stylesParser"
import { contentfulTypeToComponent } from "../../../functions/componentParser"

const useStyles = props =>
  makeStyles(theme => ({
    root: {
      marginBottom: theme.spacing(props.styles.root.marginBottom),
      marginTop: theme.spacing(props.styles.root.marginTop),
      marginLeft: theme.spacing(props.styles.root.marginLeft),
      marginRight: theme.spacing(props.styles.root.marginRight),
      background: getColor(props.styles.root.background),
      padding: theme.spacing(props.styles.root.padding),
      color: getColor(props.styles.root.color),
    },
  }))

const CardHolder = ({ contentfulId }) => {
  const data = useStaticQuery(graphql`
    {
      cardHolder: allContentfulCardHolder {
        nodes {
          cards {
            ... on Node {
              id
              internal {
                type
              }
              ... on ContentfulImageCard {
                bodyText {
                  json
                }
                image {
                  file {
                    url
                  }
                  title
                }
                title
                styles {
                  internal {
                    content
                  }
                }
                navigationReference {
                  to {
                    slug
                  }
                }
                node_locale
              }
              ... on ContentfulMapCard {
                bodyText {
                  bodyText
                }
                title
                coordinates {
                  lat
                  lon
                }
                styles {
                  internal {
                    content
                  }
                }
                node_locale
              }
            }
          }
          id
          styles {
            internal {
              content
            }
          }
        }
      }
    }
  `)
  const cardHolder = data.cardHolder.nodes.find(node => node.id === contentfulId)
  const optionalStyles = JSON.parse(cardHolder.styles.internal.content)
  const styles = overrideStyle(defaultStyles, optionalStyles)
  const cards = cardHolder.cards.map(card => ({
    optionalStyles: JSON.parse(card.styles.internal.content),
    lng: card.coordinates ? card.coordinates.lon : null,
    lat: card.coordinates ? card.coordinates.lat : null,
    imgUrl: card.image ? card.image.file.url : null,
    imgTitle: card.image ? card.image.title : null,
    body: card.bodyText,
    type: card.internal.type,
    title: card.title,
    id: card.id,
    locale: card.node_locale,
    navigationReference: card.navigationReference ? card.navigationReference.to : null,
  }))

  const classes = useStyles({ styles })()
  return (
    <Paper className={classes.root}>
      <Grid container {...styles.grid}>
        {cards.map((card, index) => {
          const Card = contentfulTypeToComponent(card.type, cardComponentDict)
          return card ? (
            <Grid item key={`card-container-${index}-${card.id}`}>
              <Card {...card} key={`card-${index}-${card.id}`}></Card>
            </Grid>
          ) : null
        })}
      </Grid>
    </Paper>
  )
}

export default CardHolder
