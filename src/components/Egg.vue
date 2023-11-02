<template>
    <span class="egg">
        <button :disabled="!isActiveFloor || gameOver" :class="{'dragon-btn': true, 'active-floor': isActiveFloor, 'egg-bg': rightEgg, 'egg-bg1':gameOver && isEgg }" @click="eggClick(isEgg)"></button>
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
        ...mapState(['activeFloor','towerHeight', 'gameOver']),

        isActiveFloor() {
            return this.activeFloor === this.floor
        },
    },
    methods: {
        ...mapMutations(['GAME_OVER', 'STOP_GAME', 'INCREMENT_TOWER_FLOOR']),

        eggClick(isEgg) {

            if(this.activeFloor === 0) this.STOP_GAME()

            if(isEgg) {
                this.rightEgg = true;
                this.INCREMENT_TOWER_FLOOR()
            } else {
                this.STOP_GAME()
                this.GAME_OVER()
            }
        }
    },
}
</script>
<style scoped>
.dragon-btn {
  width: 100px;
  height: 40px;
  background-color: #d6d6d6;
  border: 1px solid #ccc;
  margin: 1px;
}
.active-floor {
  background-color: rgb(0, 245, 41);
  cursor: pointer;
}

.egg-bg {
  background-image: url("~@/assets/dragon-egg.png") !important;
  background-repeat: no-repeat;
  background-size: 40px 30px;
  background-position: center;
  border: 1px solid #000;
}

.egg-bg1 {
  background-image: url("~@/assets/dragon-egg1.png");
  background-repeat: no-repeat;
  background-size: 40px 30px;
  background-position: center;
}

</style>