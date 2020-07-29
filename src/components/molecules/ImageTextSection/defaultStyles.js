import { defaultText, defaultGrid, defaultRoot, defaultImg } from "../../../maps/defaultStyles"

const { background, color, width, height, ...rootProps } = defaultRoot

const defaultStyles = {
  root: {
    color: "black",
    background: "white",
    width: "",
    height: "",
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
  textContainer: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: "",
    marginLeft: "",
    margin: "auto",
    display: "block",
    padding: 0,
  },
  text: defaultText,
  grid: defaultGrid,
}

export default defaultStyles
