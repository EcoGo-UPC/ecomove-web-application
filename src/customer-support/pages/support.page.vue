<script setup>
import NavbarComponent from '../../public/components/navbar.component.vue'
import FooterComponent from '../../public/components/footer.component.vue'
</script>

<template>
<NavbarComponent/>
  <div class="flex flex-col min-h-screen !bg-primary-200">
    <div class="flex-grow flex items-center justify-center flex-col">
      <h1 class="text-5xl font-bold mt-8 text-center p-1">Soporte al cliente</h1>

        <div class="mt-4 flex items-center justify-center ">
          <h2 class="text-2xl font-bold">Problemas técnicos</h2>
          
        </div>
        <div class="p-5  rounded-lg " >
          <p class="text-lg text-justify" style="text-align-last: justify; word-spacing: -1px;">
            ¿Tienes preguntas sobre cómo funciona EcoGo, cómo registrarte como usuario, cómo <br>
            reservar un vehículo o cualquier otra consulta relacionada con nuestros servicios? <br>
            ¡Estamos aquí para responderlas! Nuestro equipo de atención al cliente está disponible <br>
            para brindarte toda la información que necesites y ayudarte a sacar el máximo provecho <br>
            de nuestra plataforma de movilidad sostenible.
          </p>
        </div>

        <div class="mt-5 flex items-center justify-center">
          <h2 class="text-2xl font-bold">Consultas</h2>
          
        </div>
        <div class="p-5  rounded-lg">
          <p class="text-lg text-justify" style="text-align-last: justify; word-spacing: -1px;">
            ¿Tienes preguntas sobre cómo funciona EcoGo, cómo registrarte como usuario, cómo <br>
            reservar un vehículo o cualquier otra consulta relacionada con nuestros servicios? <br>
            ¡Estamos aquí para responderlas! Nuestro equipo de atención al cliente está disponible <br>
            para brindarte toda la información que necesites y ayudarte a sacar el máximo provecho <br>
            de nuestra plataforma de movilidad sostenible.
          </p>
        </div>


      </div>
    </div>

  <FooterComponent/>
</template>

<style scoped>
</style>