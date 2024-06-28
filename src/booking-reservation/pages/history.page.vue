<script setup>
import NavbarComponent from '../../public/components/navbar.component.vue';
import FooterComponent from '../../public/components/footer.component.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { BookingsService } from '../services/bookings.service';
import { EcoVehiclesService } from '../../shared/services/ecovehicles.service';

let booking = ref();

const getBookings = async () => {
  const bookingsService = new BookingsService();
  const user = JSON.parse(localStorage.getItem('user'))
  const response = await bookingsService.getBookingsByUserId(user.userId)
  .then((response) => response.data)
  .catch((error) =>  console.log(error));

  const vehiclesService = new EcoVehiclesService()
  // haz que para cada vehicle id dentro de la respuesta, se haga una petición al u
  // endpoint de vehículos para obtener la información del vehículo
  for(let i = 0; i < response.length; i++) {
    const vehicle = await vehiclesService.getVehicle(response[i].vehicleId)
    .then((response) => response.data)
    .catch((error) => console.log(error));
    response[i].vehicleId = vehicle.model;

    response[i].startTime = new Date(response[i].startTime).toLocaleString();
    response[i].endTime = new Date(response[i].endTime).toLocaleString();
  }
  booking.value = response;
}

getBookings();


</script>


<template>
  <NavbarComponent />
  <main class="!bg-primary-200 min-h-[80dvh] flex justify-center items-center flex-col gap-10 px-2">
      <h1 class="text-7xl font-bold text-center">TUS RESERVAS:</h1>
      <DataTable :value="booking" tableStyle="min-width: 5rem max-width: 80%">
        <Column field="id" header="ID"></Column>
        <Column field="vehicleId" header="Vehículo"></Column>
        <Column field="status" header="Estado"></Column>
        <Column field="startTime" header="Inicio"></Column>
        <Column field="endTime" header="Fin"></Column>
      </DataTable>
    </main>
  <FooterComponent />
</template>