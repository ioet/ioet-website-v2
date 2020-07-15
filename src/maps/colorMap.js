import theme from "../components/theme"
import { flattenObject } from "../functions/utils"

const colorMap = new Map(Object.entries(flattenObject(theme.palette)))

const getColor = color => {
  return colorMap.has(color) ? colorMap.get(color) : color
}

export { getColor }
export default colorMap
