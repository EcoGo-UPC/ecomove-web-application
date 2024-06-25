<script setup>
import NavbarComponent from '../../public/components/navbar.component.vue'
import FooterComponent from '../../public/components/footer.component.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-blue-100">
    <navbar-component />
    <div class="flex-grow flex items-center justify-center flex-col">
      <h1 class="text-5xl font-bold mt-8 text-center p-1">Soporte al cliente</h1>

      <div class="text-center  bg-blue-100">
        <div class="mt-4 flex items-center justify-center  bg-blue-100">
          <h2 class="text-2xl font-bold">Problemas técnicos</h2>
          <img src="../images/robot.png" alt="Img problemas técnicos" class="self-end h-8 mx-2">
        </div>
        <div class="p-5  rounded-lg " >
          <p class="text-sm text-justify" style="text-align-last: justify; word-spacing: -1px;">
            ¿Tienes preguntas sobre cómo funciona EcoGo, cómo registrarte como usuario, cómo <br>
            reservar un vehículo o cualquier otra consulta relacionada con nuestros servicios? <br>
            ¡Estamos aquí para responderlas! Nuestro equipo de atención al cliente está disponible <br>
            para brindarte toda la información que necesites y ayudarte a sacar el máximo provecho <br>
            de nuestra plataforma de movilidad sostenible.
          </p>
        </div>

        <div class="mt-5 flex items-center justify-center">
          <h2 class="text-2xl font-bold">Consultas</h2>
          <img src="../images/pregunta.png" alt="Img consultas" class="self-end h-8 mx-2">
        </div>
        <div class="p-5  rounded-lg">
          <p class="text-sm text-justify" style="text-align-last: justify; word-spacing: -1px;">
            ¿Tienes preguntas sobre cómo funciona EcoGo, cómo registrarte como usuario, cómo <br>
            reservar un vehículo o cualquier otra consulta relacionada con nuestros servicios? <br>
            ¡Estamos aquí para responderlas! Nuestro equipo de atención al cliente está disponible <br>
            para brindarte toda la información que necesites y ayudarte a sacar el máximo provecho <br>
            de nuestra plataforma de movilidad sostenible.
          </p>
        </div>

        <div class="mt-5 flex items-center justify-center">
          <h2 class="text-2xl font-bold">Reclamos</h2>
          <img src="../images/libro.png" alt="Img reclamos" class="self-end h-8 mx-2">
        </div>
      </div>
      <div class="p-5 rounded-lg">
        <p class="text-sm text-justify" style="text-align-last: justify; word-spacing: -1px;">
          Si estás experimentando algún problema técnico con la plataforma EcoGo, como
          <br> dificultades para registrarte, errores al reservar un vehículo o problemas de acceso a la <br>
          aplicación, estamos aquí para ayudarte. Nuestro equipo técnico está comprometido en <br>
          solucionar cualquier inconveniente que puedas tener para garantizar una experiencia <br>
          fluida y satisfactoria.
        </p>
      </div>
    </div>
    <footer-component class="mt-auto"/>
  </div>
</template>

<style scoped>
</style>
