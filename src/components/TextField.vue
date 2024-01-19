<template>
  <div class="text-field">
    <transition>
      <label v-if="showLabel" :for="name" class="text-field__label">{{ placeholder }}</label>
    </transition>
    <input
      @focusin="showLabel = true"
      @focusout="showLabel = false"
      :type="type"
      :name="name"
      class="text-field__input"
      :id="name"
      :placeholder="showLabel ? '' : placeholder"
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
const showLabel = ref(false)

defineProps({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss">
.text-field {
  position: relative;

  &__label {
    position: absolute;
    top: -20px;
    left: 10px;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 600;
    color: $accent-color2;
    opacity: 0.5;
    transition: opacity 0.2s ease-out;
    pointer-events: none;
  }

  &__input {
    font-size: 14px;
    width: 100%;
    padding: 7px;
    box-sizing: border-box;
    outline: none;
    border: 3px solid $font-color-1;

    &::placeholder {
      color: $font-color-1;
      opacity: 0.5;
    }
  }
}

// LABEL TRANSITION

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
