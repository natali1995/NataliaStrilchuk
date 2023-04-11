<template>
<div class="content mt-md-16 mt-5 skills">
  <v-card class="mx-auto" max-width="1500" elevation="0">
      <h1 class="text-center title">Expertise and Knowledge</h1>
    <v-card elevation="0" max-width="1200" class="mx-auto mt-md-16 mt-5">
      <p class="text-md-h6 text-body-1">Thanks for stopping by my skills page! I'm a frontend developer with a love for all things tech and design.
        My skillset includes expertise in HTML, CSS, JavaScript, and front-end frameworks such as Nuxt and Vue, as well
        as experience using design tools such as Adobe Photoshop, Figma, Adobe XD, and Procreate.</p>
      <p class="mt-5 text-md-h6 text-body-1">My goal is to create websites that are not only aesthetically pleasing but also highly functional and easy to
        use. With my dedication to staying up to date with the latest industry trends and technologies, I am always
        seeking new ways to improve the apps I create. Please check out the icons below to learn more about my experience and skillset.</p>
    </v-card>

    <TechSkillsList  :tech_skills="techSkills"/>

    <ProgramsList :programs="programs"/>

    <LanguageList :languages="languages"/>

  </v-card>
</div>
</template>

<script>
import {useHead} from "nuxt/app";
import TechSkillsList from "../components/skills/TechSkillsList";
import ProgramsList from "../components/skills/ProgramsList";
import LanguageList from "../components/skills/LanguageList";
import data from '~/assets/db.json';

export default {
  name: "skills",
  components: {LanguageList, ProgramsList, TechSkillsList},
  setup() {
    useHead({
      title: 'Natalia Strilchuk | Skills'
    })
  },
  data() {
    return {
      techSkills: [],
      programs: [],
      languages: []
    }
  },
  async created() {
    this.techSkills = data.techSkills;
    this.programs = data.programs;
    this.languages = data.languages;
  }
}
</script>
