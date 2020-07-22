const defaultLocaleMap = new Map([
  ["en-US", "en"],
  ["es-419", "es"],
  ["defaultLocale", "en"],
])

// This kind of export is necesary to access this map on gatsby-node
module.exports = defaultLocaleMap
