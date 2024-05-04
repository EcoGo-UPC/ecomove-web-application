<script setup>
  import NavbarComponent from '../../public/components/navbar.component.vue';
  import FooterComponent from '../../public/components/footer.component.vue';
  import { useRouter } from 'vue-router';
  import { ref } from "vue";
  const start = ref();
  const end = ref();
  const location = ref();
  const router = useRouter();

  const setReservation = () => {
    const startISO = convertFormat(start.value);
    const endISO = convertFormat(end.value);
    localStorage.setItem('reservation', JSON.stringify({startTime: startISO, endTime: endISO, district: location.value}));
    router.push('/vehiculos-disponibles');
  };

  const convertFormat = (date) => {
    if (!date) return null;

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');

    const fechaISO = `${year}-${month}-${day}T${hour}:${minute}:00.000Z`;

    return fechaISO;
  };

</script>

<template>
  <NavbarComponent/>
  <div id='booking' class='flex flex-col items-center justify-center min-h-[70dvh] !bg-primary-200 gap-20 w-full'>
      <h1 class='text-7xl font-semibold text-black text-center'>REALIZA TU RESERVA AHORA</h1>
      <div class='py-5 !bg-primary-300 w-full flex flex-col justify-center items-center gap-10'>
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
        <Button label='Comenzar reserva' class='bg-primary-800 px-5 py-3 border border-none rounded-xl text-white' @click="setReservation" />
      </div>
  </div>
  <FooterComponent/>
</template>