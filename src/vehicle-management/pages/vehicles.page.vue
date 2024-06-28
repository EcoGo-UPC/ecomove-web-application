<script setup>
import NavbarComponent from '../../public/components/navbar.component.vue'
import FooterComponent from '../../public/components/footer.component.vue'
import VehicleCardComponent from '../../vehicle-management/components/vehicle-card.component.vue';
import { Vehicle } from '../../vehicle-management/models/vehicle.identity';
import { ref } from "vue";
import axios from "axios";

let vehicles = ref([]);

const getVehicles = async () => {
  try {
    const response = await axios.get('https://ecomove-fake-api.onrender.com/ecovehicles');
    for(let vehicle of response.data){
      vehicles.value.push(new Vehicle(vehicle.id, vehicle.type, vehicle.model, vehicle.batteryLevel, vehicle.location, vehicle.status, vehicle.imageURL));
    }
  } catch (error) {
    console.error(error);
  }
}

getVehicles();

</script>

<template>
  <NavbarComponent />
  <main class='mx-auto mt-20 !bg-primary-200 pt-20 w-full'>
    <section id='vehicles' class='flex flex-col items-center justify-center min-h-[70dvh] gap-10 w-full'>
      <h1 class='text-2xl md:text-4xl xl:text-7xl font-medium text-black text-center'>CONTAMOS CON VARIEDAD DE VEHÍCULOS</h1>
      <div class='!grid grid-cols-2 md:grid-cols-4 gap-10'>
        <VehicleCardComponent v-for="vehicle in vehicles" :vehicle='vehicle' />
      </div>
      <div class='flex flex-col md:flex-row gap-10'>
        <Button label='Ver vehículos cercanos' class='bg-primary-800 px-5 py-3 border border-none rounded-xl text-white' />
        <Button label='Reseñas y calificaciones' class='bg-primary-800 px-5 py-3 border border-none rounded-xl text-white' />
      </div>
    </section>
  </main>
  <FooterComponent />
</template>

<style scoped>
</style>