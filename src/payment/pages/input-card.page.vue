<script setup>

</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen w-full bg-blue-100 ">
    <h1 class="!text-4xl !font-semibold mb-8 text-center">INGRESE DATOS DE LA TARJETA</h1>

    <form class="flex flex-col text-center items-center justify-center bg-blue-200 w-[45%] py-10 px-16 rounded-xl">
      <div class="w-[80%] mb-4">
        <label for="card-number" class="block mb-2"> <i slot="prefix" class="pi pi-credit-card"></i> Nro. de tarjeta</label>
        <Textarea class="w-full" id="card-numbw-fuller" placeholder="Ingrese el número de tarjeta" />
      </div>

      <div class="w-[80%] mb-4">
        <label for="expiry-date" class="block mb-2"><i slot="prefix" class="pi pi-calendar"></i>Fecha de vencimiento</label>
        <Textarea class="w-full" id="expiry-date" placeholder="MM/AA" />

      </div>

      <div class="w-[80%] mb-4">
        <label for="cvv" class="block mb-2"><i slot="prefix" class="pi pi-lock"></i>CVV</label>
        <textarea class="w-full" id="cvv" placeholder="Ingrese el CVV" />

      </div>

      <div class="flex justify-center">
        <Button type="submit" class="bg-blue-300 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded-xl">Siguiente</Button>
      </div>
    </form>

  </div>
</template>

<style scoped>

</style>