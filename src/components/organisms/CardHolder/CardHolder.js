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
              internal {
                type
              }
            }
            ... on ContentfulImageCard {
              id
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
              id
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
      }
    })
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
        {cards.map(card => {
          const Card = contentfulTypeToComponent(card.type, cardComponentDict)
          return card ? (
            <Grid item>
              <Card {...card}></Card>
            </Grid>
          ) : (
            <></>
          )
        })}
      </Grid>
    </Paper>
  )
}

export default CardHolder
