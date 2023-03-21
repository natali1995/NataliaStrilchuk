<template>
<!--  <div class="mt-7 max-w-sm mx-auto text-center card">-->
<!--    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>-->
<!--    <p class="mt-7 text-6xl">Ooops.</p>-->
<!--    <p class="mt-7">{{ error.message }}</p>-->
<!--    <button class="btn my-7" @click="handleClearError">Go Home...</button>-->
<!--  </div>-->

  <div class="error">
    <div>
      <h1 class="text-center text-md-h1 text-h3">{{ error.statusCode }}</h1>
      <h3 class="text-center mt-16 text-md-h2 text-h4">Ooops</h3>
      <h1 class="text-center mt-16 text-md-h2 text-h4">{{ error.message }}</h1>
      <h3 class="text-center mt-16 text-md-h2 text-h4 button" @click="handleClearError">Go Home...</h3>
    </div>
  </div>
</template>

<script setup>
  import {clearError} from "nuxt/app";

  defineProps(['error'])

  const handleClearError = () => clearError({ redirect: '/', fatal: true })
</script>

