<template>
  <div class="v-container">
    <h4 class="text-md-h5 text-h6">{{ experience.profession }}</h4>
    <span class="text-md-body-1 text-body-2">{{ experience.date }}</span>
    <ul class="text-md-h6 text-subtitle-1 mt-3">
      {{ experience.mainWorkTitle }}
      <li v-for="item in experience.workList">{{ item.item }}</li>
    </ul>

    <ul class="text-md-h6 text-subtitle-1 mt-5">
      {{ experience.mainTechnologyTitle }}
      <li v-for="item in experience.technologyList">{{ item.item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ExperienceItem",
  props: {
    experience: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
