const axios = require('axios')

const state = {
  authenticated: false,
  username: '',
  email: '',
}

const getters = {
  isAuthenticated: () => state.authenticated,
  getUserInfo: () => ({
    username: state.username,
    email: state.email
  })
}

const baseRoute = 'http://localhost:8081/auth'

// async
const actions = {
  authenticate: async ({ commit }, password) => {
    try {
      const res = await axios.post(`${baseRoute}/login`, {
        username: state.username,
        password
      })
      if (res.data.success) {
        commit('setAuthenticated', true)
        return true
      } else {
        return false
      }
    } catch (err) {
      console.error(err.message || 'Error');
      return false
    }
  },
  signUp: async ({ commit }, password) => {
    try {
      const res = await axios.post(`${baseRoute}/signup`, {
        email: state.username,
        username: state.username,
        password: password
      })
      if (res.body.data.success) {
        commit('setAuthenticated', true)
        return true
      } else {
        return false
      }
    } catch (err) {
      console.error(err.message)
      return false
    }
  }
}

// sync
const mutations = {
  setEmail: (state, email) => {
    state.email = email
  },
  setUsername: (state, username) => {
    state.username = username
  },
  setAuthenticated: (state, authenticated) => {
    state.authenticated = authenticated
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
