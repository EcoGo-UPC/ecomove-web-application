<script setup>
import NavbarComponent from "../../public/components/navbar.component.vue";
import FooterComponent from "../../public/components/footer.component.vue";
import { ref } from 'vue';

const notificationsEnabled = ref(true);
const notificationMessage = ref('');

const toggleNotifications = () => {

  if(!("Notification" in window)) {
    alert("Este navegador no soporta notificaciones.");
    return;
  }
  
  notificationsEnabled.value = !notificationsEnabled.value;
  if (notificationsEnabled.value) {
    notificationMessage.value = 'Ahora recibirás notificaciones cuando se agregue un vehículo.';
  } else {
    notificationMessage.value = 'Las notificaciones están desactivadas.';
  }
  setTimeout(() => {
    notificationMessage.value = '';
  }, 5000);
};
</script>

<template>
  <NavbarComponent />
  <div class="min-h-screen flex flex-col items-center bg-blue-100 py-10 justify-center">
    <div class="bg-blue-200 p-6 rounded-lg shadow-lg w-full max-w-md ">
      <h2 class="text-2xl font-bold mb-4">Configuración de Notificaciones</h2>
      <p class="mb-4">Activa o desactiva las notificaciones según tus preferencias.</p>
      <div class="flex items-center justify-between">
        <span class="text-lg font-medium">Notificaciones</span>
        <button @click="toggleNotifications" class="bg-primary-800 px-5 py-3 border border-none rounded-xl text-white font-semibold">
          {{ notificationsEnabled ? 'Activadas' : 'Desactivadas' }}
        </button>
      </div>
      <div v-if="notificationMessage" class="mt-4 bg-green-200 px-4 py-2 rounded-lg">
        {{ notificationMessage }}
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>

<style scoped>

</style>