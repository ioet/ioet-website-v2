const defaultStyle = {
  img: {
    width: "",
    height: "",
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  root: {
    backgroundImage: ["", ""],
    backgroundSize: "",
    backgroundPosition: "",
    backgroundRepeat: "",
    color: "",
    height: "",
    width: "",
    padding: 2,
    marginBottom: 0.5,
    marginTop: 0,
    margin: "auto",
  },
  text: {
    p: {
      align: "justify",
      color: "initial",
      display: "initial",
    },
    h1: {
      align: "inherit",
      color: "initial",
      display: "initial",
    },
    h2: {
      align: "inherit",
      color: "initial",
      display: "initial",
    },
    h3: {
      align: "inherit",
      color: "initial",
      display: "initial",
    },
    h4: {
      align: "inherit",
      color: "initial",
      display: "initial",
    },
    h5: {
      align: "inherit",
      color: "initial",
      display: "initial",
    },
    h6: {
      align: "inherit",
      color: "initial",
      display: "initial",
    },
  },
  grid: {
    spacing: 2,
    direction: "row",
    alignItems: "center",
    justify: "flex-start",
    alignContent: "stretch",
  },
}

const accumulateKeys = (previousValue, currentValue) => ({ ...previousValue, ...currentValue })

const checkEmptyStyle = value => (Array.isArray(value) ? !value.includes("") : value !== "")

const isObject = obj => obj === Object(obj) && !Array.isArray(obj)

const cleanStyle = style => {
  const cleanStyleInner = value => {
    if (isObject(value)) {
      return Object.entries(value)
        .map(([innerKey, innerValue]) => {
          const mappedValue = cleanStyleInner(innerValue)
          return checkEmptyStyle(mappedValue)
            ? {
                [innerKey]: mappedValue,
              }
            : {}
        })
        .reduce(accumulateKeys)
    } else {
      return value
    }
  }

  return Object.entries(style)
    .map(([key, value]) => ({ [key]: cleanStyleInner(value) }))
    .reduce(accumulateKeys)
}

const overrideStyle = (defaultstyle, newStyle) => {
  const innerOverrideStyle = (innerDefault, innerNew) => {
    if (!innerNew) {
      return innerDefault
    } else {
      if (isObject(innerNew)) {
        return Object.entries(innerDefault)
          .map(([innerKey, innerValue]) => {
            return {
              [innerKey]: innerOverrideStyle(innerValue, innerNew[innerKey]),
            }
          })
          .reduce(accumulateKeys)
      } else {
        return innerNew
      }
    }
  }

  return cleanStyle(
    Object.entries(defaultstyle)
      .map(([key, value]) => ({ [key]: innerOverrideStyle(value, newStyle[key]) }))
      .reduce(accumulateKeys)
  )
}

export { defaultStyle, cleanStyle, overrideStyle }
