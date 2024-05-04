import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '../pages/home.page.vue';
import VehiclesPage from '../../vehicle-management/pages/vehicles.page.vue';
import RatesPage from "../../user-management/pages/rates-page.vue";
import RatesvPage from "../../user-management/pages/ratesv-page.vue";
import ProfilePage from "../../user-management/pages/profile.page.vue";

const routes = [
  { path: '/rates', component: RatesPage },
  { path: '/profile', component: ProfilePage},
  { path: '/', component: RatesvPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
