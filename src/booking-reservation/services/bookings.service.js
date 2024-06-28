import axios from 'axios';
import authHeader from '../../shared/helpers/authHeader.js';
import { enviroment } from '../../enviroments/enviroment.js';

export class BookingsService {

  serverBasePath = enviroment.serverBasePath

  bookVehicle(booking) {
    return axios.post(`${this.serverBasePath}/bookings`, booking, { headers: authHeader() });
  }

  getBookingsByUserId(userId) {
    return axios.get(`${this.serverBasePath}/bookings/user-id/${userId}`, { headers: authHeader() });
  }
}