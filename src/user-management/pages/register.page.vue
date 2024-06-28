<script setup>
import FooterComponent from '../../public/components/footer.component.vue';
</script>

<template>
  <main class="min-h-[68.7dvh] !bg-primary-200 p-6 flex flex-col items-center jus">
    <h1 class="text-center !text-5xl !font-bold">REGÍSTRATE</h1>
    <form class="w-[80%] md:w-[50%] py-6 !grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6 justify-center">
      <div class="flex flex-column gap-2">
        <label for="name">Nombres</label>
        <InputText id="name" v-model="name" aria-describedby="name-help" class="p-2"/>
      </div>
      <div class="flex flex-column gap-2">
        <label for="lastName">Apellidos</label>
        <InputText id="lastName" v-model="lastName" aria-describedby="last-name-help" class="p-2"/>
      </div>
      <div class="flex flex-column gap-2">
        <label for="username">Nombre de usuario</label>
        <InputText id="username" v-model="username" aria-describedby="username-help" class="p-2"/>
      </div>
      <div class="flex flex-column gap-2">
        <label for="email">Correo electrónico</label>
        <InputText id="email" v-model="email" aria-describedby="email-help" class="p-2"/>
      </div>
      <div class="flex flex-column gap-2">
        <label for="password">Contraseña</label>
        <InputText type="password" id="password" v-model="password" aria-describedby="password-help" class="p-2"/>
      </div>
      <div class="flex flex-column gap-2">
        <label for="confirmPassword">Confirma tu contraseña</label>
        <InputText type="password" id="confirmPassword" v-model="confirmPassword" aria-describedby="confirm-password-help" class="p-2"/>
      </div>
    </form>
    <Button label='Ingresa ahora' class="!bg-primary-800 p-4 text-white w-[80%] md:w-[50%]"/>
  </main>
  <FooterComponent />
</template>

