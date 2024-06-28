<script setup>
/**
 * Componente para la generación de código de reserva de vehículo.
 * @prop {object} vehicle - Objeto que representa el vehículo seleccionado.
 */
import NavbarComponent from '../../public/components/navbar.component.vue'
import FooterComponent from '../../public/components/footer.component.vue'
import VehicleCardComponent from '../../vehicle-management/components/vehicle-card.component.vue';
import { ref } from 'vue';
import { Vehicle } from '../../vehicle-management/models/vehicle.identity';
import { useRouter } from 'vue-router';
import { EcoVehiclesService } from '../../shared/services/ecovehicles.service';
import { BookingsService } from '../services/bookings.service';

/** @type {ref<string>} */
let code = ref('Dale al click botón para generar código');
/** @type {ref<Vehicle>} */
let vehicle = ref({});
const router = useRouter();

/**
 * Función para reservar un vehículo.
 * @async
 * @function bookVehicle
 * @returns {Promise<void>}
 */
const bookVehicle = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const reservation = JSON.parse(localStorage.getItem('reservation'));
  const booking = {
    userId: user.userId,
    vehicleId: vehicle.value.id,
    startTime: reservation.startTime,
    endTime: reservation.endTime,
    status: 'Reservado',
  }
  const bookingService = new BookingsService();
  await bookingService.bookVehicle(booking);
}

/**
 * Función para generar un código aleatorio y reservar un vehículo.
 * @async
 * @function generateCode
 * @returns {Promise<void>}
 */
const generateCode = async () => {
  code.value = Math.floor(Math.random() * 100000);
  await bookVehicle();
  // Esperar 10 segundos antes de redirigir
  await new Promise(resolve => setTimeout(resolve, 10000));
  router.push('/inicio');
}

/**
 * Función para obtener los detalles de un vehículo.
 * @async
 * @function getVehicle
 * @returns {Promise<void>}
 */
const getVehicle = async () => {
  const vehiclesService = new EcoVehiclesService();
  let vehicleString = localStorage.getItem('vehicle');
  let vehicleJSON = JSON.parse(vehicleString);
  const response = await vehiclesService.getVehicle(vehicleJSON.id).then(response => {
    return response.data;
  }).catch(error => console.error(error));
  vehicle.value = new Vehicle(response.id, response.vehicleTypeId, response.model, response.batteryLevel, response.location, response.status, response.imageUrl);
}

getVehicle();

</script>


<template>
  <div class="flex flex-col min-h-screen !bg-primary-200">
    <navbar-component />
    <div class="flex-grow">
      <main class="p-20 flex flex-col items-center gap-20 mt-20">
        <p class="text-4xl text-center font-bold uppercase text-balance md:text-5xl">Introduce el código para <br>poder usar el vehículo</p>

        <div class="w-full justify-center flex flex-col items-center gap-10">
          <VehicleCardComponent :vehicle='vehicle' />
          <div class="!bg-primary-400 flex justify-center items-center rounded-lg border-black border-4 max-w-[70%] md:max-w-[25%]" v-if="code !== 'Dale al click botón para generar código'">
            <span class="text-xl md:text-4xl px-8 font-bold">#{{code}}</span>
          </div>
          <div class="!bg-primary-400 flex justify-center items-center rounded-lg border-black border-4" v-else>
            <span class="text-xl md:text-4xl px-8 font-bold">{{code}}</span>
        </div>
        <div class="flex justify-center">
          <button class="py-2 px-4 bg-primary-800 text-white hover:bg-primary-700" style="border-radius: 8px;" @click="generateCode" v-if="code === 'Dale al click botón para generar código'">
            Generar código
          </button>
        </div>
      </div>
      </main>
    </div>
    <footer-component />
  </div>
</template>

<style scoped>
</style>