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
      <h1 class='text-7xl font-medium text-black text-center'>Contamos con variedad de vehículos</h1>
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