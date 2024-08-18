<script lang="ts" setup>
const { loginUser } = useMyAuth()
</script>

<template>
  <div>
    <h1>hello world</h1>
    <ClientOnly>
      {{ loginUser }}
    </ClientOnly>
  </div>
</template>

<style scoped></style>
