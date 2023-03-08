<template>
  <div class="d-none d-sm-none d-md-flex">
    <NuxtLink to="/" class="text-decoration-none menu-btn">
      <v-btn>
        Home
      </v-btn>
    </NuxtLink>

    <NuxtLink to="/skills" class="text-decoration-none menu-btn">
      <v-btn>
        Skills
      </v-btn>
    </NuxtLink>

    <NuxtLink to="/about-me" class="text-decoration-none menu-btn">
      <v-btn>
        About me
      </v-btn>
    </NuxtLink>

    <NuxtLink to="/portfolio" class="text-decoration-none menu-btn">
      <v-btn>
        My works
      </v-btn>
    </NuxtLink>

    <NuxtLink to="/contacts" class="text-decoration-none menu-btn">
      <v-btn>
        Contacts
      </v-btn>
    </NuxtLink>
  </div>

  <div class="d-md-none">
      <v-list nav>
        <v-list-item to="/" title="Home" value="home"></v-list-item>
        <v-list-item to="skills" title="Skills" value="skills"></v-list-item>
        <v-list-item to="about-me" title="About me" value="about_me"></v-list-item>
        <v-list-item to="portfolio" title="My works" value="works"></v-list-item>
        <v-list-item to="contacts" title="Contacts" value="contacts"></v-list-item>
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
