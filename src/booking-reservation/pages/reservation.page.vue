<script setup>
/**
 * Importación de componentes y servicios necesarios.
 * @module BookingPageComponent
 */

import NavbarComponent from '../../public/components/navbar.component.vue';
import FooterComponent from '../../public/components/footer.component.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { BookingsService } from '../services/bookings.service';

/** @type {ref<Date>} */
const start = ref(null);

/** @type {ref<Date>} */
const end = ref(null);

/** @type {ref<string>} */
const location = ref('');

const router = useRouter();

/**
 * Función asíncrona para establecer la reserva de vehículo.
 * Valida los campos de fecha, membresía y límites de reserva.
 * @function setReservation
 * @returns {Promise<void>}
 */
const setReservation = async () => {
  try {
    const bookingsService = new BookingsService();
    const user = JSON.parse(localStorage.getItem('user'));
    const response = await bookingsService.getBookingsByUserId(user.userId);

    if (!start.value || !end.value || !location.value.trim()) {
      alert('Por favor completa todos los campos');
      return;
    }

    const startISO = convertFormat(start.value);
    const endISO = convertFormat(end.value);

    if (!startISO || !endISO) {
      alert('Fecha inválida');
      return;
    }

    if (start.value < new Date()) {
      alert('La fecha de inicio no puede ser anterior a la fecha actual');
      return;
    }

    if (start.value >= end.value) {
      alert('La fecha de inicio no puede ser igual o posterior a la fecha de fin');
      return;
    }

    const membership = JSON.parse(localStorage.getItem('membership'));

    if (!membership) {
      alert('Debes tener una membresía para poder reservar');
      return;
    }

    if (membership.membershipCategoryId === 1 && response.length === 5) {
      alert('Tu membresía solo permite reservar 5 veces al mes');
      return;
    }

    if (membership.membershipCategoryId === 1 && (end.value - start.value) > 3600000) {
      alert('Tu membresía solo permite reservar por una hora');
      return;
    }

    if (membership.membershipCategoryId === 2 && (end.value - start.value) > 7200000) {
      alert('Tu membresía solo permite reservar por dos horas');
      return;
    }

    localStorage.setItem('reservation', JSON.stringify({ startTime: startISO, endTime: endISO, district: location.value }));
    router.push('/vehiculos-disponibles');
  } catch (error) {
    console.error('Error al establecer la reserva:', error);
  }
};

/**
 * Función para convertir una fecha a formato ISO 8601.
 * @function convertFormat
 * @param {Date} date - Fecha a convertir.
 * @returns {string | null} - Fecha en formato ISO 8601 o null si la fecha es inválida.
 */
const convertFormat = (date) => {
  if (!date) return null;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hour}:${minute}:00.000Z`;
};
</script>

<template>
  <div>
    <NavbarComponent />
    <div id="booking" class="flex flex-col items-center justify-center min-h-[70dvh] bg-primary-200 gap-20 w-full">
      <h1 class="text-7xl font-semibold text-black text-center">REALIZA TU RESERVA AHORA</h1>
      <div class="py-5 bg-primary-300 w-full flex flex-col justify-center items-center gap-10">
        <div class="flex flex-col md:flex-row justify-center items-center gap-14">
          <div id="start-date" class="flex flex-col items-center gap-2">
            <label for="start" class="font-medium">Lo quiero el</label>
            <Calendar id="start" v-model="start" showTime hourFormat="24" inputClass="text-center p-2" />
          </div>
          <div id="end-date" class="flex flex-col items-center gap-2">
            <label for="end" class="font-medium">Hasta el</label>
            <Calendar id="end" v-model="end" showTime hourFormat="24" inputClass="text-center p-2" />
          </div>
          <div id="location" class="flex flex-col items-center gap-2">
            <label for="location" class="font-medium">Distrito</label>
            <InputText id="location" type="text" v-model="location" class="text-center p-2" />
          </div>
        </div>
        <Button label="Comenzar reserva" class="bg-primary-800 px-5 py-3 border-none rounded-xl text-white" @click="setReservation" />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>