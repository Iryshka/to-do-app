<template>
  <div class="login">
    <div class="login__text-field">
      <h2 class="login__title">Welcome back!</h2>
      <text-field name="email" type="email" :placeholder="placeholder.email" />
      <text-field name="password" type="password" :placeholder="placeholder.password" />
      <default-button route="/login" text="log in" background-color="magenta" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import TextField from '@/components/TextField.vue'
import DefaultButton from '@/components/DefaultButton.vue'

const placeholder = ref({
  email: 'Enter your email',
  password: 'Enter your password'
})
</script>

<style lang="scss">
.login {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: $background-color;
  width: 100%;
  height: 100vh;

  &__title {
    text-transform: uppercase;
    font-size: 34px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  &__text-field {
    width: 250px;
    display: flex;
    gap: 31px;
    flex-direction: column;
  }
}

.m-magenta {
  background-color: $accent-color2;
}
</style>
