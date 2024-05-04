<script setup>
import NavbarComponent from '../../public/components/navbar.component.vue';
import FooterComponent from '../../public/components/footer.component.vue';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let booking = ref();

const getBookings = async () => {
  try {
    const response = await axios.get('https://ecomove-fake-api.onrender.com/booking');
    booking.value = response.data.filter(booking => booking.userID === JSON.parse(localStorage.getItem('user')).id);
    console.log(booking.value);
  } catch (error) {
    console.error(error);
  }
}

getBookings();
</script>


<template>
  <NavbarComponent />
  <main class="!bg-primary-200 min-h-[80dvh] flex justify-center items-center flex-col gap-10">
      <h1 class="text-7xl font-bold">TUS RESERVAS:</h1>
      <DataTable :value="booking" tableStyle="min-width: 5rem max-width: 80%">
          <Column field="id" header="ID"></Column>
          <Column field="vehicleID" header="ID del vehículo"></Column>
          <Column field="status" header="Estado"></Column>
          <Column field="startTime" header="Inicio"></Column>
          <Column field="endTime" header="Fin"></Column>
      </DataTable>
    </main>
  <FooterComponent />
</template>