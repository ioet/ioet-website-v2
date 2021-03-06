import { defaultText, defaultImg, defaultH, defaultP } from "../../../maps/defaultStyles"
import T from "../../theme"

const { paddingTop, ...imgProps } = defaultImg
const { h6, p, ...textProps } = defaultText
const { color, ...hProps } = defaultH

const defaultStyles = {
  root: {
    color: T.palette.secondary.dark,
    background: "white",
    maxWidth: 345,
    maxHeight: "100%",
    width: "",
    height: "100%",
  },
  active: {
    color: "black",
    background: "",
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
    p: {
      color: "textSecondary",
      align: defaultP.align,
      display: defaultP.display,
    },
    ...textProps,
  },
}

export default defaultStyles
