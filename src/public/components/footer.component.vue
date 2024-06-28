<script setup>
import LogoComponent from './logo.component.vue'
</script>

<template>
  <footer class='flex flex-col justify-center items-center w-full h-72 font-semibold !bg-primary-800 text-white gap-3'>
    <div class='flex gap-4 md:gap-7 w-full justify-center items-center'>
      <div class='w-[25%] max-w-[300px] h-[2px] bg-white'></div>
      <a href='https://www.facebook.com/profile.php?id=61559314076983'><i class='pi pi-facebook text-3xl hover:opacity-75 transition'></i></a>
      <a href='https://www.instagram.com/eco_move__/'><i class='pi pi-instagram text-3xl hover:opacity-75 transition'></i></a>
      <a href='https://twitter.com/Eco__Move'><i class='pi pi-twitter text-3xl hover:opacity-75 transition'></i></a>
      <a href='https://www.youtube.com/channel/UCGcHPKyyd3Bx86u_YMTGbXA'><i class='pi pi-youtube text-3xl hover:opacity-75 transition'></i></a>
      <a href='https://www.reddit.com/user/Eco_Move_/'><i class='pi pi-reddit text-3xl hover:opacity-75 transition'></i></a>
      <div class='w-[25%] max-w-[300px] h-[2px] bg-white'></div>
    </div>
    <LogoComponent />
    <span class='text-sm'>2024 EcoMove</span>
    <div class='flex flex-col md:flex-row gap-4'>
      <a href='#' class='underline hover:opacity-75 transition text-center'>Información legal</a>
      <a href='#' class='underline hover:opacity-75 transition text-center'>Política de privacidad</a>
    </div>
  </footer>
</template>