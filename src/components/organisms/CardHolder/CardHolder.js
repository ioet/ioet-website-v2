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
            ... on ContentfulBasicCard {
              body {
                body
              }
              cardImage {
                title
                file {
                  url
                }
              }
              title
            }
            ... on ContentfulSourceCard {
              locationLatLong {
                lat
                lon
              }
              body {
                body
              }
              title
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
        imgUrl: card.cardImage ? card.cardImage.file.url : null,
        imgTitle: card.cardImage ? card.cardImage.title : null,
        lat: card.locationLatLong ? card.locationLatLong.lat : null,
        lng: card.locationLatLong ? card.locationLatLong.lon : null,
        title: card.title,
        body: card.body.body,
        type: card.internal.type,
      }
    })
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
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
