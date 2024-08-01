<script setup>
  import Quiz from "@/components/Quiz/Quiz.vue";
  import {state} from "@/stores/quizStore"
</script>

<template>
  <main>
    <form>
      <Quiz :quiz="state" />
    </form>
  </main>
</template>

<style>
</style>
