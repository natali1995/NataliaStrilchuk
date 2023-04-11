<template>
  <v-row class="my-md-16 my-5">
    <v-col cols="12" md="3" sm="6" class="mt-md-0 mt-10" v-for="contact in contacts">
      <ContactsItem :contact="contact"/>
    </v-col>
  </v-row>
</template>

<script>
import ContactsItem from "./ContactsItem";
export default {
  name: "ContactsList",
  components: {ContactsItem},
  props: {
    contacts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
