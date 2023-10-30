<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="tower">
    <div class="floor" v-for="(eggs,floor) in getTowers" :key="floor">
        <Egg v-for="(egg, index) in eggs" :key="egg" :floor="floor" :floorCell="index" :isEgg="egg"></Egg>
    </div>
</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'


import Egg from './Egg'

export default {
computed: {
    ...mapState(['towerHeight']),
    ...mapGetters(['getTowers'])
},
components: {
    Egg,
},
methods: {
    generateTower() {
        let tower = [];
        for(var i = 0; i <= this.towerHeight-1; i++) {

            var eggOne = Math.floor(Math.random(1)*2)
            var eggTwo = eggOne == 0 ? 1 : Math.floor(Math.random(1)*2)
            var eggThree = eggOne==0 || eggTwo==0 ? 1 : 0

            tower.push([
                eggOne,
                eggTwo,
                eggThree
            ]);
        }
        return tower;
    }
},
created() {
    this.$store.commit('CREATE_TOWER', this.generateTower())
    this.$store.commit('INCREMENT_TOWER_FLOOR', this.towerHeight)
  },
}
</script>