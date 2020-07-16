const defaultImg = {
  width: "",
  height: "",
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
}

const defaultRoot = {
  backgroundImage: "",
  backgroundSize: "",
  backgroundPosition: "",
  backgroundRepeat: "",
  color: "",
  background: "",
  height: "",
  width: "",
  padding: 2,
  marginBottom: 0.5,
  marginTop: 0,
  margin: "auto",
}

const defaultP = {
  align: "justify",
  color: "initial",
  display: "initial",
}

const defaultH = {
  align: "inherit",
  color: "initial",
  display: "initial",
}

const defaultText = {
  p: defaultP,
  h1: defaultH,
  h2: defaultH,
  h3: defaultH,
  h4: defaultH,
  h5: defaultH,
  h6: defaultH,
}

const defaultGrid = {
  spacing: 2,
  direction: "row",
  alignItems: "center",
  justify: "flex-start",
  alignContent: "stretch",
}

const defaultGlobal = {
  img: defaultImg,
  text: defaultText,
  grid: defaultGrid,
  root: defaultRoot,
}

export { defaultImg, defaultRoot, defaultP, defaultH, defaultText, defaultGrid, defaultGlobal }
