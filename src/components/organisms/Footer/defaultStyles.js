import T from "../../theme"
import { defaultRoot } from "../../../maps/defaultStyles"

const { background, width, height, ...footerProps } = defaultRoot

const defaultStyles = {
  root: {
    background: T.palette.gradient.ioetOrange,
    height: "20%",
    width: "100%",
    ...footerProps,
  },
}

export default defaultStyles
