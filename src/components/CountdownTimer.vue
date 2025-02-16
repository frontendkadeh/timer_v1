<template>
  <div class="w-full flex justify-center space-x-4">
    <span class="w-10 h-10 bg-lime-600 flex justify-center items-center rounded-md text-white font-bold text-xl"> {{ formattedTime.hours }}</span>
    <span class="w-10 h-10 bg-lime-600 flex justify-center items-center rounded-md text-white font-bold text-xl">{{ formattedTime.minutes }}</span>
    <span class="w-10 h-10 bg-lime-600 flex justify-center items-center rounded-md text-white font-bold text-xl">{{ formattedTime.secondes }}</span>
  </div>
</template>

<script setup>
import useCountdown from '../plugins/useCountdown'; 

const { formattedTime } = useCountdown();  
</script>
