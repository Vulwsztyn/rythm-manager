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
  //   formControl: {
  //     margin: theme.spacing(3),
  //   },
}))

function CheckboxesGroup({ prefix, setPrefix }) {
  const classes = useStyles()

  const handleChange = (event) => {
    setPrefix(event.target.name)
    // setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup className={classes.horizontal}>
          {['!', '*'].map((text) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={prefix === text}
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
  const { prefix } = state
  return {
    prefix,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPrefix: (value) => dispatch({ type: 'CHANGE_PREFIX', value }),
  }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(CheckboxesGroup)
export default Container
