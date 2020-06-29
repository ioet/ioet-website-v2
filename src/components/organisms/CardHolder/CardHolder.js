import React from "react"
import { Grid, Paper } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import BasicCard from "../../molecules/BasicCard/BasicCard"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
  },
}))

const CardHolder = ({ contentfulId }) => {
  const data = useStaticQuery(graphql`
    {
      cardHolder: allContentfulCardHolder {
        nodes {
          cards {
            body {
              body
            }
            cardImage {
              title
              file {
                url
              }
            }
            publicationDate
            views
            title
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
        imgUrl: card.cardImage.file.url,
        imgTitle: card.cardImage.title,
        title: card.title,
        body: card.body.body,
        pubDate: card.publicationDate,
        views: card.views,
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
          return (
            <Grid item>
              <BasicCard
                imgUrl={card.imgUrl}
                imgTitle={card.imgTitle}
                title={card.title}
                body={card.body}
                pubDate={card.pubDate}
                views={card.views}
              ></BasicCard>
            </Grid>
          )
        })}
      </Grid>
    </Paper>
  )
}

export default CardHolder
