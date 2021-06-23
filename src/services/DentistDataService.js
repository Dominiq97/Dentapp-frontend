import http from "../http-common";

class DentistDataService {
  getDentists() {
    return http.get("/api/dentists");
  }

  get(id) {
    return http.get(`/api/booking/dentist/${id}`);
  }

  getPatient(id) {
    return http.get(`/api/patients/${id}`);
  }

  getDentist(id) {
    return http.get(`/api/dentists/${id}`);
  }

  create(data) {
    return http.post("/api/appointments/", data);
  }

  getAppointmentsAfterDentist(id) {
    return http.get(`/api/appointments/${id}`);
  }

  accept(id){
    return http.post(`/api/appointment/accept/${id}`);
  }

  decline(id){
    return http.post(`/api/appointment/decline/${id}`);
  }

  get_this_week_mon(id){
    return http.get(`/api/appointment/this_week_mon/${id}`);
  }

  get_this_week_tue(id){
    return http.get(`/api/appointment/this_week_tue/${id}`);
  }

  get_this_week_wed(id){
    return http.get(`/api/appointment/this_week_wed/${id}`);
  }

  get_this_week_thu(id){
    return http.get(`/api/appointment/this_week_thu/${id}`);
  }

  get_this_week_fri(id){
    return http.get(`/api/appointment/this_week_fri/${id}`);
  }

  get_that_week(id){
    return http.get(`/api/appointment/that_week/${id}`);
  }

  get_today(id){
    return http.get(`/api/appointments/today/${id}`);
  }

  get_patients_dentist(id){
    return http.get(`/api/appointments/get_patients_dentist/${id}`)
  }

  get_patients_pending(id){
    return http.get(`/api/appointments/pending/${id}`)
  }

  get_clinic(id){
    return http.get(`/api/clinics/${id}`)
  }

  get_dentists_of_clinic(id){
    return http.get(`/api/dentists_of_clinic/${id}`)
  }

  get_appointments_of_clinic(id){
    return http.get(`/api/appointments_of_clinic/${id}`)
  }

  get_patients_of_clinic(id){
    return http.get(`/api/patients_of_clinic/${id}`)
  }

  get_patient_obj(id){
    return http.get(`/api/patient/${id}`)
  }

  get_dentist_obj(id){
    return http.get(`/api/dentist/${id}`)
  }

  get_clinic_obj(id){
    return http.get(`/api/clinic/${id}`)
  }

  get_patients_of_dentist(id){
    return http.get(`/api/patients_of_dentist/${id}`)
  }



  // update(id, data) {
  //   return http.put(`/tutorials/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/tutorials/${id}`);
  // }

  // deleteAll() {
  //   return http.delete(`/tutorials`);
  // }

  // findByTitle(title) {
  //   return http.get(`/tutorials?title=${title}`);
  // }
}

export default new DentistDataService();


