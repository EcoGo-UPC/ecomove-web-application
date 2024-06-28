import axios from 'axios';
import authHeader from '../../shared/helpers/authHeader.js';
import { enviroment } from '../../enviroments/enviroment.js';

export class MembershipsService {

  serverBasePath = enviroment.serverBasePath;

  getMembershipByUserId(userId) {
    return axios.get(`${this.serverBasePath}/memberships/user/${userId}`, { headers: authHeader() });
  }

  getMembershipCategoryById(id) {
    return axios.get(`${this.serverBasePath}/membership-categories/${id}`, { headers: authHeader() });
  }

  buyMembership(membership) {
    return axios.post(`${this.serverBasePath}/memberships`, membership, { headers: authHeader() });
  }
}