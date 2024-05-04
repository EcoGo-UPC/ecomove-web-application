import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '../pages/home.page.vue';
import VehiclesPage from '../../vehicle-management/pages/vehicles.page.vue';
import ReservationPage from '../../booking-reservation/pages/reservation.page.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/vehículos', component: VehiclesPage },
  { path: '/reservation', component: ReservationPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
