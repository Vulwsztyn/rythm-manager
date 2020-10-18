import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import axios from 'axios'
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
  const classes = useStyles()
  const [myList, setMyList] = React.useState([])

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
      const command = rest.join('-').trim()
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
  React.useEffect(() => {
    async function effect() {
      const { data } = await axios.get(
        'https://raw.githubusercontent.com/Vulwsztyn/rythm-manager/config/config'
      )
      console.log(dataMapper(data))
      setMyList(dataMapper(data))
    }
    effect()
  }, [])

  const listMapper = (padding) => (e) => {
    return (
      <>
        <ListItem
          button={e.command}
          key={e.name}
          style={{ paddingLeft: padding + 'em' }}
          onClick={async () => {
            if (e.command && e.command) {
              await await axios.post('https://rythm-manager.herokuapp.com/', {
                msg: e.command,
              })
            }
          }}
        >
          <ListItemText primary={e.name} />
        </ListItem>
        {e.children ? (
          <List component="div" disablePadding>
            {e.children.map(listMapper(padding + 4))}
          </List>
        ) : (
          <></>
        )}
      </>
    )
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {myList.map(listMapper(0))}
    </List>
  )
}
