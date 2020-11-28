import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles'
import send from './send'
function ElevationScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      'font-size': 16,
    },
  },
  right: {
    marginLeft: 'auto',
  },
}))
export default function TopBar(props) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className={classes.root}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => send('!q')}
            >
              !q
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => send('!fs')}
            >
              !fs
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => send('!pause')}
            >
              !pause
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => send('!p')}
            >
              !play
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => send('!clean')}
            >
              !clean
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.right}
              onClick={() => send('!disconnect')}
            >
              !Disconnect
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  )
}
