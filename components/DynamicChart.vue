<template>
  <div class="container">
    <div class="chart-header">
      <h2>Temperature chart</h2>
      <div>
        <select v-model="selected">
          <option disabled value="">Please select view</option>
          <option>Bar</option>
          <option>Line</option>
        </select>
      </div>
    </div>
    <div v-if="showBar">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
    <div v-if="showLine">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { Bar, Line } from 'vue-chartjs'

let showBar = true;
let showLine = false;

const props = defineProps({
forecast: {
  type: Object,
  required: false,
},
});

const chartData = ref({
labels: props.forecast?.hourly.time,
datasets: [
   {
    label: 'Temperature',
    data: props.forecast?.hourly.temperature_2m,
    borderColor: 'green',
    backgroundColor: 'green',
    yAxisID: 'y',
   },
   {
    label: 'Humidity',
    data: props.forecast?.hourly.relative_humidity_2m,
    borderColor: '#4287f5',
    backgroundColor: '#4287f5',
    yAxisID: 'y',
   },
   {
    label: 'Wind',
    data: props.forecast?.hourly.wind_speed_10m,
    borderColor: '#f542ef',
    backgroundColor: '#f542ef',
    yAxisID: 'y',
   }
 ]
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: true,
})

const selected = ref('');

watch(selected, (newSelected) => {
  if (newSelected === 'Line') {
    showBar = false;
    showLine = true;
  } else {
    showBar = true;
    showLine = false;
  }
})
</script>

<style>
  .chart-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
</style>
