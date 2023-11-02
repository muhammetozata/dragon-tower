export const getTowers = (state) => {
    return state.towers
}

export const getTowerWeightByDifficulty = (state) => {
    return state.difficulties[state.activeDifficulty]
}

function getRandomNumber(length) {
    return Math.floor(Math.random() * length);
}

export const generateTower = (state) => {
    const arr = [];
    for(var i = 0; i < state.towerHeight; i++) {
        const eggs = Array.from({length: state.towerWeight}, () => 0)

        let key1 = getRandomNumber(state.towerWeight);
        let key2 = getRandomNumber(state.towerWeight);
        
        while(key1 === key2) {
            key2 = getRandomNumber(state.towerWeight)
        }

        eggs[key1] = 1
        eggs[key2] = 1

        arr.push(eggs);
    }
    return arr;
}

export const isStartGame = (state)  => {
    return state.gameStatus['start']
}

export const isStopGame = (state)  => {
    return state.gameStatus['stop']
}