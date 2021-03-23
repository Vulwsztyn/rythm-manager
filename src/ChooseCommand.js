import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
  },
}))

function CheckboxesGroup({ command, setCommand }) {
  const classes = useStyles()

  const handleChange = (event) => {
    setCommand(event.target.name)
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup className={classes.horizontal}>
          {['p', 'pt', 'ps'].map((text) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={command === text}
                  onChange={handleChange}
                  name={text}
                  key={text}
                />
              }
              label={text}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { command } = state
  return {
    command,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCommand: (value) => dispatch({ type: 'CHANGE_COMMAND', value }),
  }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(CheckboxesGroup)
export default Container
