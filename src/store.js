import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from './axios-api'
import DentistDataService from './services/DentistDataService'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
     accessToken: null,
     refreshToken: null,
     is_dentistToken: false,
     is_patientToken: false,
     is_clinicToken: false,
     APIData: '',
  },
  mutations: {
    updateStorage (state, { access, refresh, is_dentist, is_patient, is_clinic }) {
      state.accessToken = access
      state.refreshToken = refresh
      state.is_dentistToken= is_dentist
      state.is_clinicToken = is_clinic
      state.is_patientToken = is_patient
    },
    destroyToken (state) {
      state.accessToken = null
      state.refreshToken = null
      state.is_dentistToken = false
      state.is_patientToken = false
      state.is_clinicToken = false
    }
  },
  getters: {
    loggedIn (state) {
      return state.accessToken != null
    },
    getUser(state){
      return state.username
    },
    getUserType(state){
      if (state.is_dentistToken){
        return 'dentist'
      }else if (state.is_patientToken){
        return 'patient'
      }else if (state.is_clinicToken){
        return 'clinic'
      }else{
        return 'nimic'
      }
    },


  },



  actions: {

    userLogout (context) {
      if (context.getters.loggedIn) {
          context.commit('destroyToken')
          localStorage.setItem('userType', 'nimic')
      }
    },
    userLogin(context, usercredentials) {
      return new Promise((resolve, reject) => {
        getAPI.post('/api/token/', {
          username: usercredentials.username,
          password: usercredentials.password,
        })
          .then(response => {
            context.commit('updateStorage', { access: response.data.access, refresh: response.data.refresh, is_dentist:response.data.is_dentist,is_clinic:response.data.is_clinic,is_patient:response.data.is_patient })
            console.log(usercredentials.username)
            localStorage.setItem('username', usercredentials.username)
            localStorage.setItem('password', usercredentials.password)
            localStorage.setItem('loggedId', response.data.pk)
            // localStorage.setItem('loggedPat', DentistDataService.getPatient(localStorage.getItem('loggedId')))
            // localStorage.setItem('loggedDen', DentistDataService.getDentist(localStorage.getItem('loggedId')))

            if (response.data.is_dentist){
              localStorage.setItem('userType', 'dentist')
            }else if(response.data.is_patient){
              localStorage.setItem('userType', 'patient')
            }else if(response.data.is_clinic){
              localStorage.setItem('userType', 'admin')
            }
            localStorage.setItem('token', response.data.access)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    // getPatientId(){
    //   id = DentistDataService.getPatient(respo)

    // },


    addApp(context, data) {

      return new Promise((resolve, reject) => {
        getAPI.post('/api/appointments/', {

          date_time: data.date_time,
          patient: data.patient,
          dentist: data.dentist,
          status: "pending",


        })
          .then(response => {
            context.commit('updateStorage', { access: response.data.access, refresh: response.data.refresh})
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    }
    ,
    registerUser(context, data) {
      return new Promise((resolve, reject) => {
        getAPI.post('/api/jwtauth/register/', {

          username: data.username,
          password: data.password,
          password2: data.password2,
          email: data.email,
          is_dentist: false,
          is_clinic: false,
          is_patient: true,
          firstname: "patient",
          lastname: "patient"

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
    registerDentist(context, data) {
      return new Promise((resolve, reject) => {
        getAPI.post('/api/jwtauth/register/', {
          username: data.username,
          password: data.password,
          password2: data.password2,
          email: data.email,
          firstname: data.firstname,
          lastname:data.lastname,
          is_dentist: true,
          is_clinic: false,
          is_patient: false
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
    registerAdmin(context, data) {
      return new Promise((resolve, reject) => {
        getAPI.post('/api/jwtauth/register/', {

          username: data.username,
          password: data.password,
          password2: data.password2,
          email: data.email,
          is_dentist: false,
          is_clinic: true,
          is_patient: false

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
