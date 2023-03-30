<template>
  <v-card class="cookie-notification mx-auto" max-width="800" rounded="0" v-if="!cookieAccepted">
    <h3 class="cookie-notification__heading">{{ headingMessage }}</h3>
    <div class="cookie-notification__content mt-5">
      <span class="cookie-notification__message">{{ message }}</span>
      <v-btn @click="acceptCookie" class="cookie-notification__button ml-md-12 ml-6">{{ buttonText }}</v-btn>
    </div>
  </v-card>
</template>

<script>
import {useCookie} from "nuxt/app";

export default {
  setup() {
    const cookieAccepted = useCookie("cookieAccepted", false);

    const acceptCookie = () => {
      cookieAccepted.value = true;
      this.$cookies.set("cookieAccepted", "true", {
        maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
      });
    };

    return {
      cookieAccepted,
      headingMessage: 'Cookie policy',
      message:
          "This website uses cookies to enhance your browsing experience. By clicking \"All Set\", you consent to the use of all cookies. We also use cookies for analytics and personalization to provide you with a better browsing experience.",
      buttonText: "All set",
      acceptCookie,
    };
  },
};
</script>

