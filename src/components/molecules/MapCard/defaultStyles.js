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
    height: 526,
    boxShadow: "0 3px 18px -5px darkgrey",
    margin: 10,
  },
  text: {
    h6: {
      color: "textPrimary",
      ...hProps,
    },
    ...textProps,
  },
  img: {
    height: "40vh",
    border: "none",
  },
}

export default defaultStyles
