import { accumulateKeys, checkEmptyStyle, isObject } from "./utils"

const cleanStyle = style => {
  return isObject(style)
    ? Object.entries(style)
        .map(([innerKey, innerValue]) => {
          const mappedValue = cleanStyle(innerValue)
          return checkEmptyStyle(mappedValue) ? { [innerKey]: mappedValue } : {}
        })
        .reduce(accumulateKeys)
    : style
}

const overrideStyle = (defaultstyle, newStyle) =>
  cleanStyle(
    newStyle == null
      ? defaultstyle
      : isObject(newStyle)
      ? Object.entries(defaultstyle)
          .map(([innerKey, innerValue]) => ({
            [innerKey]: overrideStyle(innerValue, newStyle[innerKey]),
          }))
          .reduce(accumulateKeys)
      : checkEmptyStyle(newStyle)
      ? newStyle
      : defaultstyle
  )

export { cleanStyle, overrideStyle }
