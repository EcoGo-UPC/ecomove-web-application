<script setup>
import FooterComponent from "../../public/components/footer.component.vue";
import NavbarComponent from "../../public/components/navbar.component.vue"
</script>


<template>
  <NavbarComponent/>
  <div class="py-20">
    <h1 class="font-bold text-center uppercase text-6xl py-32">Reseñas y calificaciones</h1>
    <div class="flex rounded-full justify-center gap-5"  >
      <Card class="w-2/6 !bg-primary-500 rounded-lg text-black">
        <template #title>
          <div class="flex flex-row gap-2.5 items-center">
            
            <h1 class="align-middle">Juan Perez</h1>
          </div>
        </template>
        <template #content>
          <p class="m-0 text-xl mb-5">
            Los Scooter son muy cómodos, rápidos, tienen para carga inalámbrica de teléfonos, los mejores que he probado hasta ahora!!
          </p>
        </template>
      </Card>

      <Card class="w-2/6 !bg-primary-500 rounded-lg text-black">
        <template #title>
          <div class="flex flex-row gap-2.5 items-center">
            
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
      <Button class="text-white !bg-primary-800 px-8 py-2" label="Publicar Reseña" />
    </div>
  </div>
  <FooterComponent/>
</template>