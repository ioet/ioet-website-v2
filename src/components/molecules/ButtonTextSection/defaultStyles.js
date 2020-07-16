import T from "../../theme"
import { defaultText, defaultP, defaultGrid } from "../../../maps/defaultStyles"

const { width, widthResponsive, justify, ...gridProps } = defaultGrid
const { color, ...pProps } = defaultP
const defaultStyles = {
  grid: {
    width: "75vw",
    widthResponsive: "95vw",
    justify: "center",
    ...gridProps,
  },
  title: {
    fontWeight: "900",
    color: T.palette.info.main,
    fontSize: "26px",
    marginBottom: "10px",
  },
  text: {
    p: {
      color: "secondary",
      ...pProps,
    },
    ...defaultText,
  },
}

export default defaultStyles
