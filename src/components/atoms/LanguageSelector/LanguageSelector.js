import React, { useState } from "react"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import { makeStyles } from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl"

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(0.5),
    minWidth: 120,
  },
  whiteColor: {
    color: "white",
  },
}))

const LanguageSelector = ({ selectorId, name, options }) => {
  const classes = useStyles()
  const [selectedValue, setSelectedValue] = useState(options[0].value)

  const handleChange = event => {
    setSelectedValue(event.target.value)
    console.log(selectedValue)
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
      >
        {options.map((optionItem, index) => {
          return <MenuItem key={`${index}-${optionItem.text}`} value={optionItem.value}>{optionItem.text}</MenuItem>
        })}
      </Select>
    </FormControl>
  )
}

export default LanguageSelector
