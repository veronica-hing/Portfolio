<template>
    <div class="landing-container">
        <div class = "profile">
            <h1>Hi! I'm Veronica Hing</h1>
            <p>Software Developer</p>
        </div>
        <div class = "social-links">
            <a href="https://github.com/veronica-hing" target="_blank">
                <img src="../assets/icons8-github-50.png" alt="GitHub">
            </a>
            <a href="https://www.linkedin.com/in/veronica-hing/" target="_blank">
                <img src="../assets/icons8-linkedin-50.png" alt="LinkedIn">
            </a>
            <a href="https://drive.google.com/file/d/1asMDZl1kTuFvXOp6EQ_kFOzkv-OmR-bR/view?usp=sharing" target="_blank">
                <img src="../assets/icons8-pdf-50.png" alt="Resume">
            </a>
            <a href="https://thehumblingcurve.com/" target="_blank">
                <img src="../assets/icons8-typewriter-with-paper-50.png" alt="Blog">
            </a>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .landing-container{
        background-color:blanchedalmond;
        color:black;
    }
    .social-links{
        display: flex;
        width: 40vw;
        margin: auto;
    }
    .social-links > a{
        flex: 1;
    }
    .social-links > a :hover{
        background-color: whitesmoke;
        border-radius: 50%;
        transition-duration: 2s;
    }
</style>