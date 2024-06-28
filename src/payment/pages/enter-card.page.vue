<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import NavbarComponent from '../../public/components/navbar.component.vue';
import FooterComponent from '../../public/components/footer.component.vue';
const cardNumber = ref('');
const expiryDate = ref('');
const cvv = ref('');
let router = useRouter();

const submitCardDetails = () => {
  if (validateCardDetails()) {
    const cardDetails = {
      cardNumber: cardNumber.value,
      expiryDate: expiryDate.value,
      cvv: cvv.value
    };
    localStorage.setItem('savedCard', JSON.stringify(cardDetails));
    router.push('/inicio');
  }
};

const validateCardDetails = () => {
  
  if (!/^\d{16}$/.test(cardNumber.value)) {
    alert('Número de tarjeta inválido. Debe tener exactamente 16 dígitos numéricos.');
    return false;
  }

  // Validar la fecha de vencimiento (formato MM/YY y fecha futura)
  const dateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!dateRegex.test(expiryDate.value)) {
    alert('Formato de fecha de vencimiento inválido. Debe ser MM/YY.');
    return false;
  }

  const [month, year] = expiryDate.value.split('/');
  const currentDate = new Date();
  const expiry = new Date(`20${year}`, parseInt(month) - 1); // Asumiendo que se ingresa YY en expiryDate

  if (expiry < currentDate) {
    alert('La fecha de vencimiento debe ser en el futuro.');
    return false;
  }

  // Validar CVV (exactamente 3 dígitos numéricos)
  if (!/^\d{3}$/.test(cvv.value)) {
    alert('CVV inválido. Debe tener exactamente 3 dígitos numéricos.');
    return false;
  }

  return true;
};
</script>

<template>
  <NavbarComponent/>
  <div class="min-h-[70dvh] flex flex-col items-center !bg-primary-200 py-20">
    <h1 class="text-4xl font-bold mb-8 uppercase pt-10">Ingrese datos de la tarjeta</h1>
    <div class="!bg-primary-500 p-6 rounded-lg shadow-lg w-full max-w-md">
      <form @submit.prevent="submitCardDetails">
        <div class="mb-4">
          <label for="card-number" class="block text-lg font-medium">
            <i class="pi pi-credit-card mr-2"></i>Nro. de tarjeta
          </label>
          <input
              v-model="cardNumber"
              id="card-number"
              type="text"
              class="w-full p-2 mt-2 border rounded-lg"
              placeholder="Nro. de tarjeta"
              maxlength="16"  
              required
          />
        </div>
        <div class="mb-4">
          <label for="expiry-date" class="block text-lg font-medium">
            <i class="pi pi-calendar mr-2"></i>Fecha de vencimiento (MM/YY)
          </label>
          <input
              v-model="expiryDate"
              id="expiry-date"
              type="text"
              class="w-full p-2 mt-2 border rounded-lg"
              placeholder="MM/YY"
              maxlength="5" 
              required
          />
        </div>
        <div class="mb-4">
          <label for="cvv" class="block text-lg font-medium">
            <i class="pi pi-lock mr-2"></i>CVV
          </label>
          <input
              v-model="cvv"
              id="cvv"
              type="text"
              class="w-full p-2 mt-2 border rounded-lg"
              placeholder="CVV"
              maxlength="3" 
              required
          />
        </div>
        <div class="flex justify-center">
            <button type="submit" class="bg-primary-800 px-5 py-3 border border-none rounded-xl text-white font-semibold">
              Guardar tarjeta
            </button>
        </div>
      </form>
    </div>
  </div>
  <FooterComponent/>
</template>