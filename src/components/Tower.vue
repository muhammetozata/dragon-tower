<template>
<div class="tower">
    <div class="floor" v-for="(eggs,floor) in getTowers" :key="floor">
        <Egg v-for="(egg, index) in eggs" :key="index" :floor="floor" :floorCell="index" :isEgg="egg"></Egg>
    </div>
</div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'


import Egg from './Egg'

export default {
    computed: {
        ...mapState(['towerHeight', 'towerWeight']),
        ...mapGetters(['getTowers'])
    },
    components: {
        Egg,
    },
    methods: {
        ...mapMutations(['CREATE_TOWER', 'INCREMENT_TOWER_FLOOR']),
    },
}
</script>