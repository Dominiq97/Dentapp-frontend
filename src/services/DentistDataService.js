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


