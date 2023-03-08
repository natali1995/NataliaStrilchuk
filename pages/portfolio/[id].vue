<template>
<h1>work</h1>
  <h1>{{image_works[0].src}}</h1>
  <div>
    <div v-for="part in image_works">
      <img :src="part.src" :alt="part.alt">
    </div>
  </div>

</template>

<script>
export default {
  name: "[id]",
  data(){
    return {
      image_works: [
        { src: '/images/portfolio/web/work' + this.$route.params.id + '/part1.png', alt: 'Part-1' },
        { src: '/images/portfolio/web/work' + this.$route.params.id + '/part2.png', alt: 'Part-2' },
        { src: '/images/portfolio/web/work' + this.$route.params.id + '/part3.png', alt: 'Part-3' },
        { src: '/images/portfolio/web/work' + this.$route.params.id + '/part4.png', alt: 'Part-4' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
