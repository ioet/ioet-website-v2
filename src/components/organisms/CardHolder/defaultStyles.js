import { defaultGrid } from "../../../maps/defaultStyles"

const { alignItems, justify, ...gridProps } = defaultGrid

const defaultStyles = {
  root: {
    color: "black",
    background: "white",
    marginTop: 0.5,
    marginBottom: 0.5,
    marginLeft: 0,
    marginRight: 0,
    padding: 2,
  },
  grid: {
    ...gridProps,
    justify: "center",
    alignItems: "stretch",
  },
}

export default defaultStyles
