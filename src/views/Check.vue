<template>
  <div class="home">
    <v-layout row wrap justify-center>
      <template v-if="preparations && preparations.length">
        <v-flex xs12 sm6 md4 lg3 grow pa-3>
          <check-card
            :preparation="preparations[this.randomItem]"
            :isVisible="isVisible"
            @check-myself="checkMyself"
          />
          <!-- <v-btn
            @click="nextItem"
          >Следующий</v-btn> -->
        </v-flex>
      </template>
    </v-layout>
  </div>
</template>

<script>
import preparations from '@/assets/preparations'
import PreparationForm from '@/components/PreparationForm'
import CheckCard from '@/components/CheckCard'

export default {
  name: 'home',
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
    PreparationForm,
  },
  methods: {
    setRandomItem(){
      this.randomItem = Math.round(Math.random()*this.preparations.length)
    },
    nextItem() {
      this.setRandomItem(),
      this.isVisible = false
    },
    checkMyself() {
      console.log(this.clicks)
      if(this.clicks === 0) {
        this.isVisible = true;
        this.clicks = 1
        return;
      } 

      if(this.clicks === 1) {
        this.nextItem()
        this.clicks = 0;
      }
    }
  },
  mounted() {
    this.preparations = preparations;
    this.setRandomItem()
  }
}
</script>
