import { defaultText, defaultImg, defaultH, defaultP } from "../../../maps/defaultStyles"
import T from "../../theme"


const { paddingTop, ...imgProps } = defaultImg
const { h6, p, ...textProps } = defaultText
const { color, ...hProps } = defaultH
const { align, ...pProps } = defaultP

const defaultStyles = {
  root: {
    color: "black",
    background: "white",
    maxWidth: 345,
    maxHeight: "100%",
    width: "",
    height: "100%"
  },
  active: {
    color: "white",
    background: T.palette.primary.ligth,
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
      align: "",
      ...pProps,
    },
    ...textProps,
  },
}

export default defaultStyles
