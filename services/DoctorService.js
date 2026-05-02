import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm";

export default class DoctorService {
    constructor() {
        this.api = "http://127.0.0.1:8000/api/doctors";
    }

    async getAllDoctors() {
        const res = await axios.get(this.api);
        return res.data;
    }

    async addDoctor(doctor) {
        const res = await axios.post(this.api, doctor);
        return res.data;
    }

    async removeDoctor(doctorId) {
        const res = await axios.delete(`${this.api}/${doctorId}`);
        return res.data;
    }

    async findDoctor(doctorId) {
        const res = await axios.get(`${this.api}/${doctorId}`);
        return res.data;
    }

    async updateDoctor(doctorId, updatedDoctor) {
        const res = await axios.put(`${this.api}/${doctorId}`, updatedDoctor);
        return res.data;
    }
}
