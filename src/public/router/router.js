import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '../pages/home.page.vue';
import VehiclesPage from '../../vehicle-management/pages/vehicles.page.vue';
import RatesPage from "../../user-management/pages/rates-page.vue";

const routes = [
  { path: '/rates', component: RatesPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
