import { createStore } from 'vuex'
import auth from './modules/auth'

/**
 * See this link for info on persisting state via cookies
 * https://stackoverflow.com/questions/43027499/vuex-state-on-page-refresh
 */
export default createStore({
  modules: {
    auth
  }
})
