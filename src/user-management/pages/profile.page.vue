<script setup>
    import NavbarComponent from '../../public/components/navbar.component.vue'
    import FooterComponent from '../../public/components/footer.component.vue'
import { RouterLink } from 'vue-router';
</script>   

<template>
    <NavbarComponent/>
    <main class="mx-auto mt-20 bg-primary-100 pt-20 w-full">
      <section id="profile" class="flex flex-col items-center justify-center min-h-[70dvh] bg-primary-200 gap-20 w-full py-5">
          <div class="flex flex-row items-center justify-center gap-64">
              <h1 class="text-7xl font-semibold text-black text-center pl-40">HOLA, JULIAN</h1>
              <h4 class="text-7x1 font-semibold text-black text-right"><a href="#">Cerrar Sesión</a></h4>
          </div>
          <div class="flex w-full items-center justify-center py-5">
              <div class="!grid grid-cols-2 gap-y-16 w-8/12">
                <RouterLink to="/reserva">
                    <div class="flex flex-column items-center border-8 bg-primary-100 border-black justify-center py-9 px-14 m-auto gap-4 aspect-square w-fit rounded-md">
                        <img src="../images/reserva.png">
                        <h1 class="text-center text-4xl font-semibold text-black w-full">Reserva</h1>
                    </div>
                </RouterLink>
                <RouterLink to="/modificar">
                    <div class="flex flex-column items-center border-8 bg-primary-100 border-black justify-center py-9 px-14 m-auto gap-4 aspect-square w-fit rounded-md">
                        <img src="../images/modificar.png">
                        <h1 class="text-center text-4xl font-semibold text-black w-full">Modificar</h1>
                    </div>
                </RouterLink>
                <RouterLink to="/historial">
                    <div class="flex flex-column items-center border-8 bg-primary-100 border-black justify-center py-9 px-14 m-auto gap-4 aspect-square w-fit rounded-md">
                        <img src="../images/historial.png">
                        <h1 class="text-center text-4xl font-semibold text-black w-full">Historial</h1>
                    </div>
                </RouterLink>
                <RouterLink to="/preferencias">
                    <div class="flex flex-column items-center border-8 bg-primary-100 border-black justify-center py-9 px-14 m-auto gap-4 aspect-square w-fit rounded-md">
                        <img src="../images/preferencias.png">
                        <h1 class="text-center text-4xl font-semibold text-black w-full">Preferencias</h1>
                    </div>
                </RouterLink>
              </div>
          </div>
          <div class="flex flex-row items-end justify-end w-3/6 gap-5">
            <RouterLink>
                <div class="bg-gray-500 p-1.5 rounded-md text-center text-2xl">
                    Soporte
                </div>                
            </RouterLink>
            <RouterLink>
                <div class="bg-gray-500 p-1.5 rounded-md text-center text-2xl">
                    Alertas
                </div>                
            </RouterLink>
          </div>
      </section>
    </main>
    <FooterComponent/>
</template>

<style scoped>

</style>