<template>
  <div class="home">
    <h3 class="display-1 center">Тест</h3>
    <v-layout row wrap justify-center>
      <template v-if="preparations && preparations.length">
        <v-flex xs12 sm6 md4 lg3 grow pa-3>
          <check-card
            :preparation="preparations[this.randomItem]"
            :isVisible="isVisible"
            @check-myself="checkMyself"
            @wrong="addToForgotList"
            @success="success"
          />
        </v-flex>
      </template>
    </v-layout>

    <div 
      class="to-repeat-block"
      v-if="preparationsToRepeat && preparationsToRepeat.length"
    >
      <h3 class="display-1 center">Обязательно повторить</h3>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6 md4 lg3 grow pa-3
          v-for="preparation in preparationsToRepeat"
          :key="preparation.id"
        >
          <custom-card
            :preparation="preparation"
            :type="'forgotList'"
            @remove-preparation="removeFromForgotList"
          />
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import preparations from '@/assets/preparations'
import PreparationForm from '@/components/PreparationForm'
import CheckCard from '@/components/CheckCard'
import CustomCard from '@/components/CustomCard'

import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'check',
  data() {
    return {
      preparations: [],
      randomItem: 0,
      isVisible: false,
      clicks: 0,
    }
  },
  components: {
    CheckCard,
    CustomCard,
    PreparationForm,
  },
  computed: {
    ...mapGetters('preparationsStore', [
      'preparationsIdToRepeat'
    ]),
    preparationsToRepeat() {
      return this.preparationsIdToRepeat
        .map(id => {
          return preparations.find(preparation => {
            return preparation.id === id
          })
        })
        .sort((a, b) => {
          return +a.id - +b.id
        })
    }
  },
  methods: {
    ...mapActions('preparationsStore', [
      'pushPreparation',
      'removePreparaion'
    ]),
    setRandomItem(){
      this.randomItem = Math.round(Math.random()*this.preparations.length)
    },
    nextItem() {
      this.setRandomItem(),
      this.isVisible = false
    },
    checkMyself() {
      this.isVisible = true;
    },
    addToForgotList(preparationId) {
      this.nextItem(),
      this.pushPreparation(preparationId)
    },
    removeFromForgotList(preparationId) {
      this.removePreparaion(preparationId)
    },
    success() {
      this.nextItem()
    }
  },
  mounted() {
    this.preparations = preparations;
    this.setRandomItem()
  }
}
</script>

<style lang="scss" scoped>
.center {
  text-align: center;
}

.to-repeat-block{
  margin-top: 10rem;
}
</style>
