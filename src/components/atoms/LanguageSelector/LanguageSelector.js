import React, { useState } from "react"
import Select from "@material-ui/core/Select"
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const LanguageSelector = ({ selectorId, name, options }) => {
  const classes = useStyles()
  const [selectedValue, setSelectedValue] = useState("")

  const handleChange = event => {
    setSelectedValue(event.target.value)
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={selectorId}>{name}</InputLabel>
      <Select
        native
        value={selectedValue}
        onChange={handleChange}
        inputProps={{
          name: { name },
          id: { selectorId },
        }}
      >
        {options.map(optionItem => {
          return <option value={optionItem.value}>{optionItem.text}</option>
        })}
      </Select>
    </FormControl>
  )
}

export default LanguageSelector
