import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import ChooseCommand from './ChooseCommand'
import ChoosePrefix from './ChoosePrefix'

import SkipNextSharpIcon from '@material-ui/icons/SkipNextSharp'
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp'
import PlayCircleFilledWhiteSharpIcon from '@material-ui/icons/PlayCircleFilledWhiteSharp'
import LoopSharpIcon from '@material-ui/icons/LoopSharp'
import PauseCircleFilledSharpIcon from '@material-ui/icons/PauseCircleFilledSharp'
import ClearAllSharpIcon from '@material-ui/icons/ClearAllSharp'
import QueueMusicSharpIcon from '@material-ui/icons/QueueMusicSharp'
import Forward5SharpIcon from '@material-ui/icons/Forward5Sharp'
import Forward10SharpIcon from '@material-ui/icons/Forward10Sharp'
import Forward30SharpIcon from '@material-ui/icons/Forward30Sharp'
import Replay5SharpIcon from '@material-ui/icons/Replay5Sharp'
import Replay10SharpIcon from '@material-ui/icons/Replay10Sharp'
import Replay30SharpIcon from '@material-ui/icons/Replay30Sharp'
function ElevationScroll(props) {
  const { children } = props
  // // Note that you normally won't need to set the window ref as useScrollTrigger
  // // will default to window.
  // // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 8 : 0,
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
      flexGrow: 1,
      'font-size': 16,
    },
  },
  right: {
    marginLeft: 'auto',
  },
}))
export default function TopBar(props) {
  const { sendWithPrefix } = props
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className={classes.root}>
            <Grid
              container
              spacing={1}
              // padding={20}
              direction="row"
              // justify="space-between"
            >
              <Grid item xs={12}>
                <Grid
                  justify="space-between" // Add it here :)
                  container
                  spacing={24}
                >
                  <Grid item>
                    <Grid container spacing={1}>
                      {[
                        {
                          command: 'q',
                          buttonFiller: <QueueMusicSharpIcon />,
                        },
                        {
                          command: 'fs',
                          buttonFiller: <SkipNextSharpIcon />,
                        },
                        {
                          command: 'shuffle',
                          buttonFiller: <ShuffleSharpIcon />,
                        },
                        {
                          command: 'pause',
                          buttonFiller: <PauseCircleFilledSharpIcon />,
                        },
                        {
                          command: 'play',
                          buttonFiller: <PlayCircleFilledWhiteSharpIcon />,
                        },
                        {
                          command: 'clean',
                          buttonFiller: <ClearAllSharpIcon />,
                        },
                        {
                          command: 'repeat on',
                          buttonFiller: <LoopSharpIcon />,
                        },
                      ].map(({ command, buttonFiller }) => (
                        <Grid item>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => sendWithPrefix(command)}
                          >
                            {buttonFiller}
                          </Button>
                        </Grid>
                      ))}
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => props.playRandomN(50)}
                        >
                          Random 50
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => props.oneOfEverything()}
                        >
                          One of Everything
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid container spacing={1}>
                      {['remove ALL', 'disconnect'].map((text) => (
                        <Grid item>
                          <Button
                            variant="contained"
                            color="secondary"
                            className={classes.right}
                            onClick={() => sendWithPrefix(text)}
                          >
                            {text}
                          </Button>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  justify="space-between" // Add it here :)
                  container
                  spacing={24}
                >
                  <Grid item>
                    <Grid container spacing={1}>
                      {[
                        {
                          command: 'rewind 30',
                          buttonFiller: <Replay30SharpIcon />,
                        },
                        {
                          command: 'rewind 10',
                          buttonFiller: <Replay10SharpIcon />,
                        },
                        {
                          command: 'rewind 5',
                          buttonFiller: <Replay5SharpIcon />,
                        },
                        {
                          command: 'forward 5',
                          buttonFiller: <Forward5SharpIcon />,
                        },
                        {
                          command: 'forward 10',
                          buttonFiller: <Forward10SharpIcon />,
                        },
                        {
                          command: 'forward 30',
                          buttonFiller: <Forward30SharpIcon />,
                        },
                      ].map(({ command, buttonFiller }) => (
                        <Grid item>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => sendWithPrefix(command)}
                          >
                            {buttonFiller}
                          </Button>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  <Grid item>
                    <ChoosePrefix />
                  </Grid>
                  <Grid item>
                    <ChooseCommand />
                  </Grid>
                  <Grid item>
                  </Grid>
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
