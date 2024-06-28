<script setup>
  import NavbarComponent from '../../public/components/navbar.component.vue';
  import FooterComponent from '../../public/components/footer.component.vue';
  import VehicleMapComponent from '../components/vehicle-map.component.vue';
  import { ref } from "vue";
  let reservationExists = ref(localStorage.getItem('reservation'));
</script>

<template>
<NavbarComponent />
<main class="min-h-[80dvh] flex flex-col justify-center items-center gap-10 py-20">
  <h1 class="!text-5xl !font-bold py-10">VEHÍCULOS DISPONIBLES</h1>
  <VehicleMapComponent />
  <div v-if="reservationExists">
    <p class="text-center text-2xl font-semibold">Selecciona el vehiculo de tu preferencia</p>
  </div>
</main>
<FooterComponent />
</template>