import React from "react"
import theme from "../../theme"
import { Typography } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import { defaultText } from "../../../maps/defaultStyles"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { overrideStyle } from "../../../functions/stylesParser"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const RichTextWrapper = ({ richTextJson, customOptions, optionalStyles }) => {
  const { p, h1, h2, h3, h4, h5, h6 } = overrideStyle(defaultText, optionalStyles)
  const lineBreaksStyle = { whiteSpace: "pre-wrap" }
  const options = customOptions
    ? customOptions
    : {
        renderMark: {
          [MARKS.BOLD]: text => <b>{text}</b>,
        },
        renderNode: {
          [BLOCKS.HEADING_1]: (_node, children) => (
            <ThemeProvider theme={theme}>
              <Typography variant="h1" {...h1} style={lineBreaksStyle}>
                {children}
              </Typography>
            </ThemeProvider>
          ),
          [BLOCKS.HEADING_2]: (_node, children) => (
            <ThemeProvider theme={theme}>
              <Typography variant="h2" {...h2} style={lineBreaksStyle}>
                {children}
              </Typography>
            </ThemeProvider>
          ),
          [BLOCKS.HEADING_3]: (_node, children) => (
            <ThemeProvider theme={theme}>
              <Typography variant="h3" {...h3} style={lineBreaksStyle}>
                {children}
              </Typography>
            </ThemeProvider>
          ),
          [BLOCKS.HEADING_4]: (_node, children) => (
            <ThemeProvider theme={theme}>
              <Typography variant="h4" {...h4} style={lineBreaksStyle}>
                {children}
              </Typography>
            </ThemeProvider>
          ),
          [BLOCKS.HEADING_5]: (_node, children) => (
            <ThemeProvider theme={theme}>
              <Typography variant="h5" {...h5} style={lineBreaksStyle}>
                {children}
              </Typography>
            </ThemeProvider>
          ),
          [BLOCKS.HEADING_6]: (_node, children) => (
            <ThemeProvider theme={theme}>
              <Typography variant="h6" {...h6} style={lineBreaksStyle}>
                {children}
              </Typography>
            </ThemeProvider>
          ),
          [BLOCKS.PARAGRAPH]: (_node, children) => (
            <ThemeProvider theme={theme}>
              <Typography variant="body1" {...p} style={lineBreaksStyle}>
                {children}
              </Typography>
            </ThemeProvider>
          ),
        },
      }

  return <ThemeProvider theme={theme}>{documentToReactComponents(richTextJson, options)}</ThemeProvider>
}

export default RichTextWrapper
