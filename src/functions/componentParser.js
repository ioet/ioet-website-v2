import contentfulComponentDict from "../maps/componentMap"

const contentfulTypeToComponent = componentType => {
  const componentPath = contentfulComponentDict.get(componentType)
  return componentPath ? require(`../${componentPath}`).default : null
}

export { contentfulTypeToComponent }
