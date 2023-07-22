<template>
<div class="content mt-md-16 mt-5 about_me">
  <h1 class="text-center title">Meet the Person</h1>
  <v-card max-width="1300" class="mx-auto mt-md-16 mt-5" elevation="0">
    <v-row class="d-flex">
      <v-col md="6" cols="12">
        <p class="mt-5 text-md-h6 text-subtitle-1">As a front-end developer with an interest in exploring the intersection between
          art and technology, I'm passionate about crafting websites that are not only aesthetically pleasing but also intuitive and easy to use.
          One of the things that drew me to the field of web development was the ability to create visually stunning and intuitive designs
          that captivate user attention.</p>

        <p class="mt-5 text-md-h6 text-subtitle-1">When I'm not coding, I enjoy exploring my creative side through painting and other art forms. I believe
          that the principles of design and color theory I've learned as an artist have translated well into my work as a
          developer. It's one of the reasons why I'm focused on creating websites with a clear and concise design that is
          easy on the eyes and enjoyable for users.</p>

        <p class="mt-5 text-md-h6 text-subtitle-1">But my interests don't stop there - I'm also fascinated by the worlds of chemoinformatics, data science, and data
          visualization. I believe that these fields have the potential to revolutionize the way we think about and interact
          with technology, and I'm eager to explore the possibilities they offer. So whether you're here to check out my portfolio
          or just to learn more about me, I'm glad you're here!</p>
      </v-col>
      <v-col md="6" cols="12">
        <v-img src="/images/about-me_photo.png" alt="photo-about" max-height="600" class="mx-auto my-auto mt-md-5"></v-img>
      </v-col>
    </v-row>


  </v-card>
  <v-row class="mt-10">
    <v-col>
      <v-card max-width="1500" class="mx-auto" elevation="0">
        <v-row>
        <v-col
            cols="12"
            md="6"
        >
          <EducationList :educations="educations"/>
        </v-col>

        <v-col
            cols="12"
            md="6"
        >
          <ExperienceList :experiences="experiences"/>
        </v-col>
        </v-row>

        <CoursesList :courses="courses"/>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>

<script>
import {useHead} from "nuxt/app";
import EducationList from "../components/bio/EducationList";
import data from '~/assets/db.json';
import ExperienceList from "../components/bio/ExperienceList";
import CoursesList from "../components/bio/CoursesList";

export default {
  name: "about-me",
  components: {CoursesList, ExperienceList, EducationList},
  setup() {
    useHead({
      title: 'Natalia Strilchuk | My Story'
    })
  },
  data() {
    return {
      educations: [],
      experiences: [],
      courses: []
    }
  },
  async created() {
    this.educations = data.educations;
    this.experiences = data.experiences;
    this.courses = data.courses;
  }
}
</script>

<style lang="scss" scoped>

.content {
  min-height: 75vh;
}

</style>
