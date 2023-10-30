import {createStore} from 'vuex'

export default createStore({
 state: {
    gameOver: false,
    gameFinish: false,
    towerHeight: 10,
    towers: [],
    activeFloor: 0,
 },
 getters: {
    getTowers(state) {
        return state.towers
    } 
 },
 mutations: {
    GAME_OVER(state) {
      state.gameOver = true
    },
    GAME_FINISH(state) {
        state.gameFinish = true
    },
    CREATE_TOWER(state, towers) {
        state.towers = towers
    },
    INCREMENT_TOWER_FLOOR(state, payload) {
        if(payload) {
            state.activeFloor = payload
        }
        state.activeFloor--
    }
 }, 
})