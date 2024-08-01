<script setup>
// import { inject } from "vue";
// defineProps({ quiz: Object });
// let {name, changeName } = inject('name');
// setTimeout(() => {
//   name.value = 'A New Name';
// }, 3000);
// let quiz = inject('quiz');
// let name = inject('name');
import {state} from "@/stores/quizStore"
</script>

<template>
  <div>
    <h5>{{ state.name }}</h5>
    <button @click="state.name='A New Quiz Name'">Change Quiz Name</button>
    <ul>
      <li><a href="#">Get a Job</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
</template>
