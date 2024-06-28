<script setup>
import NavbarComponent from "../../public/components/navbar.component.vue";
import FooterComponent from "../../public/components/footer.component.vue";
import { RouterLink } from "vue-router";
import { ref } from "vue";

let user = ref({});

const signOut = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("auth")
  localStorage.removeItem("reservation");
  localStorage.removeItem("vehicle");
};

const getUser = () => {
  user.value = JSON.parse(localStorage.getItem("user"));
}

getUser();

</script>

<template>
  <NavbarComponent />
  <main
    class="!bg-primary-200 flex justify-center flex-col items-center px-6 py-20 gap-10"
  >
    <div
      class="flex flex-col-reverse sm:flex-row gap-6 justify-center py-10 items-center"
    >
      <h1
        class="!text-3xl md:!text-4xl lg:!text-5xl !font-bold text-center md:text-start"
      >
        HOLA, {{ user.fullName }}
      </h1>
      <RouterLink to="/login"
        aria-label="logout"
        class="w-full sm:w-auto flex justify-end"
        
        @click="signOut"
      >
        <h4 class="text-right align-middle">
          Cerrar Sesión
        </h4>
      </RouterLink>
    </div>
    <div
      class="!grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10"
    >
      <RouterLink to="/reservar"
        aria-label="reservation link"
        class="w-80 h-96"
      >
        <div
          class="border-black border-4 rounded-xl w-full h-full !bg-primary-400 flex flex-col justify-center items-center gap-7"
        >
          <img
            alt="reservation icon"
            src="/images/reservation.png"
          />
          <span class="text-3xl !font-kumbh-sans !font-semibold">Reserva</span>
        </div>
      </RouterLink>
      <RouterLink to="/metodos" aria-label="modify link" class="w-80 h-96">
        <div
          class="border-black border-4 rounded-xl w-full h-full !bg-primary-400 flex flex-col justify-center items-center gap-7"
        >
          <img alt="modify icon" src="/images/others.png" />
          <span class="text-3xl !font-kumbh-sans !font-semibold"
            >Modificar</span
          >
        </div>
      </RouterLink>
      <RouterLink to="/historial" aria-label="history link" class="w-80 h-96">
        <div
          class="border-black border-4 rounded-xl w-full h-full !bg-primary-400 flex flex-col justify-center items-center gap-7"
        >
          <img alt="history icon" src="/images/history.png" />
          <span class="text-3xl !font-kumbh-sans !font-semibold"
            >Historial</span
          >
        </div>
      </RouterLink>
      <RouterLink to="/preferencias" aria-label="preferences link" class="w-80 h-96">
        <div
          class="border-black border-4 rounded-xl w-full h-full !bg-primary-400 flex flex-col justify-center items-center gap-7"
        >
          <img
            alt="preferences icon"
            src="/images/preferences.png"
          />
          <span class="text-3xl !font-kumbh-sans !font-semibold"
            >Preferencias</span
          >
        </div>
      </RouterLink>
    </div>
    <div class="flex flex-col md:flex-row justify-end gap-12">
      <RouterLink to="/soporte" class="!bg-primary-800 px-8 py-2 text-white rounded-md">Soporte</RouterLink>
      <RouterLink to="/alertas" class="!bg-primary-800 px-8 py-2 text-white rounded-md">Alertas</RouterLink>
    </div>
    <div class="flex flex-col md:flex-row justify-end gap-12">
      <RouterLink to="/reportar" class="!bg-primary-800 px-8 py-2 text-white rounded-md">Reporta tu problema</RouterLink>
    </div>
  </main>
  <FooterComponent />
</template>

<style scoped></style>
