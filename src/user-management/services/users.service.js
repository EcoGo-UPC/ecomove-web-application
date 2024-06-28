import axios from 'axios';
import authHeader from '../../shared/helpers/authHeader.js';
import { enviroment } from '../../enviroments/enviroment.js';

export class UsersService {

  serverBasePath = enviroment.serverBasePath

  getUser(username) {
    return axios.get(`${this.serverBasePath}/users/${username}`, { headers: authHeader() });
  }

  signIn(user) {
    return axios.post(`${this.serverBasePath}/authentication/sign-in`,user );
  }

  
  signUp(user){
    return axios.post(`${this.serverBasePath}/authentication/sign-up`, user);
  }
}