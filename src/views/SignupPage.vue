<template>
  <div class="login">
    <form class="login__text-field">
      <h2 class="login__title">Welcome onboard!</h2>
      <text-field name="name" type="text" :placeholder="placeholder.name" />
      <text-field name="email" type="email" :placeholder="placeholder.email" />
      <text-field name="password" type="password" :placeholder="placeholder.password" />
      <text-field name="password" type="password" :placeholder="placeholder.confirm" />
      <default-button route="" text="sign up" background-color="purple" />
      <aside class="login__aside">
        Already have an account? <router-link to="/login">Log in</router-link>
      </aside>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import TextField from '@/components/TextField.vue'
import DefaultButton from '@/components/DefaultButton.vue'

const placeholder = ref({
  name: 'Enter your name',
  email: 'Enter your email',
  password: 'Enter your password',
  confirm: 'Confirm your password'
})
</script>

<style lang="scss">
.login {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $background-color;
  width: 100%;
  height: 100vh;

  &__title {
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  &__text-field {
    position: absolute;
    text-align: center;
    width: 290px;
    display: flex;
    gap: 31px;
    flex-direction: column;
  }

  &__aside {
    letter-spacing: -1px;
  }
}

.m-purple {
  background-color: $accent-color1;
}
</style>
