<script setup>
import NavbarComponent from '../components/navbar.component.vue'
import FooterComponent from '../components/footer.component.vue';
import VehicleCardComponent from '../../vehicle-management/components/vehicle-card.component.vue';
import { Vehicle } from '../../vehicle-management/models/vehicle.identity';
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { EcoVehiclesService } from '../../shared/services/ecovehicles.service';


let router = useRouter();
let vehicles = ref([]);

const getVehicles = async () => {

  const vehiclesService = new EcoVehiclesService();
  const response = await vehiclesService.getVehicles().then(response => {
    return response.data;
  }).catch(error => console.error(error));
  console.log(response)

  for(let i = 0; i<=3; i++) {
    vehicles.value.push(new Vehicle(response[i].id, response[i].vehicleTypeId, response[i].model, response[i].batteryLevel, response[i].location, response[i].status, response[i].imageUrl));
  }

}

const verifyUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if(!user) {
    router.push('/login');
  }

}

verifyUser();
getVehicles();

</script>

<template>
  <NavbarComponent />
  <main class='mx-auto mt-20 !bg-primary-100 pt-10 w-full'>
    <section id='booking' class='flex flex-col items-center justify-center min-h-[30dvh] !bg-primary-300 w-full'>
      <h1 class='text-7xl font-bold text-black text-center'>MEJORANDO TUS RUTAS</h1>   
    </section>
    <section id='vehicles' class='flex flex-col items-center justify-center min-h-[70dvh] gap-10 w-full'>
      <h2 class='text-4xl font-bold text-black text-center'>Contamos con variedad de vehículos</h2>
      <div class='flex flex-col md:flex-row gap-10'>
        <VehicleCardComponent v-for="vehicle in vehicles" :vehicle='vehicle' />
      </div>
      <div class='flex flex-col md:flex-row gap-10'>
        <RouterLink to="/vehiculos-disponibles" class='!bg-primary-800 px-5 py-3 border border-none rounded-xl text-white !font-semibold'
        >Ver vehículos cercanos</RouterLink>
        <RouterLink to="/calificaciones" class='!bg-primary-800 px-5 py-3 border border-none rounded-xl text-white !font-semibold'>Reseñas y calificaciones</RouterLink>
      </div>
    </section>
  </main>
  <FooterComponent />
</template>

<style scoped>
</style>

