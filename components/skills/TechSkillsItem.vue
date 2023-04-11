<template>
  <div :class="skill.title" class="mx-5 mx-md-8 mt-md-10">
    <v-card class="pa-4 rounded-shaped" min-width="220" min-height="140">
      <v-row>
        <v-col cols="4">
          <v-img :src="skill.link" :alt="skill.title" min-height="50" ></v-img>
        </v-col>
        <v-col cols="8">
          <h4 class="mt-3 text-md-h5 text-h6">{{ skill.heading }}</h4>
        </v-col>
      </v-row>
      <h6 class="text-md-body-1 text-body-2 mt-2">{{ skill.level }}</h6>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TechSkillsItem",
  props: {
    skill: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
