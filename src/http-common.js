import axios from 'axios'
import VueCookies from 'vue-cookies'
var csrftoken = VueCookies.get('csrftoken');
export default axios.create({
  baseURL: 'http://127.0.0.1:8000',

  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    'Authorization': 'Bearer '+localStorage.getItem('token'),
    'X-CSRFTOKEN': csrftoken
  },
  timeout: 10000
});
