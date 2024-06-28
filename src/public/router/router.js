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
import UpReviewsPage from "../../user-management/pages/up-reviews.page.vue";
import EnterCardPage from "../../payment/pages/enter-card.page.vue";
import ReportPage from "../../customer-support/pages/report.page.vue";
import PreferencesPage from "../../user-management/pages/preferences.page.vue";

const routes = [
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
  { path: '/historial', component: HistoryPage},
  { path: '/datos-tarjeta', component: EnterCardPage},
  { path: '/historial', component: HistoryPage},
  { path: '/reportar', component: ReportPage},
  { path: '/preferencias', component: PreferencesPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router