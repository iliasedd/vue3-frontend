import axios from 'axios'

export default {
  namespaced: true,
  state: {
    token: null,
    user: null
  },
  getters: {
    authenticated(state) {
      return state.token && state.user
    },
    user(state) {
      return state.user
    }
  },
  actions: {
    async signIn({ dispatch }, credentials) {
      try {
        const response = await axios.post("auth/login", credentials)
        return dispatch('attempt', response.data.access_token)
      } catch (error) {
        console.log(error)
      }
    },
    signOut({ commit }) {
      return axios.post("auth/logout").then(() => {
        commit('setToken', null)
        commit('setUser', null)
      })
    },
    async attempt({ commit, state }, token) {
      try {
        if (token) {
          commit('setToken', token)
        }
        if (!state.token) {
          return
        }
        const response = await axios.get("auth/user-profile")

        commit('setUser', response.data)
      } catch (error) {
        console.log(error)
        commit('setToken', null)
        commit('setUser', null)
      }
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUser(state, data) {
      state.user = data
    }
  }
}