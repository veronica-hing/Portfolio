<script>
  import LandingCard from './components/LandingCard.vue';
  import ExperienceModals from './components/ExperienceModals.vue';
import AboutModal from './components/AboutModal.vue';


  
  export default {
    name: 'App',
    components: {
    LandingCard,
    ExperienceModals,
    AboutModal
}
  }
  </script>

<template>
  <LandingCard/>
  <AboutModal/>
  <ExperienceModals/>
</template>

<style>
  body{
    padding:0px 0px;
    margin: 0px 0px;
  }
#app {
  margin-top: 0px;
  width: 100%;
}
#app, .modal {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
}
.modal-bg{
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
