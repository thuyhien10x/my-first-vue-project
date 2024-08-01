<script setup>
  import Quiz from "@/components/Quiz/Quiz.vue";
</script>

<template>
  <main>
    <form>
      <Quiz :quiz="{ name: 'My First Quiz', questions: [] }" />
    </form>
  </main>
</template>

<style>
</style>
