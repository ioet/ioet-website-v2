const defaultLocaleMap = require("../maps/localeMap")

const accumulateKeys = (previousValue, currentValue) => ({ ...previousValue, ...currentValue })

const checkEmptyStyle = value => (Array.isArray(value) ? !value.includes("") : value !== "" && value !== {})

const isObject = obj => obj === Object(obj) && !Array.isArray(obj)

const flattenObject = (ob, prefix = false, result = null) => {
  result = result || {}

  if (Array.isArray(ob) && ob.length < 1) {
    result[prefix] = []
  }

  prefix = prefix ? prefix + "." : ""

  for (const key in ob) {
    if (Object.prototype.hasOwnProperty.call(ob, key)) {
      if (isObject(ob[key])) {
        flattenObject(ob[key], prefix + key, result)
      } else {
        result[prefix + key] = ob[key]
      }
    }
  }
  return result
}

const buildLocalizedSlug = (locale, slug, localeMap = defaultLocaleMap) => {
  const actualLocale = localeMap.has(locale) ? localeMap.get(locale) : locale
  return `${actualLocale}/${slug}`
}

export { accumulateKeys, checkEmptyStyle, isObject, flattenObject, buildLocalizedSlug }
