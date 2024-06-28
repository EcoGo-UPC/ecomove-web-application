import axios from 'axios';
import authHeader from '../../shared/helpers/authHeader.js';
import { enviroment } from '../../enviroments/enviroment.js';

export class TicketsService {

  serverBasePath = enviroment.serverBasePath

  postTicket(ticket) {
    return axios.post(`${this.serverBasePath}/tickets`, ticket, { headers: authHeader() });
  }
}