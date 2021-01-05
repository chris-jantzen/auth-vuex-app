const axios = require('axios')

const state = {
  authenticated: false,
  username: '',
  email: '',
}

const getters = {
  getUserInfo: () => ({
    username: state.username,
    email: state.email,
  }),
}

const baseRoute = 'http://localhost:8081/auth'

// async
const actions = {
  authenticate: async ({ commit }, password) => {
    const res = await axios.post(`${baseRoute}/login`, {
      username: state.username,
      password,
    })
    if (res.body.data.success) {
      commit('authenticated', true)
    }
  },
  signUp: async (password) => {
    const res = await axios.post(`${baseRoute}/signup`, {
      email: state.username,
      username: state.username,
      password: password,
    })
    if (res.body.data.success) {
      commit('authenticated', true)
    }
  },
}

// sync
const mutations = {
  setEmail: (state, email) => {
    state.email = email
  },
  setUsername: (state, username) => {
    state.username = username
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
