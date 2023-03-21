<template>
  <v-card class="d-none d-sm-none d-md-block" rounded="0" style="background: linear-gradient(to left, #4f55f5, rgba(102, 199, 229))">
    <v-toolbar style="background: none">
      <NuxtLink to="/" class="d-md-inline-flex text-decoration-none">
        <img src="/images/logo4.png" alt="logo" style="max-height: 50px" class="ml-5">

        <v-toolbar-title class="mt-2 ml-5">Natalia Strilchuk</v-toolbar-title>
      </NuxtLink>

      <v-spacer></v-spacer>

      <AppHeader />

    </v-toolbar>
  </v-card>
  <v-container>
    <div>
      <div class="d-md-none">
        <v-layout>
          <v-app-bar
              style="background: linear-gradient(to left, #4f55f5, rgba(102, 199, 229))"
          >
            <template v-slot:append>
              <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>Natalia Strilchuk</v-app-bar-title>

            <template v-slot:prepend>
              <NuxtLink to="/">
                <img src="/images/logo4.png" alt="logo" style="max-height: 50px">
              </NuxtLink>
            </template>
          </v-app-bar>
          <v-navigation-drawer
              v-model="drawer"
              temporary
              style="background: linear-gradient(to left, #4f55f5, rgba(102, 199, 229))"
          >
            <AppHeader />

          </v-navigation-drawer>
          <v-main>
            <slot></slot>
          </v-main>
        </v-layout>
      </div>

      <v-layout class="d-none d-sm-none d-md-block">
        <v-main>
          <slot></slot>
        </v-main>
      </v-layout>

    </div>
  </v-container>
  <AppFooter />
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default {
  name: "default",
  components: {AppFooter, AppHeader},
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="scss">


body {
  background: linear-gradient(to left, #4f55f5, rgba(102, 199, 229, 0.46));
}

.v-container {
  background-color: white;
  min-width: 100%;
}

.v-navigation-drawer__scrim {
  background: none;
}
</style>
