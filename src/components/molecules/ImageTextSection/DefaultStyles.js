import { defaultText, defaultGrid, defaultRoot, defaultImg } from "../../../maps/defaultStyles"

const { background, color, ...rootProps } = defaultRoot

const defaultStyles = {
  root: {
    color: "black",
    background: "white",
    ...rootProps,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "376px",
    width: defaultImg.width,
    height: defaultImg.height,
  },
  text: defaultText,
  grid: defaultGrid,
}

export default defaultStyles
