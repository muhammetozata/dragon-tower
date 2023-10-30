<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <span class="egg">
        <button :disabled="!isActiveFloor" :class="{'dragon-btn': true, 'active-floor': isActiveFloor, 'egg-bg': rightEgg }" @click="eggClick(isEgg)">{{ isEgg }}</button>
    </span>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    data() {
        return {
            rightEgg: false,
        }
    },
    props: {
        floor: Number,
        floorCell: Number,
        isEgg: Number,
    },
    computed: {
        ...mapState(['activeFloor','towerHeight']),

        isActiveFloor() {
            return this.activeFloor === this.floor
        },
    },
    methods: {
        ...mapMutations(['GAME_OVER', 'GAME_FINISH', 'INCREMENT_TOWER_FLOOR']),

        eggClick(isEgg) {

            if(this.activeFloor === 0) this.GAME_FINISH()

            if(isEgg) {
                this.rightEgg = true;
                this.INCREMENT_TOWER_FLOOR()
            } else {
                this.GAME_OVER()
            }
        }
    },
}
</script>