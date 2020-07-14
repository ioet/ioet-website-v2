import React from "react"
import { Grid, Paper } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { cardComponentDict } from "../../../maps/componentMap"
import { contentfulTypeToComponent } from "../../../functions/componentParser"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    padding: theme.spacing(2),
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
            }
            ... on ContentfulImageCard {
              bodyText {
                bodyText
              }
              image {
                file {
                  url
                }
                title
              }
              title
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
            }
          }
          id
        }
      }
    }
  `)
  const cards = data.cardHolder.nodes
    .find(node => node.id === contentfulId)
    .cards.map(card => {
      return {
        imgUrl: card.image ? card.image.file.url : null,
        imgTitle: card.image ? card.image.title : null,
        lat: card.coordinates ? card.coordinates.lat : null,
        lng: card.coordinates ? card.coordinates.lon : null,
        title: card.title,
        body: card.bodyText.bodyText,
        type: card.internal.type,
        id: card.id,
      }
    })
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="stretch" spacing={2}>
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
