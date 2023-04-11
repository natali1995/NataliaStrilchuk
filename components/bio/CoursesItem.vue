<template>
    <v-row>
      <v-col cols="3">
        <v-img :src="course.link" alt="msu" height="80" class="mt-5"></v-img>
      </v-col>
      <v-col class="align-center mt-5">
        <h4 class="text-md-h5 text-h6">{{ course.school }}</h4>
        <span class="text-md-body-1 text-body-2">{{ course.date }}</span>
        <p class="text-md-h6 text-subtitle-1 mt-3">{{ course.course_name }}</p>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: "CoursesItem",
  props: {
    course: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
