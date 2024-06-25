<script setup>

</script>

<template>
  <h1 class="text-6xl font-bold text-center p-20">Suscripciones</h1>
  <div class="flex justify-center gap-6">
    <Card class="w-3/12 shadow text-center bg-primary-200 flex items-center">
      <template #title class="text-2xl">Membresia Estandar</template>
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
        <div class="py-5">
          <Button label="Mas Información" class="bg-primary-600 text-white p-2 rounded-full" />
        </div>
      </template>
    </Card>

    <Card class="w-3/12 shadow text-center bg-primary-200">
      <template #title class>Membresia Premium</template>
      <template #content>
        <p class="m-0 px-5 font-semibold" >
          Tarifa mensual más alta con beneficios adicionales.<br>
          Acceso ilimitado a viajes al mes.
          Tiempo de alquiler extendido por viaje.
          Prioridad de acceso en zonas con alta demanda.          quas!
        </p>
        <p class="text-center text-2xl py-5 font-bold">
          S/39.90
        </p>
        <div class="py-5">
        <Button label="Mas Información" class="bg-primary-600 text-white p-2 rounded-full" />
      </div>
      </template>
    </Card>

    <Card class="w-3/12 shadow text-center bg-primary-200">
      <template #title>Membresia Elite</template>
      <template #content>
        <p class="m-0 px-5 font-semibold">
          Tarifa mensual más alta con beneficios adicionales.<br>
          Acceso ilimitado a viajes al mes.
          Tiempo de alquiler extendido por viaje.
          Prioridad de acceso en zonas con alta demanda.        </p>
        <p class="text-center text-2xl py-5 font-bold">
          S/59.90
        </p>
        <div class="py-5">
          <Button label="Mas Información" class="bg-primary-600 text-white p-2 rounded-full" />
        </div>
      </template>

    </Card>

  </div>
</template>

<style scoped>

</style>