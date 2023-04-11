<template>
  <h1 class="mt-10 subtitle">Courses & Certifications</h1>
  <v-card>
    <v-card max-width="700" class="mt-5 mb-5" v-for="course in courses">
    <CoursesItem :course="course"/>
    </v-card>
  </v-card>
</template>

<script>


import CoursesItem from "./CoursesItem";
export default {
  name: "CoursesList",
  components: {CoursesItem},
  props: {
    courses: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
