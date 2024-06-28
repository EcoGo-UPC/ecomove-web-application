<script setup>
/**
 * Importación de componentes y servicios necesarios.
 * @module BookingsPageComponent
 */
import NavbarComponent from '../../public/components/navbar.component.vue';
import FooterComponent from '../../public/components/footer.component.vue';
import { ref } from 'vue';
import { BookingsService } from '../services/bookings.service';
import { EcoVehiclesService } from '../../shared/services/ecovehicles.service';

/** @type {ref<object[]>} */
let booking = ref([]);

/**
 * Función asíncrona para obtener las reservas del usuario actual.
 * @function getBookings
 * @returns {Promise<void>}
 */
const getBookings = async () => {
  try {
    const bookingsService = new BookingsService();
    const user = JSON.parse(localStorage.getItem('user'));
    const response = await bookingsService.getBookingsByUserId(user.userId);
    
    const vehiclesService = new EcoVehiclesService();
    // Iterar sobre cada reserva para obtener información detallada del vehículo
    for (let i = 0; i < response.length; i++) {
      const vehicleResponse = await vehiclesService.getVehicle(response[i].vehicleId);
      const vehicleData = vehicleResponse.data;
      
      // Actualizar el objeto de reserva con información del vehículo y formato de fechas
      response[i].vehicleId = vehicleData.model;
      response[i].startTime = new Date(response[i].startTime).toLocaleString();
      response[i].endTime = new Date(response[i].endTime).toLocaleString();
    }
    
    // Asignar el resultado al ref booking para que se refleje en la plantilla
    booking.value = response;
  } catch (error) {
    console.error('Error al obtener las reservas:', error);
  }
}

// Obtener las reservas al cargar el componente
getBookings();
</script>

<template>
  <div>
    <NavbarComponent />
    <main class="bg-primary-200 min-h-[80dvh] flex justify-center items-center flex-col gap-10 px-2">
      <h1 class="text-7xl font-bold text-center">TUS RESERVAS:</h1>
      <!-- Utilización de un componente DataTable para mostrar las reservas -->
      <DataTable :value="booking" tableStyle="min-width: 5rem; max-width: 80%">
        <Column field="id" header="ID"></Column>
        <Column field="vehicleId" header="Vehículo"></Column>
        <Column field="status" header="Estado"></Column>
        <Column field="startTime" header="Inicio"></Column>
        <Column field="endTime" header="Fin"></Column>
      </DataTable>
    </main>
    <FooterComponent />
  </div>
</template>

<style scoped>
</style>