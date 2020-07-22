import T from "../../theme"
import { defaultText } from "../../../maps/defaultStyles"

const defaultStyles = {
  root: {
    backgroundImage: T.palette.transparent.ioetOrange,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    color: "white",
    height: 550,
  },
  textContainer: {
    marginTop: 20,
    marginBottom: 0.5,
    marginRight: 0,
    marginLeft: 0,
    margin: "auto",
    padding: 2,
  },
  text: defaultText,
}

export default defaultStyles
