import T from "../../theme"
import { defaultText } from "../../../maps/defaultStyles"

const defaultStyles = {
  root: {
    backgroundImage: T.palette.transparent.ioetOrange,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    color: "black",
    height: 550,
  },
  textContainer: {
    marginTop: 20,
    marginBottom: 0.5,
    margin: "auto",
    padding: 2,
  },
  text: defaultText,
}

export default defaultStyles
