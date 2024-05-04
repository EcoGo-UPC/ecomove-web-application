import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '../pages/home.page.vue';
import VehiclesPage from '../../vehicle-management/pages/vehicles.page.vue';
import InputCard from '../../payment/pages/input-card.page.vue';
import PaymentMethodPage from '../../payment/pages/payment-method.page.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/vehículos', component: VehiclesPage },
  { path:'/inputCard', component: InputCard },
  { path:'/paymentmethod', component: PaymentMethodPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
