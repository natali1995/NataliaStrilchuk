<template>
  <v-container class="content mt-md-16 mt-5">
    <v-card max-width="900" elevation="0" class="mx-auto contacts">
      <h1 class="text-center title">How to reach me ...</h1>
      <p class="mt-md-16 mt-5 text-md-h6 text-subtitle-1">Want to get in touch with me? Great! I love hearing from people who are interested in my work. Please don't hesitate to reach out via any of the channels below.</p>
      <div class="v-container mt-md-16 mt-10 text-center">
        <v-row class="my-md-16 my-5">
          <v-col cols="12" md="3" sm="6" class="mt-md-0 mt-sm-10">
            <v-img src="/images/icon-gmail.svg" alt="icon-gmail" height="60"></v-img>
            <h6 class="mt-8 text-md-h6">strilchuk.natalie@gmail.com</h6>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="mt-md-0 mt-10">
            <v-img src="/images/icon-telegram.svg" alt="icon-telegram" height="60"></v-img>
            <h6 class="mt-8 text-md-h6">@NatalieTails</h6>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="mt-md-0 mt-10">
            <v-img src="/images/icon-skype.svg" alt="icon-skype" height="60"></v-img>
            <h6 class="mt-8 text-md-h6">Natalia Strilchuk or
              live:.cid.8ecda9d212d1f7b7</h6>
          </v-col>
          <v-col cols="12" md="3" sm="6" class="mt-md-0 mt-10">
            <v-img src="/images/icon-linkedin.svg" alt="icon-linkedin" height="60"></v-img>
            <h6 class="mt-8 text-md-h6">www.linkedin.com/in/nataliastrilchuk</h6>
          </v-col>
        </v-row>
      </div>
      <p class="text-md-h6 text-subtitle-1">I'm open to discussing full-time opportunities, freelance work, or even just connecting with like-minded people
        in the industry. If you're looking for a skilled front-end developer with a passion for creating stunning websites,
        feel free to contact me at your convenience.</p>
      <p class="mt-5 text-md-h6 text-subtitle-1">Thank you for taking the time to check out my portfolio website. I hope to hear from you soon!</p>
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
