import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
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
  //   formControl: {
  //     margin: theme.spacing(3),
  //   },
}))

function CheckboxesGroup({ command, setCommand }) {
  const classes = useStyles()
  
  const handleChange = (event) => {
    setCommand(event.target.name)
    // setState({ ...state, [event.target.name]: event.target.checked })
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
    // setFunctions: (functions) => dispatch({ type: 'SET_FUNCTIONS', functions }),
    // setAlgorithmState: (value) =>
    //   dispatch({ type: 'SET_ALGORITHM_STATE', value }),
    // setCurrentGeneration: (value) =>
    //   dispatch({ type: 'SET_CURRENT_GENERATION', value }),
    // setBestSpecimens: (value) =>
    //   dispatch({ type: 'SET_BEST_SPECIMENS', value }),
    // setBestSpecimen: (value) => dispatch({ type: 'SET_BEST_SPECIMEN', value }),
  }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(CheckboxesGroup)
export default Container
