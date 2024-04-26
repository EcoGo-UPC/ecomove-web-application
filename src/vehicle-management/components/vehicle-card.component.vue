<script setup>
  import { Vehicle } from '../models/vehicle.identity';
</script>

<template>
  <Card :content="false" class='w-64 h-96 max-h-96 bg-primary overflow-hidden'>
      <template #header>
          <img alt="Ecovehicle header" :src='vehicle.image' class='w-full min-h-80 border border-none rounded-lg mx-auto py-3' />
      </template>
      <template #title>
          <h1 class="text-center mb-10 relative bottom-4 ">
            {{ vehicle.name }}
          </h1>
      </template>
  </Card>
</template>

<script>
export default {
  props: {
    vehicle: {
      type: Vehicle,
      required: true
    }
  }
}
</script>