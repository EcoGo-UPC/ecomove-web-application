<script setup>
import NavbarComponent from '../../public/components/navbar.component.vue';
import FooterComponent from '../../public/components/footer.component.vue';
</script>

<template>
  <NavbarComponent />
  <main class="flex flex-col items-center justify-center px-3 py-20 !bg-primary-200 gap-10">
  <h1 class="text-2xl md:text-4xl xl:text-7xl font-medium text-black text-center pt-20">SUSCRIPCIONES</h1>
  <div class="flex flex-col lg:flex-row justify-center items-center gap-6">
    <Card class="w-9/12 lg:w-3/12 min-h-[400px] md:h-[500px] lg:h-[600px] shadow text-center !bg-primary-500 flex justify-center items-center text-black">
      <template #title class="text-2xl mt-3">Membresia Estandar</template>
      <template #content>
        <p class="m-0 px-5 font-semibold">
          Precio asequible para usuarios ocasionales.<br>
          Acceso a una cantidad limitada de viajes al mes.<br>
          Tiempo de alquiler limitado por viaje.<br>
          Sin otros beneficios adicionales.<br>
        </p>
        <p class="text-center text-2xl py-5 font-bold">
          S/24.90
        </p>
        
      </template>
    </Card>

    <Card class="w-9/12 lg:w-3/12 min-h-[400px] md:h-[500px] lg:h-[600px] shadow text-center !bg-primary-500 flex justify-center items-center text-black">
      <template #title class="text-2xl mt-3">Membresia Premium</template>
      <template #content>
        <p class="m-0 px-5 font-semibold" >
          Tarifa mensual más alta con beneficios adicionales.<br>
          Acceso ilimitado a viajes al mes.
          Tiempo de alquiler extendido por viaje.
          Prioridad de acceso en zonas con alta demanda.
        </p>
        <p class="text-center text-2xl py-5 font-bold">
          S/39.90
        </p>
        
      </template>
    </Card>

    <Card class="w-9/12 lg:w-3/12 min-h-[400px] md:h-[500px] lg:h-[600px] shadow text-center !bg-primary-500 flex justify-center items-center text-black">
      <template #title class="text-2xl mt-3">Membresia Elite</template>
      <template #content>
        <p class="m-0 px-5 font-semibold">
          Tarifa mensual más alta con beneficios adicionales.<br>
          Acceso ilimitado a viajes al mes.
          Tiempo de alquiler extendido por viaje.
          Prioridad de acceso en zonas con alta demanda.        </p>
        <p class="text-center text-2xl py-5 font-bold">
          S/59.90
        </p>
        
      </template>

    </Card>

  </div>

</main>
<FooterComponent />
</template>
