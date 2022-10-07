<template>
    <div class="root">
        <a @click="isOpen = true" class = "modal-area"> {{topic}} </a>
        <teleport to="#modal">
            <div class="modal" v-if="isOpen">
                <div>
                    <ModalContent
                        :title= "topic"
                        :content="content"
                        :link1="link1"
                        :link2="link2"
                        :linkName1="source1"
                        :linkName2="source2"
                    />
                    <button @click="isOpen=false"> Close</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script setup>
    import { ref, defineProps } from 'vue'
    import ModalContent from './ModalContent.vue';
    defineProps({
        topic: String,
        modalBackground: String,
        modalWidth: String,
        modalHeight: String,
        content: String,
        link1: String,
        source1: String,
        link2: String,
        source2: String,
        img: String
    })
    const isOpen = ref(false)
</script>

<style scoped>
    .root{
        position: relative;
        display: flex;
        justify-content: center;
        background-color: v-bind(modalBackground);
    }
    .modal{
    position: fixed;
    top: 0;
    left:0;
    background-color:  rgba(0,0,0, 0.5);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .modal > div{
        background-color: #fff;
        padding: 50px;
        border-radius: 10px;
    }

    .modal-area{
        display: flex;
        align-items: center;
        justify-content: center;
        width: v-bind('modalWidth');
        height: v-bind('modalHeight');
        border: 1px black solid;
        border-radius: 10px;
        background-image: v-bind('img');
    }
    .modal-area:hover{
        background-color: whitesmoke;
        transition-duration: 1.5s;
    }

</style>