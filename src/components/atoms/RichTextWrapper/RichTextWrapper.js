import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Typography } from "@material-ui/core"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import theme from "../../theme"
import { ThemeProvider } from "@material-ui/styles"

const RichTextWrapper = ({ richTextJson, customOptions }) => {
  const options = customOptions
    ? customOptions
    : {
        renderMark: {
          [MARKS.BOLD]: text => <b>{text}</b>,
        },

        renderNode: {
          [BLOCKS.HEADING_1]: (_node, children) => (
            <ThemeProvider theme={theme}>
              <Typography variant="h1">{children}</Typography>
            </ThemeProvider>
          ),
          [BLOCKS.HEADING_2]: (_node, children) => (
            <ThemeProvider theme={theme}>
              <Typography variant="h2">{children}</Typography>
            </ThemeProvider>
          ),
          [BLOCKS.HEADING_3]: (_node, children) => (
            <ThemeProvider theme={theme}>
              <Typography variant="h3">{children}</Typography>
            </ThemeProvider>
          ),
          [BLOCKS.HEADING_4]: (_node, children) => (
            <ThemeProvider theme={theme}>
              <Typography variant="h4">{children}</Typography>
            </ThemeProvider>
          ),
          [BLOCKS.HEADING_5]: (_node, children) => (
            <ThemeProvider theme={theme}>
              <Typography variant="h5">{children}</Typography>
            </ThemeProvider>
          ),
          [BLOCKS.HEADING_6]: (_node, children) => (
            <ThemeProvider theme={theme}>
              <Typography variant="h6">{children}</Typography>
            </ThemeProvider>
          ),
          [BLOCKS.PARAGRAPH]: (_node, children) => (
            <>
              <ThemeProvider theme={theme}>
                <Typography variant="body1" align="justify" paragraph>
                  {children}
                </Typography>
              </ThemeProvider>
            </>
          ),
        },
      }

  return <ThemeProvider theme={theme}>{documentToReactComponents(richTextJson, options)}</ThemeProvider>
}

export default RichTextWrapper
