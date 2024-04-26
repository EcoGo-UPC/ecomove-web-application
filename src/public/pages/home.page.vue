<script setup>
import NavbarComponent from '../components/navbar.component.vue'
import FooterComponent from '../components/footer.component.vue';
import VehicleCardComponent from '../../vehicle-management/components/vehicle-card.component.vue';
import { Vehicle } from '../../vehicle-management/models/vehicle.identity';

import { ref } from "vue";
const start = ref();
const end = ref();
const location = ref();
</script>

<template>
  <NavbarComponent />
  <main class='mx-auto mt-20 bg-primary-100 pt-20 w-full'>
    <section id='booking' class='flex flex-col items-center justify-center min-h-[70dvh] bg-primary-200 gap-20 w-full'>
      <h1 class='text-7xl font-semibold text-black text-center'>MEJORANDO TUS RUTAS</h1>
      <div class='py-5 bg-primary-300 w-full flex flex-col justify-center items-center gap-10'>
        <div class='flex flex-col md:flex-row justify-center items-center gap-14'>
          <div id='start-date' class='flex flex-col items-center gap-2'>
            <label for="start" class="font-medium ">Lo quiero el</label>
            <Calendar id="start" v-model="start" showTime hourFormat="24" inputClass='text-center p-2'/>
          </div>
          <div id='end-date' class='flex flex-col items-center gap-2'>
            <label for="end" class="font-medium ">Hasta el</label>
            <Calendar id="end" v-model="end" showTime hourFormat="24" inputClass='text-center p-2' />
          </div>
          <div id='location' class='flex flex-col items-center gap-2'>
            <label for='location' class="font-medium ">Distrito</label>
            <InputText id='location' type="text" v-model="location" class='text-center p-2' />
          </div>
        </div>
        <Button label='Comenzar reserva' class='bg-primary-800 px-5 py-3 border border-none rounded-xl text-white' />
      </div>
    </section>
    <section id='vehicles' class='flex flex-col items-center justify-center min-h-[70dvh] gap-10 w-full'>
      <h2 class='text-4xl font-medium text-black text-center'>Contamos con variedad de vehículos</h2>
      <div class='flex flex-col md:flex-row gap-10'>
        <VehicleCardComponent :vehicle='new Vehicle("Bicycle", "https://th.bing.com/th/id/R.ce8c4f3d0b90ee02e50e39e4f219cc3c?rik=umZ8Tmh6Ox02Kw&pid=ImgRaw&r=0")' />
        <VehicleCardComponent :vehicle='new Vehicle("Scooter", "https://images.tcdn.com.br/img/img_prod/673579/x12_2500w_11_1_20190728021159.jpeg")' />
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