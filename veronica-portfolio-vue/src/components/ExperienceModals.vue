<template>
    <div v-for="(items, index) in projectData.ProjectsArray" v-bind:key="items">
            <ModalCard
                :topic="projectData.ProjectsArray[index].Title"
                modalBackground="pink"
                modalWidth="720px"
                modalHeight="350px"
                :content="projectData.ProjectsArray[index].Description"
                :link1="projectData.ProjectsArray[index].Link1"
                source1="GitHub Repo"
                :link2="projectData.ProjectsArray[index].Link2"
                source2="Deployed Project"
                :img = "projectData.ProjectsArray[index].Image"
            />
    </div>
</template>

<script>
    import jsonData from "/projects.json"
    import ModalCard from './ModalCard.vue'
    export default {
    data() {
        return { projectData: jsonData };
    },
    components: { ModalCard }
}

</script>

<style scoped>

</style>