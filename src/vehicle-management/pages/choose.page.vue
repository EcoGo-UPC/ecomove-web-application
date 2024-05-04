<script setup>
import NavbarComponent from '../../public/components/navbar.component.vue'
import FooterComponent from '../../public/components/footer.component.vue'
import VehicleCardComponent from '../../vehicle-management/components/vehicle-card.component.vue';
import { Vehicle } from '../../vehicle-management/models/vehicle.identity';

</script>

<template>
  <NavbarComponent />
  <main class='mx-auto mt-20 bg-primary-100 pt-20 w-full'>
    <section id='vehicles' class='flex flex-col items-center justify-center min-h-[70dvh] gap-10 w-full'>
      <h1 class='text-7xl font-medium text-black text-center'>Elige el vehiculo que deseas <br>reservar</h1>
      <div class='flex flex-col md:flex-row gap-10'>
        <VehicleCardComponent :vehicle='new Vehicle("Scooter", "https://promart.vteximg.com.br/arquivos/ids/4599809-1000-1000/image-031bd1b0d20e4e2b816240282d52bf82.jpg?v=637813552646570000")' />
        <VehicleCardComponent :vehicle='new Vehicle("Bicicleta", "https://th.bing.com/th/id/R.ce8c4f3d0b90ee02e50e39e4f219cc3c?rik=umZ8Tmh6Ox02Kw&pid=ImgRaw&r=0")' />
      </div>

    </section>
  </main>
  <FooterComponent />
</template>

<style scoped>
</style>