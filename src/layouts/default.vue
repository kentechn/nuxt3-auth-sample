<script setup lang="ts"></script>

<template>
  <div>
    <header><h1>header</h1></header>
    <VDivider />
    <br>
    <main>
      <slot />
    </main>
    <br>

    <footer>
      <h5>footer</h5>
    </footer>
  </div>
</template>

<style scoped></style>
