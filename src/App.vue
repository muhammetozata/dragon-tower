<template>
  <div id="app">
      <div v-if="isStopGame && activeFloor<0">
        <div>Vuuuu, You have successfully completed!!</div>
        <button @click="RESET_GAME">Reset</button>
      </div>
      <div v-if="gameOver">
          <div>Game Over</div>
          <button @click="RESET_GAME">Reset</button>
      </div>
      <Header v-if="!isStartGame"></Header>
      <Tower></Tower>
  </div>
</template>

 <script>
import { mapState,mapGetters, mapMutations } from "vuex";
import Tower from "./components/Tower";
import Header from "./components/Header";

export default {
  components: {
    Header,
    Tower,
  },
  computed: {
    ...mapGetters(['isStartGame', 'isStopGame']),
    ...mapState(["gameOver","activeFloor"]),
  },
  methods: {
    ...mapMutations(['RESET_GAME'])
  }
};
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
</style>