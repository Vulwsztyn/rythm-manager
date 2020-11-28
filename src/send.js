import axios from 'axios'
const send = (text) => {
  axios.post('https://rythm-manager.herokuapp.com/', {
    msg: text,
  })
}
export default send
