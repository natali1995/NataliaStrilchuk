<template>
  <div class="d-none d-sm-none d-md-flex">
    <NuxtLink to="/" class="text-decoration-none menu-btn">
      <v-btn>
        Welcome
      </v-btn>
    </NuxtLink>

    <NuxtLink to="/skills" class="text-decoration-none menu-btn">
      <v-btn>
        Skills
      </v-btn>
    </NuxtLink>

    <NuxtLink to="/about-me" class="text-decoration-none menu-btn">
      <v-btn>
        My Story
      </v-btn>
    </NuxtLink>

    <NuxtLink to="/portfolio" class="text-decoration-none menu-btn">
      <v-btn>
        Gallery
      </v-btn>
    </NuxtLink>

    <NuxtLink to="/contacts" class="text-decoration-none menu-btn">
      <v-btn>
        Reach Out
      </v-btn>
    </NuxtLink>
  </div>

  <div class="d-md-none">
      <v-list nav>
        <v-list-item to="/" title="Welcome" value="welcome"></v-list-item>
        <v-list-item to="/skills" title="Skills" value="skills"></v-list-item>
        <v-list-item to="/about-me" title="My Story" value="my_story"></v-list-item>
        <v-list-item to="/portfolio" title="Gallery" value="gallery"></v-list-item>
        <v-list-item to="/contacts" title="Reach Out" value="reach_out"></v-list-item>
      </v-list>
  </div>
</template>

<script>

export default {
  name: "AppHeader",
}

</script>

<style lang="scss" scoped>
</style>
