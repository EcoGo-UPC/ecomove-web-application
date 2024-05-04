<script setup>
  import { Vehicle } from '../models/vehicle.identity';
</script>

<template>
  <Card :content="false" class='!w-32 !h-48 lg:!w-56 xl:!w-64 lg:!h-96 !bg-primary-500 !text-white overflow-hidden'>
      <template #header>
          <img alt="Ecovehicle header" :src='vehicle.imageURL' class='w-full !h-36 lg:!h-80 border border-none rounded-lg mx-auto py-3 bg-white' />
      </template>
      <template #title>
          <h1 class="text-center mb-10 relative bottom-4 !text-xs lg:!text-lg font-medium text-black center">
            {{ vehicle.model }}
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