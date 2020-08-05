import { defaultText, defaultGrid, defaultRoot, defaultImg } from "../../../maps/defaultStyles"

const { background, color, width, height, ...rootProps } = defaultRoot

const defaultStyles = {
  root: {
    color: "black",
    background: "white",
    width: "",
    height: "",
    ...rootProps,
    marginBottom: 0,
  },
  img: {
    margin: "inherit",
    display: "block",
    maxWidth: "100%",
    maxHeight: "376px",
    width: defaultImg.width,
    height: defaultImg.height,
    boxShadow: "false",
    borderRadius: "5px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "0 !important",
  },
  textContainer: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: "",
    marginLeft: "",
    margin: "auto",
    display: "block",
    padding: "inherit",
  },
  text: defaultText,
  grid: defaultGrid,
}

export default defaultStyles
