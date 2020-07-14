import React from "react"
import T from "../../theme"
import { navigate } from "gatsby"
import Buttons from "../../atoms/Buttons/Buttons"
import { ThemeProvider } from "@material-ui/styles"
import { Grid, Typography, Container } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import RichTextWrapper from "../../atoms/RichTextWrapper/RichTextWrapper"

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

const ButtonTextSection = ({ title, bodyText, button, optionalStyles }) => {
  const classes = useStyles()
  const gridDirection = optionalStyles.direction ? optionalStyles.direction : "row"

  return (
    <ThemeProvider theme={T}>
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
            <Typography variant="h4" className={classes.title}>
              {title}
            </Typography>
            {bodyText ? <RichTextWrapper color="secondary" richTextJson={bodyText}></RichTextWrapper> : null}
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Buttons
              buttonText={button.caption}
              onClick={_e => {
                if (button) navigate(`/${button.to.slug}/`)
              }}
            ></Buttons>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default ButtonTextSection
