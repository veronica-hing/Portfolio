<template>
    <div class="root">
        <a @click="isOpen = true" class = "modal-area"> About Me</a>
        <teleport to="#modal">
            <div class="modal" v-if="isOpen">
                <div>
                    <h2>Howdy, Nice to meet you!</h2>
                    <img src="../assets/vhing_profile.jpg" alt="portrait of veronica hing">
                    <p>I'm Veronica Hing, a Junior Full Stack Software developer with a passion for creating all the things! I have worked in the vacuum tube industry for over 3 years as a Mechanical Engineer. I was the main contact for several projects that involved upgrading existing products, creating new products, and implementing new tools to help our technicians build products with higher efficiency and accuracy. After experiencing the Covid-19 lockdowns that shifted us towards a more digital and online space, I decided to start learning software development.</p>
                    <p>I wanted to take my passion for creating products and tools that address people's needs, and expand it to address their digital needs as well. I recently graduated from a rigorous coding boot-camp where I spent 1,000+ hours cultivating my programming knowledge to create full-stack web applications in 3 different languages: Python, C#, and JavaScript (MERN). I thoroughly enjoy taking an idea, expanding the idea, exploring the different perspectives and possible implementations of the idea, and following through on making the idea a reality.</p>
                    <p>My strengths lie in frontend where I can communicate with users and apply various JavaScript libraries or frameworks to create intuitive and interactive designs that meet their needs.</p>
                    <p><b>Contact:</b><br>
                    email: veronica.m.hing@gmail.com <br>
                    phone: 1 (510) 837-9607</p>
                    <button @click="isOpen=false"> Close</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script setup>
    import { ref} from 'vue'
    const isOpen = ref(false)
</script>

<style scoped>

    img{
        width: 350px;
        height: 350px;
        object-fit:scale-down;
        border-radius: 50%;
    }
    .root{
        position: relative;
        display: flex;
        justify-content: center;
        background-color: turquoise;
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
    overflow-y: scroll;
    }
    .modal > div{
        background-color: #fff;
        padding: 50px;
        border-radius: 10px;
        width: 60vw;
        height: 80vh;
        overflow-y:auto;
    }

    .modal-area{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 30px;
        border: 1px black solid;
        border-radius: 10px;
    }
    .modal-area:hover{
        background-color: whitesmoke;
        transition-duration: 1.5s;
    }

</style>