<script setup>
import LogoComponent from './logo.component.vue'
</script>

<template>
  <footer class='flex flex-col justify-center items-center w-full h-72 font-semibold bg-primary-800 text-white gap-3'>
    <div class='flex gap-4 md:gap-7 w-full justify-center items-center'>
      <div class='w-[25%] max-w-[300px] h-[2px] bg-white'></div>
      <a href='#'><i class='pi pi-facebook text-3xl hover:opacity-75 transition'></i></a>
      <a href='#'><i class='pi pi-instagram text-3xl hover:opacity-75 transition'></i></a>
      <a href='#'><i class='pi pi-twitter text-3xl hover:opacity-75 transition'></i></a>
      <a href='#'><i class='pi pi-youtube text-3xl hover:opacity-75 transition'></i></a>
      <a href='#'><i class='pi pi-reddit text-3xl hover:opacity-75 transition'></i></a>
      <div class='w-[25%] max-w-[300px] h-[2px] bg-white'></div>
    </div>
    <LogoComponent />
    <span class='text-sm'>2024 EcoMove</span>
    <div class='flex gap-4'>
      <a href='#' class='underline hover:opacity-75 transition'>Información legal</a>
      <a href='#' class='underline hover:opacity-75 transition'>Política de privacidad</a>
    </div>
  </footer>
</template>