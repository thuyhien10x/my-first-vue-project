<script setup>
  import {useFlash} from "@/composable/useFlash";
   
      const {flash} = useFlash();
</script>

<template>
  <div class="about">
    <p>
       <button @click="flash('Yay','It Works!','info')">Click Me</button>
    </p>
</div>
</template>

