<template>
  <v-container class="content mt-md-16 mt-5">
    <v-card max-width="900" elevation="0" class="mx-auto contacts">
      <h1 class="text-center title pt-md-16">Get in touch ...</h1>
      <div class="v-container mt-md-16 pt-md-16 mt-10 text-center">
        <v-row class="my-md-16">
          <v-col cols="12" md="4" class="mt-md-0">
            <v-img src="/images/icon-gmail.svg" alt="icon-gmail" height="60"></v-img>
            <p class="mt-8 text-md-h6">strilchuk.natalie@gmail.com</p>
          </v-col>
          <v-col cols="12" md="4" class="mt-md-0 mt-10">
            <v-img src="/images/icon-whatsapp.svg" alt="icon-whatsapp" height="60"></v-img>
            <p class="mt-8 text-md-h6">+351 926 107 013</p>
          </v-col>
          <v-col cols="12" md="4" class="mt-md-0 mt-10">
            <v-img src="/images/icon-skype.svg" alt="icon-skype" height="60"></v-img>
            <p class="mt-8 text-md-h6">Natalia Strilchuk or
              live:.cid.8ecda9d212d1f7b7</p>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
  title: 'Natalia Strilchuk | Contacts'
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Tapestry&display=swap');

.content {
  min-height: 75vh;
}

</style>
