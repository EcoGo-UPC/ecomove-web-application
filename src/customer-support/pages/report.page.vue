<script setup>
import { ref } from 'vue';
import NavbarComponent from '../../public/components/navbar.component.vue';
import FooterComponent from '../../public/components/footer.component.vue';
import {TicketsService} from '../services/tickets.services'; // Asumiendo que tienes un servicio para manejar tickets
import { RouterLink } from 'vue-router';

const review = ref('');

const submitReview = async () => {
  const ticketsService = new TicketsService();
  const user = JSON.parse(localStorage.getItem('user'));
  const title = `Reporte de problema de ${user.fullName}: ${new Date()}`;
  const ticket = {
    title: title,
    userId: user.userId,
    description: review.value,
    status: 'Pendiente',
    ticketCategoryId: 1, 
    customerSupportAgentId: 1
  };
  
  try {
    const response = await ticketsService.postTicket(ticket);
    console.log(response);
    alert('Tu problema ha sido reportado exitosamente');
  } catch (error) {
    console.error(error);
    alert('Ocurrió un error al reportar tu problema');
  }
};
</script>

<template>
  <NavbarComponent />
  <main class="pt-5 justify-center items-center min-h-[70vh]">
    <h1 class="text-center uppercase !text-6xl !font-bold p-20">REPORTA TU PROBLEMA</h1>
    <div class="flex justify-center flex-col items-center pb-40">
      <div class="flex flex-col items-center md:w-3/6 p-2 w-[60%] align-middle !bg-primary-400 !rounded-xl">
        <div class="flex flex-col w-full">
          <form class="w-full" @submit.prevent="submitReview">
            <textarea
              v-model="review"
              class="w-full p-2 border rounded-lg"
              placeholder="Describe tu problema aquí..."
            ></textarea>
            <div class="flex justify-center mt-4">
              <button type="submit" class="hover:bg-blue-300 !bg-primary-800 px-4 py-3 border border-none rounded-xl text-white !font-semibold">
                Reportar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
  <FooterComponent />
</template>

<style scoped>

</style>