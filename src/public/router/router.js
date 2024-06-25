import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '../pages/home.page.vue';
import VehiclesPage from '../../vehicle-management/pages/vehicles.page.vue';

import RatesPage from "../../user-management/pages/rates-page.vue";
import RatesvPage from "../../user-management/pages/ratesv-page.vue";
import ProfilePage from "../../user-management/pages/profile.page.vue";
import ConfirmationRegisterPage from "../../user-management/pages/confirmation-register.page.vue";

import InputCard from '../../payment/pages/input-card.page.vue';
import PaymentMethodPage from '../../payment/pages/payment-method.page.vue';
import SubscriptionPage from "../../payment/pages/subscription.page.vue";
import ConfirmationCardPage from "../../payment/pages/confirmation-card.page.vue";


const routes = [
  { path: '/', component: HomePage },
  { path: '/vehículos', component: VehiclesPage },

  { path:'/inputCard', component: InputCard },
  { path:'/paymentmethod', component: PaymentMethodPage },
  { path: '/subscriptions', component: SubscriptionPage },
  { path: '/confirmationCard', component: ConfirmationCardPage}

]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router

