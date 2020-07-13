import contentfulComponentDict from "../maps/componentMap"

const contentfulTypeToComponent = (componentType, componentDict = contentfulComponentDict) => {
  const componentPath = componentDict.get(componentType)
  return componentPath ? require(`../${componentPath}`).default : null
}

export { contentfulTypeToComponent }
