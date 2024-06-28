<script setup>
import { ref, onMounted } from 'vue';
import NavbarComponent from '../../public/components/navbar.component.vue';
import FooterComponent from '../../public/components/footer.component.vue';
import { MembershipsService } from '../../shared/services/memberships.service';
import { useRouter } from 'vue-router';


let router = useRouter();

const memberships = ref( [
  {
    id: 1,
    type: 'Estándar',
    price: 'S/24.90',
    hasMembership: false
  },
  {
    id: 2,
    type: 'Premium',
    price: 'S/39.90',
    hasMembership: false
  },
  {
    id: 3,
    type: 'Elite',
    price: 'S/59.90',
    hasMembership: false
  }
]);

const checkSavedCard = () => {
  return localStorage.getItem('savedCard') !== null;
};

const checkMembership = async () => {
  const membershipsService = new MembershipsService();
  const user = JSON.parse(localStorage.getItem('user'));
  
  try {
    const response = await membershipsService.getMembershipByUserId(user.userId);
    
    if (response && response.data) {
      memberships.value.forEach(membership => {
        if (membership.id === response.data.membershipCategoryId) {
          membership.hasMembership = true;
        }
        console.log(memberships)
      });
    } else {
      console.log('No se encontró membresía para el usuario');
    }
  } catch (error) {
    console.error('Error al obtener la membresía:', error);
  }
};

onMounted(async () => {
  await checkMembership();
});


const buyMembership = async(id) => {
  if (checkSavedCard()) {
    const membershipsService = new MembershipsService();
    const user = JSON.parse(localStorage.getItem('user'));
    await membershipsService.buyMembership({userId: user.userId, membershipCategoryId: id}).then(response => response.data).catch( err => {return;});
    const membership = await membershipsService.getMembershipByUserId(user.userId).then(response => response.data);
    localStorage.setItem('membership', JSON.stringify(membership));
    router.push("/inicio");    
  } else {
    alert('No se cuenta con una tarjeta guardada.');
  }
};
</script>

<template>
  <NavbarComponent />
  <main class="flex flex-col items-center justify-center px-3 py-20 !bg-primary-200 gap-10">
    <h1 class="text-2xl md:text-4xl xl:text-7xl font-medium text-black text-center pt-20">SUSCRIPCIONES</h1>
    <div class="flex flex-col lg:flex-row justify-center items-center gap-6">
      <Card v-for="membership in memberships" :key="membership.type"
            class="w-9/12 lg:w-3/12 min-h-[400px] md:h-[500px] lg:h-[600px] shadow text-center  flex justify-center items-center text-black"
            :style="{ backgroundColor: membership.hasMembership ? 'yellow' : 'white' }">
        <template #title class="text-2xl mt-3">Membresia {{ membership.type }}</template>
        <template #content>
          <div v-if="membership.id === 1">
            <p class="m-0 px-5 font-semibold">
              Precio asequible para usuarios ocasionales.<br>
              Acceso a una cantidad limitada de viajes al mes.<br>
              Tiempo de alquiler limitado por viaje.<br>
              Sin otros beneficios adicionales.<br>
            </p>
            <p class="text-center text-2xl py-5 font-bold">
              S/24.90
            </p>
          </div>
          <div v-else-if="membership.id === 2">
            <p class="m-0 px-5 font-semibold">
              Tarifa mensual más alta con beneficios adicionales.<br>
          Acceso ilimitado a viajes al mes.<br>
          Tiempo de alquiler extendido por viaje.<br>
          Prioridad de acceso en zonas con alta demanda.
            </p>
            <p class="text-center text-2xl py-5 font-bold">
              S/39.90
            </p>
          </div>
          <div v-else>
            <p class="m-0 px-5 font-semibold">
              Tarifa mensual más alta con beneficios adicionales.<br>
              Acceso ilimitado a viajes al mes.<br>
              Tiempo de alquiler extendido por viaje.<br>
              Prioridad de acceso en zonas con alta demanda.        </p>
            <p class="text-center text-2xl py-5 font-bold">
              S/59.90
            </p>
          </div>
            
          <button v-if="membership.hasMembership !== true"
                  @click="buyMembership(membership.id)"
                  class="!bg-primary-800 px-5 py-3 border border-none rounded-xl text-white font-semibold">
            Comprar
          </button>
        </template>
      </Card>
    </div>
  </main>
  <FooterComponent />
</template>

<style scoped>

</style>