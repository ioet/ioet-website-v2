import theme from "../../theme"
import { navigate } from "gatsby"
import React, { useState } from "react"
import { ThemeProvider } from "@material-ui/styles"
import { makeStyles } from "@material-ui/core/styles"
import LanguageIcon from "@material-ui/icons/Language"
import { Select, MenuItem, FormControl } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  formControl: {
    marginBottom: theme.spacing(0.1),
    minWidth: 12,
  },
  whiteColor: {
    color: "white",
  },
  contentLanguage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  languageIcon: {
    paddingRight: theme.spacing(0.5),
  },
}))

const LanguageSelector = ({ selectorId, name, options, parentLocaleMap, defaultLocale }) => {
  const classes = useStyles()
  const [selectedValue, setSelectedValue] = useState(defaultLocale)

  const handleChange = event => {
    setSelectedValue(event.target.value)
    console.log(selectedValue)
    navigate(`/${parentLocaleMap.get(event.target.value)}/`)
  }

  return (
    <FormControl className={classes.formControl}>
      <Select
        disableUnderline
        value={selectedValue}
        onChange={handleChange}
        inputProps={{
          name: name,
          id: selectorId,
        }}
        classes={{
          root: classes.whiteColor,
          icon: classes.whiteColor,
        }}
        className={classes.contentLanguage}
      >
        {options.map((optionItem, index) => {
          return (
            <MenuItem key={`${index}-${optionItem.text}`} value={optionItem.value}>
              <div className={classes.contentLanguage}>
                <LanguageIcon fontSize="small" className={classes.languageIcon} />
                <ThemeProvider theme={theme}>{optionItem.text}</ThemeProvider>
              </div>
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default LanguageSelector
