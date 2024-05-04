<script setup>
import FooterComponent from "../public/components/footer.component.vue";
import NavbarComponent from "../public/components/navbar.component.vue"
import Button from "primevue/button";
</script>

<template>
  <NavbarComponent />
  <div class="py-20">
  <h1 class="font-bold text-center uppercase text-6xl py-32">Reseñas y calificaciones</h1>
    <div class="flex justify-center pb-32">
      <Card class="w-3/6 bg-primary-200">
        <template #title>
          <!--<img alt="user-image" :src="user.image" class="rounded-full max-w-60">-->
          <div class="flex flex-row gap-2.5 items-center">
          <img alt="user image" src="../user-management/images/perfil-hombre-vivo.png" class="rounded-full" width="60">
          <h1 class="align-middle">Marcos Otamendi</h1>
          </div>
        </template>
        <template #content>
          <p class="m-0 text-xl mb-5">
            Excelente opción para movilizarse en la ciudad, muy sencillo los pasos para utilizarla. y lo mejor es económico. Me encantó
          </p>
          <Button label="Subir Reseña" class=" text-white bg-primary-500 p-2" />
        </template>

      </Card>
    </div>
  </div>
  <FooterComponent />
</template>

<style scoped>

</style>