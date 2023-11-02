<template>
    <button style="width: 50px; height: 30px; margin-left: 5px;" @click="startGame">Starts</button>
</template>

<script>
import { mapMutations, mapGetters, mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['towerHeight'])
    },
    methods: {
        ...mapMutations(['RESET_GAME','CREATE_TOWER', 'START_GAME', 'RESET_GAME', 'INCREMENT_TOWER_FLOOR']),
        ...mapGetters(['generateTower']),
        
        startGame() {
            // Generate Tower
            const towers = this.generateTower()
            this.CREATE_TOWER(towers)

            // active floor
            this.INCREMENT_TOWER_FLOOR(this.towerHeight)

            // Start Game
            this.START_GAME()

        }
    }
}
</script>