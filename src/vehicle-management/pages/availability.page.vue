<script setup>
  import NavbarComponent from '../../public/components/navbar.component.vue';
  import FooterComponent from '../../public/components/footer.component.vue';
  import VehicleMapComponent from '../components/vehicle-map.component.vue';
</script>

<template>
<NavbarComponent />
<main class="min-h-[80dvh] flex flex-col justify-center items-center gap-10 py-20">
  <h1 class="!text-5xl !font-bold py-10">VEHÍCULOS DISPONIBLES</h1>
  <VehicleMapComponent />
  <p>Selecciona el marcador del vehículo de tu preferencia</p>
</main>
<FooterComponent />
</template>