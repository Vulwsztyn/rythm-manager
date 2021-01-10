import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

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
            <Grid
              justify="space-between" // Add it here :)
              container
              spacing={24}
            >
              <Grid item>
                <Grid container spacing={1}>
                  {['!q', '!fs', '!shuffle', '!pause', '!play', '!clean'].map(
                    (text) => (
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => send(text)}
                        >
                          {text}
                        </Button>
                      </Grid>
                    )
                  )}
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => props.playRandomN(50)}
                    >
                      Random 50
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container spacing={1}>
                  {['!clear', '!disconnect'].map((text) => (
                    <Grid item>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.right}
                        onClick={() => send(text)}
                      >
                        {text}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  )
}
