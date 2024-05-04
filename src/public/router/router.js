import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '../pages/home.page.vue';
import VehiclesPage from '../../vehicle-management/pages/vehicles.page.vue';
import ReservationPage from '../../booking-reservation/pages/reservation.page.vue';
import ConfirmationPage from '../../booking-reservation/pages/confirmation.page.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/vehículos', component: VehiclesPage },
  { path: '/reservation', component: ReservationPage},
  {path: '/confirmation',component: ConfirmationPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
