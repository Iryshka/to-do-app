<template>
  <div class="default-button">
    <!--    is it possible to do:-->
    <!--    <button @click="redirectTo">{{text}}</button>-->
    <!--    just to somehow push route inside redirectTo function-->
    <router-link :to="route">
      <button :class="['button-50', `m-${backgroundColor}`]">
        {{ text }}
      </button>
    </router-link>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// function redirectTo() {
//   router.push(props.route)
// }

defineProps({
  backgroundColor: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  route: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss">
.button-50 {
  width: 100%;
  background-image: none;
  text-transform: lowercase;
  border: 3px solid #000;
  box-shadow:
    #fff 3px 3px 0 0,
    #000 4px 4px 0 1px;
  box-sizing: border-box;
  color: $font-color-1;
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  margin: 0 5px 10px 0;
  overflow: visible;
  padding: 12px 40px;
  transition:
    translate 0.3s ease,
    transform 0.2s ease;
}

.button-50:focus {
  text-decoration: none;
}

.button-50:hover {
  text-transform: uppercase;
}

.button-50:active {
  box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
  outline: 0;
}

.button-50:not([disabled]):active {
  box-shadow:
    #fff 2px 2px 0 0,
    #000 2px 2px 0 1px;
  transform: translate(2px, 2px);
}
</style>
