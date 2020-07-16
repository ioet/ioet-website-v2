import React from "react"
import T from "../../theme"
import { navigate } from "gatsby"
import defaultStyles from "./defaultStyles"
import Buttons from "../../atoms/Buttons/Buttons"
import { ThemeProvider } from "@material-ui/styles"
import { overrideStyle } from "../../../functions/stylesParser"
import { Grid, Typography, Container } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import RichTextWrapper from "../../atoms/RichTextWrapper/RichTextWrapper"

const useStyles = props =>
  makeStyles(theme =>
    createStyles({
      grid: {
        width: props.styles.grid.width,
        spacing: props.styles.grid.spacing,
        justify: props.styles.grid.justify,
        alignItems: props.styles.grid.alignItems,
        direction: props.styles.grid.direction,
      },
      [theme.breakpoints.only("xs")]: {
        containerItems: {
          width: props.styles.grid.widthResponsive,
        },
      },
      title: {
        fontWeight: props.styles.title.fontWeight,
        color: props.styles.title.color,
        fontSize: props.styles.title.fontSize,
        marginBottom: props.styles.title.marginBottom,
      },
    })
  )

const ButtonTextSection = ({ title, bodyText, button, optionalStyles }) => {
  const styles = overrideStyle(defaultStyles, optionalStyles)
  const classes = useStyles({ styles })()

  return (
    <ThemeProvider theme={T}>
      <Container maxWidth="lg">
        <Grid container className={classes.grid}>
          <Grid item xs={12} sm={8} md={8}>
            <Typography variant="h4" className={classes.title}>
              {title}
            </Typography>
            {bodyText ? (
              <RichTextWrapper color={styles.text.p.color} richTextJson={bodyText}></RichTextWrapper>
            ) : null}
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
