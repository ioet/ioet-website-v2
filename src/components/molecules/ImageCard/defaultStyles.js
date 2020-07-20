import { defaultText, defaultImg, defaultH } from "../../../maps/defaultStyles"

const { paddingTop, ...imgProps } = defaultImg
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
  img: {
    ...imgProps,
    paddingTop: "56.25%",
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
