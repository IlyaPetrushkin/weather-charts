<template>
  <div class="header">
    <div class="logo">
    <h1>
      <NuxtLink to="/" class="navigation__item navigation__item--home">
        <span>Charts app</span>
      </NuxtLink>
    </h1>
    </div>
    <div class="navigation">
      <NuxtLink to="/singlechart" class="navigation__item">
        <span>Single sensor charts</span>
      </NuxtLink>
      <NuxtLink to="/multiplychart" class="navigation__item">
        <span>Multiply sensor charts</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
 .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 2em 0 2em;
  }
  
  .navigation {
    font-weight: 300;
    letter-spacing: 1.2px;
  }
  
  .navigation__item {
    text-decoration: none;
    margin-left: 2em;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }

  .navigation__item--home {
    margin-left: 0;

    &:hover {
        text-decoration: none;
      }
  }
</style>