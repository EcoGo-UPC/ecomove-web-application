import axios from 'axios';
import authHeader from '../../shared/helpers/authHeader.js';
import { enviroment } from '../../enviroments/enviroment.js';

export class EcoVehiclesService {

  serverBasePath = enviroment.serverBasePath

  getVehicles() {
    return axios.get(`${this.serverBasePath}/eco-vehicles`, { headers: authHeader() });
  }

  getAvailableVehicles() {
    return axios.get(`${this.serverBasePath}/eco-vehicles/status/disponible`, { headers: authHeader() });
  }

  getVehicle(id) {
    return axios.get(`${this.serverBasePath}/eco-vehicles/id/${id}`, { headers: authHeader() });
  }
}