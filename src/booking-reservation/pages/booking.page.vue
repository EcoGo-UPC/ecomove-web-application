<script setup>
import NavbarComponent from '../../public/components/navbar.component.vue'
import FooterComponent from '../../public/components/footer.component.vue'
import VehicleCardComponent from '../../vehicle-management/components/vehicle-card.component.vue';
import { ref } from 'vue';
import axios from 'axios';
import { Vehicle } from '../../vehicle-management/models/vehicle.identity';
import { useRouter } from 'vue-router';


let code = ref(0);
let vehicle = ref({});
const router = useRouter()

const getBookings = async () => {
  try {
    const response = await axios.get('https://ecomove-fake-api.onrender.com/booking');
    return response.data;
    
  } catch (error) {
    console.error(error);
  }
}

const generateCode = async() => {
  code.value = Math.floor(Math.random() * 100000);
  setTimeout( async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const reservation = JSON.parse(localStorage.getItem('reservation'));
    const reservations= await getBookings();
    const reservationId = reservations.length + 1;
    console.log(reservationId)
    const booking = {
      id: reservationId,
      userID: user.id,
      vehicleID: vehicle.value.id,
      status: 'confirmed',
      startTime: reservation.startTime,
      endTime: reservation.endTime
    }
    console.log(booking)
    axios.post('https://ecomove-fake-api.onrender.com/booking', {
      id: reservationId,
      userID: user.id,
      vehicleID: vehicle.value.id,
      status: 'confirmed',
      startTime: reservation.startTime,
      endTime: reservation.endTime
    })
    router.push('/inicio');
  }, 10000);
}

generateCode();

const getVehicle = () => {
  axios.get('https://ecomove-fake-api.onrender.com/ecovehicles')
  .then(response => {
    let vehicles = response.data;
    let vehicleString = localStorage.getItem('vehicle');
    let vehicleJSON = JSON.parse(vehicleString);
    let vehicleFiltered = vehicles.filter(v => vehicleJSON.id === v.id)[0];
    vehicle.value = new Vehicle(vehicleFiltered.id, vehicleFiltered.type, vehicleFiltered.model, vehicleFiltered.batteryLevel, vehicleFiltered.location, vehicleFiltered.status, vehicleFiltered.imageURL);
  })
  .catch(error => {
    console.error(error);
  });
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
          <div class="!bg-primary-400 flex justify-center items-center rounded-lg border-black border-4 max-w-[70%] md:max-w-[25%]">
            <span class="text-xl md:text-4xl px-8 font-bold">#{{code}}</span>
          </div>
        </div>
        <div class="flex justify-center">
          <button class="py-2 px-4 bg-primary-800 text-white hover:bg-primary-700" style="border-radius: 8px;" @click="generateCode">
            Volver a generar
          </button>
        </div>
      </main>
    </div>
    <footer-component />
  </div>
</template>

<style scoped>
</style>