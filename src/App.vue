<!-- src/App.vue -->
<template>
  <div id="app">
    <Tower v-if="!gameFinish && !gameOver" />
    <p v-if="gameFinish && !gameOver">Vuuuu, You have successfully completed!!</p>
    <p v-if="gameOver">Game Over!</p>
  </div>
 </template>
 
 <script>
 import { mapState } from 'vuex'
 import Tower from './components/Tower'
 
 export default {
  components: {
    Tower,
  },
  computed: {
    ...mapState(['gameOver','gameFinish']),
  },
 }
 </script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
    max-width: 960px;
    margin: 0 auto;
  }
  
  p,
  h3 {
    grid-column: span 3;
  }

  .dragon-btn {
    width:100px;
    height: 40px;
    background-color: #d6d6d6;
    border:1px solid #808080;    
  }
  .btn-start {
    width:100px;
    height: 40px;
    background-color: #d83a3a;
    border:1px solid #fefefe;    
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }
  .active-floor {
    background-color: rgb(0, 245, 41);
    cursor: pointer;
  }
  .egg-bg {
   background-image:  url('~@/assets/dragon-egg.png'); 
   background-repeat: no-repeat;
   background-size: 40px 30px;
   background-position: center;
  }
  </style>