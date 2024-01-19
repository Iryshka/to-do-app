<template>
  <div class="welcome">
    <div class="welcome__image">
      <img src="@/assets/images/squareandtick.svg" alt="" class="welcome__image-logo" />
    </div>
    <h1 class="welcome__title">Dooit</h1>
    <p class="welcome__description">Write what you need to do. Everyday.</p>
    <div class="welcome__buttons">
      <default-button route="/login" backgroundColor="magenta" text="Log in" />
      <default-button route="/signup" backgroundColor="purple" text="Sign up" />
    </div>
  </div>
</template>

<script setup>
import DefaultButton from '@/components/DefaultButton.vue'
</script>

<style lang="scss">
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: $background-color;

  &__title {
    font-family: 'Archivo', sans-serif;
    font-size: 42px;
  }

  &__description {
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    width: 220px;
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 50px 0 60px 0;
  }
}

// BUTTON STYLES

.m-magenta {
  background-color: $accent-color2;
}

.m-purple {
  background-color: $accent-color1;
}
</style>
