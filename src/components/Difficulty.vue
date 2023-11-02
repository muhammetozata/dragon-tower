<template>
    <select v-model="selectedValue" @change="difficultyOnChange" style="width: 240px; height: 30px;">
        <option v-for="(index, value) in difficulties" :key="index" :value="value" :selected="selectedValue == value">{{ value }}</option>
    </select>
</template>


<script>
import { ref } from 'vue';
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
    setup() {
        const selectedValue = ref("Easy")
        return {selectedValue}
    },

    computed: {
        ...mapState(['difficulties'])
    },

    methods: {
        ...mapGetters(['getTowerWeightByDifficulty']),
        ...mapMutations(['SET_DIFFICULTY', 'SET_TOWER_WEIGHT']),

        difficultyOnChange() {
            this.SET_DIFFICULTY(this.selectedValue)

            const towerWeight = this.getTowerWeightByDifficulty()
            this.SET_TOWER_WEIGHT(towerWeight)
        }
    }
}
</script>