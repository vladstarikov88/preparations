<template>
  <div class="home">
    <v-layout row wrap>
      <preparation-form 
        :types="filteredTypes"
        :amounts="filteredAmounts"

        @change-type="changeType"
        @change-amount="changeAmount"
      />
    </v-layout>
    <v-layout row wrap justify-space-around fill-height>
      <v-flex xs6 md4 lg3 grow pa-3
        v-for="preparation in filteredPreparations"
        :key="preparation.id"
      >
        <custom-card
          :preparation="preparation"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import preparations from '@/assets/preparations'
import PreparationForm from '@/components/PreparationForm'
import CustomCard from '@/components/CustomCard'

import { filteredItems } from '@/assets/helpers'
export default {
  name: 'home',
  data() {
    return {
      preparations: [],
      filteredPreparations: [],
      filteredTypes: [],
      filteredAmounts: [],
    }
  },
  components: {
    CustomCard,
    PreparationForm
  },
  methods: {
    changeType(val) {
      console.log(val)

      val === 'all' ?
        this.filteredPreparations = this.preparations :
        this.filteredPreparations = this.preparations.filter(el => {
          return el.name.indexOf(val) > -1 ? true : false
        })
    },
    changeAmount(val) {
      val === 'all' ?
        this.filteredPreparations = this.preparations :
        this.filteredPreparations = this.preparations.filter(el => {
          return el.amount.indexOf(val) > -1 ? true : false
        })
    },
  },
  mounted() {
    this.preparations = preparations;
    this.filteredPreparations = preparations;
    
    const types = this.preparations.map(el => {
      let pos = el.name.indexOf('–')
      return el.name.slice(pos +2).trim();
    })
    this.filteredTypes = filteredItems(types)

    const amounts = this.preparations.map(el => {
      return "" + parseInt(el.amount.replace(/\D+/g,""));
    })
    this.filteredAmounts = filteredItems(amounts)


    console.log(this.preparations)
  }
}
</script>
