import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '../pages/home.page.vue';
import VehiclesPage from '../../vehicle-management/pages/vehicles.page.vue';
import AlertsPage from '../../customer-support/pages/alerts.page.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/vehículos', component: VehiclesPage },
  { path: '/alerts', component: AlertsPage},

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
