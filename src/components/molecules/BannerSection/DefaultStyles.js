import T from "../../theme"

const DefaultStyles = props => ({
  root: {
    backgroundImage: [T.palette.transparent.ioetOrange, `url("https:${props.imgUrl}")`],
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    color: "black",
    maxHeight: 550,
  },
  text: {
    marginTop: 20,
    marginBottom: 0.5,
    margin: "auto",
    padding: 2,
  },
})

export default DefaultStyles 
