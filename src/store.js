import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from './axios-api'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
     accessToken: null,
     refreshToken: null,
     username: null,
     APIData: ''
  },
  mutations: {
    updateStorage (state, { access, refresh, username }) {
      state.accessToken = access
      state.refreshToken = refresh
      state.username = username
    },
    destroyToken (state) {
      state.accessToken = null
      state.refreshToken = null
    }
  },
  getters: {
    loggedIn (state) {
      return state.accessToken != null
    },
    getUser(state){
      return state.username
    }

  },
  actions: {
    userLogout (context) {
      if (context.getters.loggedIn) {
          context.commit('destroyToken')
      }
    },
    userLogin(context, usercredentials) {
      return new Promise((resolve, reject) => {
        getAPI.post('/api-token/', {
          username: usercredentials.username,
          password: usercredentials.password
        })
          .then(response => {
            context.commit('updateStorage', { access: response.data.access, refresh: response.data.refresh, username: usercredentials.username })
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    registerUser(context, data) {
      return new Promise((resolve, reject) => {
        getAPI.post('/api/jwtauth/register/', {

          username: data.username,
          password: data.password,
          password2: data.password2,
          email: data.email,
          is_dentist: false,
          is_clinic: false,
          is_patient: true

        })
          .then(response => {
            context.commit('updateStorage', { access: response.data.access, refresh: response.data.refresh})
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
  }
})
