import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '../pages/home.page.vue';
import VehiclesPage from '../../vehicle-management/pages/vehicles.page.vue';
import SupportPage from '../../customer-support/pages/support.page.vue'
import BookingPage from "../../booking-and-reservation/pages/booking.page.vue";
import ChoosePage from '../../vehicle-management/pages/choose.page.vue';
import AlertsPage from '../../customer-support/pages/alerts.page.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/vehicles', component: VehiclesPage },
  { path: '/support', component: SupportPage },
  { path: '/booking', component: BookingPage },
  { path: '/choose', component: ChoosePage },
  { path: '/alerts', component: AlertsPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router

