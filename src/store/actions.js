export const generateTower = ({commit}, towers) => {
    commit('CREATE_TOWER', towers)
}