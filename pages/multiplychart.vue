<template>
  <TitleAndParagraph
      title="Multuply sensor chart"
  />
  <div class="container">
    <select v-model="selected">
      <option disabled value="">Please select start date</option>
      <option>2023-11-25</option>
      <option>2023-11-26</option>
      <option>2023-11-27</option>
      <option>2023-11-28</option>
      <option>2023-11-29</option>
    </select>
  </div>

  <DynamicChart :forecast="forecastData" />
</template>

<script setup>
import { reloadNuxtApp } from "nuxt/app";
const route = useRoute()

const selected = ref('')

watch(selected, async (newSelected) => {
  await navigateTo({
    path: '/multiplychart',
    query: {
      start_date: newSelected,
      end_date: '2023-11-30'
    }
  })

reloadNuxtApp({
  path: '/multiplychart',
  query: {
    start_date: newSelected,
    end_date: '2023-11-30'
  },
  ttl: 1000,
  });
})

const { data: forecastData } = await useFetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&start_date=${route.query.start_date}&end_date=${route.query.end_date}`)
</script>