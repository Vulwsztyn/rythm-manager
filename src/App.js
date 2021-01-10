import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import axios from 'axios'
import send from './send'
const R = require('ramda')

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

export default function NestedList() {
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  const classes = useStyles()
  const [myList, setMyList] = React.useState([])

  function extractHash(link) {
    const res1 = link.match(/watch\?v=([^&]*)/)
    const res2 = link.match(/youtu\.be\/([^?]*)/)
    const hash = (res1 && res1[1]) || (res2 && res2[1]) || link
    return hash
  }

  React.useEffect(() => {
    function reduceFn(acc, x, path = []) {
      if (x.length < 1) return acc
      if (x[0] === '-') {
        return reduceFn(acc, x.slice(1), [
          ...path,
          R.path(path, acc).length - 1,
          'children',
        ])
      } else {
        const [title, ...rest] = x.split('-')
        const command = extractHash(rest.join('-').trim())
        return R.assocPath(
          [...path, R.pathOr([], path, acc).length],
          {
            name: title.trim(),
            ...(command.length > 0 ? { command } : {}),
          },
          acc
        )
      }
    }

    function dataMapper(data) {
      const mapped = R.reduce(reduceFn, [], data.split('\n'))
      return mapped
    }

    async function effect() {
      const { data } = await axios.get(
        'https://raw.githubusercontent.com/Vulwsztyn/rythm-manager/config/config'
      )
      console.log(dataMapper(data))
      setMyList(shuffle(dataMapper(data)))
      setInterval(
        () => axios.get('https://rythm-manager.herokuapp.com/'),
        10000
      )
    }
    effect()
  }, [])

  async function sendList(list) {
    console.log(list)
    await send(
      '!p http://www.youtube.com/watch_videos?video_ids=' + list.join(',')
    )
  }

  function elemToList(e) {
    if (!e.children) {
      return [e.command]
    } else {
      return e.children.map((e) => elemToList(e)).reduce((x, y) => x.concat(y))
    }
  }

  async function handleClick(e) {
    const list = elemToList(e)
    sendList(list.length <= 50 ? list : shuffle(list))
  }

  const listMapper = (padding) => (e) => {
    return (
      <>
        <ListItem
          button={true}
          key={e.name}
          style={{ paddingLeft: (padding + 1) * 4 + 'em' }}
          onClick={async () => {
            handleClick(e)
          }}
        >
          <ListItemText primary={e.name} />
        </ListItem>
        {e.children ? (
          <List component="div" disablePadding>
            {shuffle(e.children).map(listMapper(padding + 1))}
          </List>
        ) : (
          <></>
        )}
      </>
    )
  }

  return (
    <Grid container spacing={3}>
      {[
        myList.slice(
          Math.floor(myList.length / 4) * 0,
          Math.floor(myList.length / 4) * 1
        ),
        myList.slice(
          Math.floor(myList.length / 4) * 1,
          Math.floor(myList.length / 4) * 2
        ),
        myList.slice(
          Math.floor(myList.length / 4) * 2,
          Math.floor(myList.length / 4) * 3
        ),
        myList.slice(
          Math.floor(myList.length / 4) * 3,
          Math.floor((myList.length / 4) * 4)
        ),
      ].map((splitList) => (
        <Grid xs={12} sm={6} md={4} lg={3}>
          {splitList.map((band) => {
            return (
              <Grid item xs={12}>
                <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  className={classes.root}
                >
                  {[band].map(listMapper(0))}
                </List>
              </Grid>
            )
          })}
        </Grid>
      ))}
    </Grid>
  )
}