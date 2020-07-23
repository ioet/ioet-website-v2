import { defaultGrid } from "../../../maps/defaultStyles"

const { alignItems, justify, ...gridProps } = defaultGrid

const defaultStyles = {
  root: {
    color: "black",
    background: "white",
    marginTop: 0.5,
    marginBottom: 0.5,
    marginLeft: "",
    marginRight: "",
    padding: 2,
  },
  grid: {
    ...gridProps,
    justify: "center",
    alignItems: "stretch",
  },
}

export default defaultStyles
