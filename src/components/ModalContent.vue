<script setup>
    import {defineProps} from 'vue'
    defineProps({
        title: String,
        content: String,
        link1: String,
        link2: String,
        linkName1: String,
        linkName2: String
    })
</script>

<template>
    <div class="content">
        <h2>{{title}}</h2>
        <p> {{content}}</p>
        <a :href="link1" target="_blank">{{linkName1}}</a>
        <a :href="link2" target="_blank">{{linkName2}}</a>
    </div>

</template>

<style>

</style>