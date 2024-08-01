<script setup>
    defineProps({
        modelValue:String
    });
   
    let emit = defineEmits(['update:modelValue'])
   
    import {ref} from "vue";
    let textarea = ref(null);
    function onTabPress(e) {
    let textarea = e.target;
    let val = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd;

    textarea.value=val.substring(0,start)+"\t"+val.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + 1;
}
    function update(e) {
       emit('update:modelValue',e.target.value)
    }
</script>

<template>
    <textarea @keydown.tab.prevent="onTabPress"
    @keyup="update"
    v-text="modelValue"
    ></textarea>
</template>