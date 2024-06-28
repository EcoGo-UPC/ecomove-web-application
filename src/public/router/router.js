import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '../pages/home.page.vue';
import LoginPage from '../../user-management/pages/login.page.vue';
import RegisterPage from '../../user-management/pages/register.page.vue';
import VehiclesPage from '../../vehicle-management/pages/vehicles.page.vue';
import SettingsPage from '../../user-management/pages/settings.page.vue';
import MembershipsPage from '../../user-management/pages/memberships.page.vue';
import ReviewsPage from '../../user-management/pages/reviews.page.vue';
import AvailabilityPage from '../../vehicle-management/pages/availability.page.vue';
import ReservationPage from '../../booking-reservation/pages/reservation.page.vue';
import BookingPage from '../../booking-reservation/pages/booking.page.vue';
import AlertsPage from '../../customer-support/pages/alerts.page.vue';
import SupportPage from '../../customer-support/pages/support.page.vue';
import MethodsPage from '../../payment/pages/methods.page.vue';
import HistoryPage from '../../booking-reservation/pages/history.page.vue';

import RatesPage from "../../user-management/pages/rates-page.vue";
import RatesvPage from "../../user-management/pages/ratesv-page.vue";
import ProfilePage from "../../user-management/pages/profile.page.vue";
import ConfirmationRegisterPage from "../../user-management/pages/confirmation-register.page.vue";

import InputCard from '../../payment/pages/input-card.page.vue';
import PaymentMethodPage from '../../payment/pages/payment-method.page.vue';
import SubscriptionPage from "../../payment/pages/subscription.page.vue";
import ConfirmationCardPage from "../../payment/pages/confirmation-card.page.vue";


const routes = [
<<<<<<< HEAD
  { path: '/', component: HomePage },
  { path: '/vehículos', component: VehiclesPage },
=======
  { path: '/', redirect: '/inicio'},
  { path: '/inicio', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/vehiculos', component: VehiclesPage },
  { path: '/ajustes', component: SettingsPage },
  { path: '/suscripciones', component: MembershipsPage },
  { path: '/calificaciones', component: ReviewsPage },
  { path: '/vehiculos-disponibles', component: AvailabilityPage },
  { path: '/reservar', component: ReservationPage},
  { path: '/reserva', component: BookingPage },
  { path: '/alertas', component: AlertsPage},
  { path: '/soporte', component: SupportPage },
  { path: '/metodos', component: MethodsPage },
  { path: '/historial', component: HistoryPage}
]
>>>>>>> main

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

