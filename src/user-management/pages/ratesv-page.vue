<script setup>
import FooterComponent from "../../public/components/footer.component.vue";
import NavbarComponent from "../../public/components/navbar.component.vue"
import Button from "primevue/button";
</script>

<template>
  <NavbarComponent/>
  <div class="py-20">
    <h1 class="font-bold text-center uppercase text-6xl py-32">Reseñas y calificaciones</h1>
    <div class="flex rounded-full justify-center gap-5"  >
      <Card class="w-2/6 bg-primary-200 rounded-lg">
        <template #title>
          <!--<img alt="user-image" :src="user.image" class="rounded-full max-w-60">-->
          <div class="flex flex-row gap-2.5 items-center">
            <img alt="user image" src="../../user-management/images/profile-square.jpg" class="rounded-full border-black border-2 "
                 width="60">
            <h1 class="align-middle">Juan Perez</h1>
          </div>
        </template>
        <template #content>
          <p class="m-0 text-xl mb-5">
            Los Scooter son muy cómodos, rápidos, tienen para carga inalámbrica de teléfonos, los mejores que he probado hasta ahora!!
          </p>
        </template>
      </Card>

      <Card class="w-2/6 bg-primary-200 rounded-lg">
        <template #title>
          <!--<img alt="user-image" :src="user.image" class="rounded-full max-w-60">-->
          <div class="flex flex-row gap-2.5 items-center">
            <img alt="user image" src="../../user-management/images/unnamed.png" class="rounded-full border-black border-2"
                 width="60">
            <h1 class="align-middle">Andrea Montalvo</h1>
          </div>
        </template>
        <template #content>
          <p class="m-0 text-xl mb-5">
            App simple y funcional. Servicio óptimo para recorridos cortos. Me ha servido bastante para acercarme al metro en las mañanas.
          </p>
        </template>
      </Card>

    </div>
    <div class="flex justify-center py-12">
      <Button class="text-white bg-primary-500 p-2" label="Publicar Reseña" />
    </div>
  </div>
  <FooterComponent/>
</template>

<style scoped>

</style>