import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '70%',
    },
    // height: '100vh' /* Magic here */,
    // display: 'flex',
    // 'justify-content': 'center',
    // 'align-items': 'center',
  },
  root2: {
    width: '100%',
    display: 'flex',
    // 'justify-content': 'center',
    // 'align-items': 'center',
  },
}))

export default function MultilineTextFields() {
  const classes = useStyles()
  const [res, setRes] = React.useState({ data: {} })
  const [dashCount, setDashCount] = React.useState(1)

  const reloadOutput = () => {}

  const handleChange = async (event) => {
    const res = await axios.post(
      'https://rythm-manager.herokuapp.com/playlistItems',
      {
        listId: event.target.value,
      }
    )
    setRes(res)
    reloadOutput()
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.root2}>
        <TextField
          id="filled-multiline-flexible"
          multiline
          rowsMax={4}
          onChange={handleChange}
          variant="filled"
          fullWidth
          placeholder="link"
          label="Link"
        />
        <TextField
          id="filled-multiline-flexible2"
          variant="filled"
          value={dashCount}
          fullWidth
          type="number"
          label="Liczba myślników"
          onChange={(e) => {
            setDashCount(e.target.value)
            reloadOutput()
          }}
        />
        <TextField
          id="filled-multiline-static"
          multiline
          value={[
            res.data.title,
            ...(!!res.data.items
              ? res.data.items.map(({ title, link }) => `${title} - ${link}`)
              : []),
          ].join('\n' + '-'.repeat(dashCount) + ' ')}
          rows={40}
          defaultValue=""
          variant="filled"
          fullWidth
        />
      </div>
    </form>
  )
}
