import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Typography } from "@material-ui/core"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const RichTextWrapper = ({ richTextJson, customOptions }) => {
  const options = customOptions
    ? customOptions
    : {
        renderMark: {
          [MARKS.BOLD]: text => <b>{text}</b>,
        },

        renderNode: {
          [BLOCKS.HEADING_1]: (_node, children) => <Typography variant="h1">{children}</Typography>,
          [BLOCKS.HEADING_2]: (_node, children) => <Typography variant="h2">{children}</Typography>,
          [BLOCKS.HEADING_3]: (_node, children) => <Typography variant="h3">{children}</Typography>,
          [BLOCKS.HEADING_4]: (_node, children) => <Typography variant="h4">{children}</Typography>,
          [BLOCKS.HEADING_5]: (_node, children) => <Typography variant="h5">{children}</Typography>,
          [BLOCKS.HEADING_6]: (_node, children) => <Typography variant="h6">{children}</Typography>,
          [BLOCKS.PARAGRAPH]: (_node, children) => (
            <>
              <Typography variant="body1" align="justify" paragraph>
                {children}
              </Typography>
              <br />
            </>
          ),
        },
      }

  return documentToReactComponents(richTextJson, options)
}

export default RichTextWrapper
