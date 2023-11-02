export const GAME_OVER = (state) => {
    state.gameOver = true
}

export const CREATE_TOWER = (state, towers) => {
    state.towers = towers
}

export const INCREMENT_TOWER_FLOOR = (state, payload) => {
    if(payload) {
        state.activeFloor = payload
    }
    state.activeFloor--
}

export const SET_DIFFICULTY = (state, payload) => {
    state.activeDifficulty = payload
}

export const SET_TOWER_WEIGHT = (state, payload) => {
    state.towerWeight = payload
}

export const START_GAME = (state) => {
    state.gameStatus['start'] = true
    state.gameOver = false
}

export const STOP_GAME = (state) => {
    state.gameStatus['stop'] = true
}

export const RESET_GAME = (state) => {
    
    state.gameStatus = {
        'start': false,
        'stop': false
    }
    state.gameOver = false
    state.towers = []
    state.activeFloor = 0
    state.towerHeight = 10
    state.towerWeight = 3
    state.difficulties = {
        'Easy': 3,
        'Medium': 4,
        'Hard': 5
    }
    state.activeDifficulty = 'Easy'
}