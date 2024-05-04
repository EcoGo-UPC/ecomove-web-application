<script setup>
    import NavbarComponent from '../../public/components/navbar.component.vue';
    import FooterComponent from '../../public/components/footer.component.vue';
    import { ref } from "vue";
    const start = ref();
    const end = ref();
    const location = ref();
</script>

<template lang="">
    <NavbarComponent/>
    <div id='booking' class='flex flex-col items-center justify-center min-h-[70dvh] bg-primary-200 gap-20 w-full'>
        <h1 class='text-7xl font-semibold text-black text-center'>MEJORANDO TUS RUTAS</h1>
        <div class='py-5 bg-primary-300 w-full flex flex-col justify-center items-center gap-10'>
          <div class='flex flex-col md:flex-row justify-center items-center gap-14'>
            <div id='start-date' class='flex flex-col items-center gap-2'>
              <label for="start" class="font-medium ">Lo quiero el</label>
              <Calendar id="start" v-model="start" showTime hourFormat="24" inputClass='text-center p-2'/>
            </div>
            <div id='end-date' class='flex flex-col items-center gap-2'>
              <label for="end" class="font-medium ">Hasta el</label>
              <Calendar id="end" v-model="end" showTime hourFormat="24" inputClass='text-center p-2' />
            </div>
            <div id='location' class='flex flex-col items-center gap-2'>
              <label for='location' class="font-medium ">Distrito</label>
              <InputText id='location' type="text" v-model="location" class='text-center p-2' />
            </div>
          </div>
          <Button label='Comenzar reserva' class='bg-primary-800 px-5 py-3 border border-none rounded-xl text-white' />
        </div>
    </div>
    <FooterComponent/>
</template>

<style lang="">
    
</style>