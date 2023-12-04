<template>
  <div class="container">
    <div class="title-and-paragraph">
      <h1 class="title">
        {{ title }}
      </h1>
      <p v-if="props.paragraph" class="paragraph">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
  .title-and-paragraph {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
  }

  .paragraph {
      text-align: center;
      line-height: 1.7;
  }
</style>