<script setup>
import QuizHeader from "@/components/Quiz/QuizHeader.vue";
import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";
import QuizFooter from "@/components/Quiz/QuizFooter.vue";
import {state} from "@/stores/quizStore"
// import { provide, ref } from "vue";
// defineProps({ quiz: Object });
// let props = defineProps({ quiz: Object });
// let name = ref('John Doe');
// provide('name', {
//   name,
//   changeName: () => name.value = 'Changed'
// });
// provide('name', name);
// provide('key', 'value');
// provide('quiz', props.quiz);
</script>

<template>
  <!-- <h1>{{ name }}</h1> -->
  <QuizHeader />
  <QuizQuestion />
  <QuizFooter :quiz="quiz"/>
</template>
