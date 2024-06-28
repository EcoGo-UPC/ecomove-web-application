<script setup> 
  import { RouterLink } from 'vue-router';
import LogoComponent from './logo.component.vue'

  const navOptions = ['Inicio', 'Vehiculos', 'Suscripciones', 'Reservar'];
</script>

<template>
  <nav class='fixed flex items-center w-full h-20 px-6 top-0 left-0 shadow-sm font-semibold z-10 !bg-primary-800 text-white'>
    <div class='flex items-center gap-x-4 relative'>
      <div class='flex'>
        <LogoComponent />
      </div>
    </div>
    <div class='flex items-center ml-auto gap-6'>
      <div class='flex items-center gap-2'>
        <ul class='hidden md:flex gap-x-5'>
          <li v-for='option in navOptions' :key="option" class='hover:opacity-75 transition'>
            <RouterLink :to="`/${option.toLowerCase()}`" class="text-white">{{ option }}</RouterLink>
          </li>
        </ul>
      </div>
      <RouterLink to="/ajustes" class='flex border-4 border-solid rounded-full size-12 p-2 ring-0 outline-none hover:bg-primary-700 items-center justify-center relative text-xl' >
        <i class="pi pi-user text-4xl" ></i>
      </RouterLink>
    </div>
  </nav>
</template>