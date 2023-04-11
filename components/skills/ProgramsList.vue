<template>
  <div class="programs mt-16 text-start text-md-end">
    <h2 class="subtitle text-center text-md-end">Programs</h2>
    <div class="d-inline-flex mt-10"
         v-for="skill in programs">
      <TechSkillsItem :skill="skill"/>
    </div>
  </div>
</template>

<script>
import TechSkillsItem from "./TechSkillsItem";
export default {
  name: "ProgramsList",
  components: {TechSkillsItem},
  props: {
    programs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
