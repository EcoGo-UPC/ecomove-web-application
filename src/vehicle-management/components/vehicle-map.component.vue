<template>
  <GMapMap
      :center="center"
      :zoom=16
      map-type-id="terrain"
      class="h-[500px] w-[80%] border border-primary-700 rounded-md shadow-md"
  >
    <GMapMarker
      v-for="vehicle in vehicles"
      :key="vehicle.id"
      :position="vehicle.location"
      :clickable="true"
      :draggable="false"
      @click="getMarker(vehicle.location)"
    />

    <GMapMarker
      v-if="center"
      :position="center"
      :clickable="false"
      :draggable="false"
      icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    />
  </GMapMap>
</template>
<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; 
import axios from 'axios';
export default {
  setup() {
    let center = ref({ lat: 0, lng: 0 });
    let vehicles = ref([]);
    const router = useRouter();
    const getMarker = position => {
      console.log(position);
      const marker = vehicles.value.filter((vehicle) => {
        return vehicle.location.lat === position.lat && vehicle.location.lng === position.lng;
      });
      console.log(marker[0]);
      localStorage.setItem('vehicle', JSON.stringify(marker[0]));
      router.push('/reserva')
    }

    onMounted( async () => {
      try {
        const response = await axios.get('https://ecomove-fake-api.onrender.com/ecovehicles');
        vehicles.value = 
        response.data
        .filter(vehicle => vehicle.status === 'disponible')
        .map(vehicle => ({
          id: vehicle.id,
          type: vehicle.type,
          model: vehicle.model,
          batteryLevel: vehicle.batteryLevel,
          location: {
            lat: vehicle.location.latitude,
            lng: vehicle.location.longitude
          },
          status: vehicle.status,
          imageURL: vehicle.imageURL
        }));
      } catch (error) {
        console.error(error);
      }

      // Obtener la ubicación actual del usuario
      navigator.geolocation.getCurrentPosition((position) => {
        center.value = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    });

    return { vehicles, center, getMarker };
  },
}
</script>