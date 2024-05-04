import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '../pages/home.page.vue';
import VehiclesPage from '../../vehicle-management/pages/vehicles.page.vue';
import InputCard from '../../payment/pages/input-card.page.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/vehículos', component: VehiclesPage },
  { path:'/inputCard', component: InputCard }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
