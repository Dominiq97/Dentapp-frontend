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

  create(data) {
    return http.post("/api/appointments/", data);
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


