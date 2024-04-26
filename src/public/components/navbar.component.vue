<script setup> 
  import LogoComponent from './logo.component.vue'
  import { ref } from 'vue'

  const navOptions = ['Inicio', 'Vehículos', 'Suscripciones', 'Reservar'];
</script>

<template>
  <nav class='fixed flex items-center w-full h-20 px-6 top-0 left-0 shadow-sm font-semibold z-10 bg-primary-800 text-white'>
    <div class='flex items-center gap-x-4 relative'>
      <div class='flex'>
        <LogoComponent />
      </div>
    </div>
    <div class='flex items-center ml-auto gap-6'>
      <div class='flex items-center  gap-2'>
        <ul class='hidden sm:flex gap-x-5'>
          <li v-for='option in navOptions' :key="option" class='hover:opacity-75 transition'>
            <a :href='`${option.toLowerCase()}`'>
              {{ option }}
            </a>
          </li>
        </ul>
      </div>
      <Button class='flex border-4 border-solid rounded-full size-12 p-2 ring-0 outline-none hover:bg-gray-500 items-center justify-center relative text-xl'>
        <i class="pi pi-user text-4xl" ></i>
      </Button>
    </div>
  </nav>
</template>