import ScheduleComponent from './Schedule'
import Vue from 'vue'


const Schedule = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component(ScheduleComponent.name, ScheduleComponent)
  }
}

export default Schedule.install

