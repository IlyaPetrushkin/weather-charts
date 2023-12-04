<template>
    <div>
      <TitleAndParagraph
          title="Single sensor charts"
      />
      <TemperatureChart :forecast="forecastData" />
      <HumidityChart :forecast="forecastData" />
      <WindChart :forecast="forecastData" />
    </div>
  </template>
  
  <script setup>
    const { data: forecastData } = await useFetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&forecast_days=1')
  </script>