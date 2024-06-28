<script setup>
import FooterComponent from '../../public/components/footer.component.vue';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let username = ref('');
let password = ref('');
let router = useRouter();

const logIn = async () => {
  const users = await axios.get('https://ecomove-fake-api.onrender.com/user');
  const user = users.data.filter(user => user.username === username.value && user.password === password.value);
  setTimeout(() => {
    if(user.length > 0) {
      localStorage.setItem('user', JSON.stringify(user[0]));
      router.push('/inicio');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }, 1000);
}
</script>

<template>
  <main class="min-h-[68.7dvh] !bg-primary-200 p-6 flex flex-col items-center">
    <h1 class="text-center !text-5xl !font-bold">INICIAR SESIÓN</h1>
    <form class="w-[75%] md:w-[50%] xl:w-[35%] py-6 flex flex-col gap-6">
      <div class="flex flex-column gap-2">
        <label for="username">Nombre de usuario</label>
        <InputText id="username" v-model="username" aria-describedby="username-help" class="p-2"/>
      </div>
      <div class="flex flex-column gap-2">
        <label for="username">Contraseña</label>
        <InputText type="password" id="username" v-model="password" aria-describedby="password-help" class="p-2"/>
      </div>      
    </form>
    <Button label='Ingresa ahora' class="!bg-primary-800 p-4 text-white w-[75%] md:w-[50%] xl:w-[35%]" @click="logIn"/>
  </main>
  <FooterComponent />
</template>