<script setup>
import FooterComponent from '../../public/components/footer.component.vue';
import NavbarComponent from '../../public/components/navbar.component.vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useRouter } from "vue-router";

let router = useRouter();

const savedCard = JSON.parse(localStorage.getItem('savedCard'));

const hasSavedCard = ref(savedCard !== null);
const lastThreeDigits = ref(savedCard ? savedCard.cardNumber.slice(-3) : null);

const redirectToCardPage = () => {
  router.push('/datos-tarjeta');
};
</script>

<template>
    
      <NavbarComponent/>
      <main class="flex flex-col pt-24 min-h-[70vh] !bg-primary-200">
        <h1 class="text-center text-5xl font-semibold mb-12 pt-10">Controla tu método de pago</h1>
        <div class="flex md:flex-row flex-col gap-32 justify-center items-center py-20">
          <Card :content="false" class="!bg-primary-500 overflow-hidden border-black border-4">
            <template #header>
              <img alt="card image" src="/images/card.png" class="w-4/6 border-none rounded-lg mx-auto pt-3" />
            </template>
            <template #title>
              <h1 class="text-center justify-center align-middle">Tarjeta</h1>
            </template>
            <template #content>
              <div class="flex flex-col items-center">
                <template v-if="hasSavedCard">
                  <p class="text-lg mb-4">Últimos 3 dígitos: {{ lastThreeDigits }}</p>
                  <button class="bg-primary-800 text-white px-5 py-3 rounded-lg" @click="redirectToCardPage">Cambiar tarjeta</button>
                </template>
                <template v-else>
                  <p class="text-lg mb-4">No tienes ninguna tarjeta guardada.</p>
                  <router-link to="/datos-tarjeta" class="bg-primary-800 text-white px-5 py-3 rounded-lg">Guardar tarjeta</router-link>
                </template>
              </div>
            </template>
          </Card>
  
          
        </div>
      </main>
      <FooterComponent/>
    
  </template>