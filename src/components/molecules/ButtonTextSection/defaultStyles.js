import T from "../../theme"
import { defaultText, defaultP, defaultGrid, defaultRoot } from "../../../maps/defaultStyles"

const { justify, ...gridProps } = defaultGrid
const { width, ...rootProps } = defaultRoot
const { color, ...pProps } = defaultP
const defaultStyles = {
  grid: {
    justify: "center",
    ...gridProps,
  },
  root: {
    width: "75vw",
    widthResponsive: "95vw",
    ...rootProps,
  },
  customTitle: {
    fontWeight: "900",
    color: T.palette.info.main,
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
