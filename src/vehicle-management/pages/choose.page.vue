<script setup>

import NavBar from '../../public/components/navbar.component.vue'
import Footer from '../../public/components/footer.component.vue'
import {Vehicle} from "../models/vehicle.identity.js";
import VehicleCardComponent from '../../vehicle-management/components/vehicle-card.component.vue';
</script>

<template>
  <NavBar/>
    <main class='mx-auto mt-20 bg-primary-100 pt-20 w-full'>
    <section id='vehicles' class='flex flex-col items-center justify-center min-h-[70dvh] gap-10 w-full'>
    <h2 class='text-4xl font-medium text-black text-center'>Elige el vehículo que deseas reservar</h2>
    <div class='flex flex-col md:flex-row gap-10'>
      <VehicleCardComponent :vehicle='new Vehicle("Scooter", "https://solden.cl/cdn/shop/products/adult-scooter-one-nl-205-black-charcoal-grey_600x.jpg?v=1657814724")' />
      <VehicleCardComponent :vehicle='new Vehicle("Bicicleta", "https://th.bing.com/th/id/R.ce8c4f3d0b90ee02e50e39e4f219cc3c?rik=umZ8Tmh6Ox02Kw&pid=ImgRaw&r=0")' />
    </div>
    </section>
    </main>
  <Footer/>
</template>

<style scoped>
</style>