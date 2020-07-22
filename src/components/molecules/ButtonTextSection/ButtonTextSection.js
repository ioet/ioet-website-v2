import React from "react"
import T from "../../theme"
import { navigate } from "gatsby"
import defaultStyles from "./defaultStyles"
import { getColor } from "../../../maps/colorMap"
import Buttons from "../../atoms/Buttons/Buttons"
import { ThemeProvider } from "@material-ui/styles"
import { overrideStyle } from "../../../functions/stylesParser"
import { Grid, Typography, Container } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import RichTextWrapper from "../../atoms/RichTextWrapper/RichTextWrapper"

const useStyles = props =>
  makeStyles(theme =>
    createStyles({
      [theme.breakpoints.only("xs")]: {
        containerItems: {
          width: props.styles.root.widthResponsive,
        },
      },
      root: {
        marginBottom: theme.spacing(props.styles.root.marginBottom),
        marginTop: theme.spacing(props.styles.root.marginTop),
        background: getColor(props.styles.root.background),
        padding: theme.spacing(props.styles.root.padding),
        color: getColor(props.styles.root.color),
        width: props.styles.root.width,
      },
      customTitle: {
        marginBottom: props.styles.customTitle.marginBottom,
        fontWeight: props.styles.customTitle.fontWeight,
        color: getColor(props.styles.customTitle.color),
        fontSize: props.styles.customTitle.fontSize,
      },
    })
  )

const ButtonTextSection = ({ title, bodyText, button, optionalStyles }) => {
  const styles = overrideStyle(defaultStyles, optionalStyles)
  const classes = useStyles({ styles })()

  return (
    <ThemeProvider theme={T}>
      <Container maxWidth="md" className={classes.root}>
        <Grid container {...styles.grid}>
          <Grid item xs={12} sm={8} md={8}>
            <Typography variant="h4" className={classes.customTitle}>
              {title}
            </Typography>
            {bodyText ? (
              <RichTextWrapper richTextJson={bodyText} optionalStyles={styles.text}></RichTextWrapper>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Buttons
              buttonText={button.caption}
              onClick={_e => {
                if (button) navigate(`/${button.slug}/`)
              }}
            ></Buttons>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default ButtonTextSection
