<script setup>
  import {useFlash} from "@/composable/useFlash";
  const {flash} = useFlash(); 
  // import {counter} from "@/stores/counterStore";
</script>

<template>
  <div class="about">
    <p>
      About Page. The current count is {{ counter.count }}
    </p>
</div>
</template>

