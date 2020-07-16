import { defaultText, defaultH } from "../../../maps/defaultStyles"

const { h6, ...textProps } = defaultText
const { color, ...hProps } = defaultH

const defaultStyles = {
  root: {
    color: "black",
    background: "white",
    maxWidth: 345,
    maxHeight: "100%",
    width: "",
    height: "100%",
  },
  text: {
    h6: {
      color: "textPrimary",
      ...hProps,
    },
    ...textProps,
  },
}

export default defaultStyles
