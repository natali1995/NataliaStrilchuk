<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#4f55f5" :height="5"/>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
