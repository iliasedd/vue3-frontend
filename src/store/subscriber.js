import store from '@/store'
import axios from 'axios'

store.subscribe((mutation) => {
  if (mutation.type === 'auth/setToken') {
    if (mutation.payload) {
      axios.defaults.headers.common['authorization'] = `Bearer ${mutation.payload}`
      localStorage.setItem("token", mutation.type)
    } else {
      axios.defaults.headers.common['authorization'] = null
      localStorage.removeItem("token")
    }
  }
})