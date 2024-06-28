<script setup>
import FooterComponent from "../../public/components/footer.component.vue";
import NavbarComponent from "../../public/components/navbar.component.vue"

import { RouterLink } from "vue-router";
import { ref } from "vue";

let user = ref({});

const getUser = () => {
  user.value = JSON.parse(localStorage.getItem("user"));
}

getUser();
</script>

<template>
  <NavbarComponent />
    <div class="pt-5 justify-center items-center">
      <h1 class="text-center uppercase !text-6xl !font-bold p-20">Reseñas y calificación</h1>
      <div class="flex justify-center flex-col items-center  pb-40">
        <div class="flex flex-col items-center md:w-3/6 p-2  w-[60%] align-middle !bg-primary-400 !rounded-xl">
          <div class="flex items-center  mb-4">
            <img
                class="rounded-full !m-0 border-black border-2"
                src="https://sg-res.9appsdownloading.com/sg/res/jpg/7d/86/6a5d6be25f98b16fadb0b158563e-neu2.jpg?x-oss-process=style/mq200"
                width="35"
                alt="avatar"
            />
            <div class="flex items-center mx-4 gap-5 !text-xl !font-semibold">
              <span>{{user.firstname }}</span>
            </div>
          </div>
          <div class="flex flex-col w-full">
            <form class="w-full" @submit.prevent="submitReview">
              <textarea
                  v-model="review"
                  class="w-full p-2 border rounded-lg"
                  placeholder="Escribe tu reseña"
              ></textarea>
              <div class="flex justify-center mt-4">
                <RouterLink to="/inicio" class=' hover:bg-blue-300 !bg-primary-800 px-4 py-3 border border-none rounded-xl text-white !font-semibold'
                >Subir mi reseña</RouterLink>
              </div>
            </form>
          </div>
        </div>
    </div>
</div>
  
  <FooterComponent />
</template>

<style scoped>

</style>