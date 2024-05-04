<script setup>

import NavbarComponent from '../../public/components/navbar.component.vue'
import FooterComponent from '../../public/components/footer.component.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-blue-100">
    <navbar-component />
    <div class="flex-grow">
      <main class="p-20 flex flex-col items-center gap-20 mt-20">
        <p class="text-4xl text-center font-bold uppercase text-balance md:text-5xl">Introduce el código para <br>poder usar el vehículo</p>

        <div class="w-full justify-center flex">
          <div class="bg-primary-400 flex justify-center items-center rounded-lg border-black border-4 max-w-[70%] md:max-w-[25%]">
            <span class="text-xl md:text-4xl px-8 font-bold">#00000</span>
          </div>
        </div>
        <div class="flex justify-center">
          <button class="py-2 px-4 bg-primary-800 text-white hover:bg-primary-700" style="border-radius: 8px;" @click="cambiarNumeroAleatorio()">
            Volver a generar
          </button>
        </div>
      </main>
    </div>
    <footer-component />
  </div>
</template>

<style scoped>
</style>
