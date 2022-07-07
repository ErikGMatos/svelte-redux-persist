import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/images/search?limit=8&size=full&breed_id=beng&sub_id=demo-aeb46b'
})

export default api;