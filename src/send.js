import axios from 'axios'
const send = (text) => {
  axios.post(process.env.REACT_APP_SERVER_URL, {
    msg: text,
  })
}
export default send
