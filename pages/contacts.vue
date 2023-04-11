<template>
  <v-container class="content mt-md-16 mt-5">
    <v-card max-width="900" elevation="0" class="mx-auto contacts">
      <h1 class="text-center title">How to reach me ...</h1>
      <p class="mt-md-16 mt-5 text-md-h6 text-subtitle-1">Want to get in touch with me? Great! I love hearing from people who are interested in my work. Please don't hesitate to reach out via any of the channels below.</p>
      <div class="v-container mt-md-16 mt-10 text-center">
        <ContactsList :contacts="contacts"/>
      </div>
      <p class="text-md-h6 text-subtitle-1">I'm open to discussing full-time opportunities, freelance work, or even just connecting with like-minded people
        in the industry. If you're looking for a skilled front-end developer with a passion for creating stunning websites,
        feel free to contact me at your convenience.</p>
      <p class="mt-5 text-md-h6 text-subtitle-1">Thank you for taking the time to check out my portfolio website. I hope to hear from you soon!</p>
    </v-card>
  </v-container>
</template>

<script>
import {useHead} from "nuxt/app";
import ContactsList from "../components/contacts/ContactsList";
import data from '~/assets/db.json';

export default {
  components: {ContactsList},
  setup() {
    useHead({
      title: 'Natalia Strilchuk | Reach out'
    })
  },
  data() {
    return {
      contacts: []
    }
  },
  async created() {
    this.contacts = data.contacts
  }
}
</script>

<style lang="scss" scoped>

.content {
  min-height: 75vh;
}

</style>
