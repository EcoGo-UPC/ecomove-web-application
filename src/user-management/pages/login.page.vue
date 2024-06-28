<script setup>
import FooterComponent from '../../public/components/footer.component.vue';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { UsersService } from '../services/users.service';
import { MembershipsService } from '../../shared/services/memberships.service';

let username = ref('');
let password = ref('');
let router = useRouter();

const signIn = async () => {
  if (!username.value.trim() || !password.value.trim()) {
    alert('Por favor completa todos los campos');
    return;
  }

  const usersService = new UsersService();
  const userObject = {
    username: username.value,
    password: password.value
  }

  const auth = await usersService.signIn(userObject).then(response => response.data).catch(error => alert('Usuario o contraseña incorrectos'));

  if(auth) {
    localStorage.setItem('auth', JSON.stringify({token: auth.token}));
  }

  const user = await usersService.getUser(auth.username).then(response => response.data);

  if (user) {
    const userObj = {
      userId: user.userId,
      username: user.username,
      fullName: user.fullName,
      email: user.email
    }
    localStorage.setItem('user', JSON.stringify(userObj));

    const membershipsService = new MembershipsService();
    const membership = await membershipsService.getMembershipByUserId(user.userId).then(response => response.data);
    localStorage.setItem('membership', JSON.stringify(membership));
    router.push('/inicio');
  }

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
        <InputText type="password" id="password" v-model="password" aria-describedby="password-help" class="p-2"/>
      </div>      
    </form>
    <Button label='Ingresa ahora' class="!bg-primary-800 p-4 text-white w-[75%] md:w-[50%] xl:w-[35%]" @click="signIn"/>
  </main>
  <FooterComponent />
</template>