<template>
  <v-img :src="contact.logo" :alt="contact.alt" height="60"></v-img>
  <h6 class="mt-8 text-md-h6">{{ contact.text }}</h6>
</template>

<script>
export default {
  name: "ContactsItem",
  props: {
    contact: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
