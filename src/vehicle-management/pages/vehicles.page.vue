<script setup>
import NavbarComponent from '../../public/components/navbar.component.vue'
import FooterComponent from '../../public/components/footer.component.vue'
import VehicleCardComponent from '../../vehicle-management/components/vehicle-card.component.vue';
import { Vehicle } from '../../vehicle-management/models/vehicle.identity';
import { ref } from "vue";
import axios from "axios";
import { EcoVehiclesService } from '../../shared/services/ecovehicles.service';

let vehicles = ref([]);

const getVehicles = async () => {

    const vehiclesService =  new EcoVehiclesService();
    const response = await vehiclesService.getVehicles().then(response => {
      return response.data;
    }).catch(error => console.error(error));

    for(let vehicle of response){
      vehicles.value.push(new Vehicle(vehicle.id, vehicle.vehicleTypeId, vehicle.model, vehicle.batteryLevel, vehicle.location, vehicle.status, vehicle.imageUrl));
    }
}

getVehicles();

</script>

<template>
  <NavbarComponent />
  <main class='mx-auto mt-20 !bg-primary-200 w-full'>
    <section id='vehicles' class='flex flex-col items-center justify-center min-h-[70dvh] gap-10 w-full py-10'>
      <h1 class='text-2xl md:text-4xl xl:text-7xl font-medium text-black text-center'>ENCUENTRA TU VEHÍCULO FAVORITO EN NUESTRO CATÁLOGO</h1>
      <div class='!grid grid-cols-2 md:grid-cols-4 gap-10'>
        <VehicleCardComponent v-for="vehicle in vehicles" :vehicle='vehicle' />
      </div>
    </section>
  </main>
  <FooterComponent />
</template>

<style scoped>
</style>