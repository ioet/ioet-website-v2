import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"
import RichTextWrapper from "../../atoms/RichTextWrapper/RichTextWrapper"
import Buttons from "../../atoms/Buttons/Buttons"
import Container from "@material-ui/core/Container"
import T from "../../theme"
import { ThemeProvider } from "@material-ui/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    containerItems: {
      width: "75vw",
    },
    [theme.breakpoints.only("xs")]: {
      containerItems: {
        width: "95vw",
      },
    },
    title: {
      fontWeight: "900",
      color: T.palette.info.main,
      fontSize: "26px",
      marginBottom: "10px",
    },
  })
)

const CardButton = ({ title = "Title section", bodyText, buttonText = "LEARN MORE", direction }) => {
  const classes = useStyles()
  const gridDirection = direction ? direction : "row"

  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={4}
        className={classes.containerItems}
        justify="center"
        alignItems="center"
        direction={gridDirection}
      >
        <Grid item xs={12} sm={8} md={8}>
          <Typography variant="h4" color="T.palette.info.main" className={classes.title} fontWeightMedium>
            {title}
          </Typography>
          {bodyText ? (
            <ThemeProvider theme={T}>
              <RichTextWrapper color="secondary" richTextJson={bodyText}></RichTextWrapper>
            </ThemeProvider>
          ) : null }
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Buttons buttonText={buttonText}></Buttons>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CardButton
