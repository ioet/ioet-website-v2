import React from "react"
import { Grid } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import CheckerboardRow from "../../molecules/CheckerboardRow/CheckerboardRow"
import "./Checkerboard.scss"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    padding: theme.spacing(2),
    img: {
      width: "100px",
    },
  },
}))

const Checkerboard = ({ contentfulId }) => {
  const data = useStaticQuery(graphql`
    {
      checkerboard: allContentfulCheckerboard {
        nodes {
          id
          rows {
            id
            rowItems {
              ... on Node {
                id
                internal {
                  type
                }
                ... on ContentfulCheckerboardItemImage {
                  image {
                    file {
                      url
                    }
                  }
                  title
                }
                ... on ContentfulCheckerboardItemText {
                  content {
                    json
                  }
                  title
                }
              }
            }
          }
        }
      }
    }
  `)

  const rows = data.checkerboard.nodes
    .find(item => item.id === contentfulId)
    .rows.map(row => {
      return {
        rowElements: row.rowItems.map(item => {
          return {
            type: item.internal.type,
            id: item.id,
            title: item.title,
            imageUrl: item.image ? item.image.file.url : null,
            richTextJson: item.content ? item.content.json : {},
          }
        }),
        id: row.id,
      }
    })

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container direction="column">
        {rows.map((row, index) => {
          return <CheckerboardRow {...row} key={`row-${index}-${row.id}`} />
        })}
      </Grid>
    </div>
  )
}

export default Checkerboard
