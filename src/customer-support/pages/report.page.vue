<template>
  <div class="flex flex-col min-h-screen bg-blue-100">
    <navbar-component />
    <div class="flex-grow flex items-center justify-center flex-col relative">
      <h1 class="text-7xl font-bold mt-8 ">Reporta tu problema</h1>
      <h2 class="mt-4 mb-2 text-xl font-semibold textarea-label" style="position: relative; top: 0rem; left: -22%;">Descripción del problema:</h2>
      <textarea class="w-2/3 h-40 p-2 border-2 border-gray-400 rounded-lg mt-1 textarea-custom" style="margin-left: 5%;" placeholder="Describe aquí tu problema"></textarea>
      <button class="bg-black text-white py-2 px-4 rounded-lg mt-3" @click="">Reportar</button>
      <div style="height: 50px;"></div>
    </div>
    <footer-component class="mt-auto"/>
  </div>
</template>

<script setup>
import NavbarComponent from '../../public/components/navbar.component.vue'
import FooterComponent from '../../public/components/footer.component.vue'
</script>

<style scoped>
</style>
