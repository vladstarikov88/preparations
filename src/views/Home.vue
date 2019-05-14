<template>
  <div class="home">
    <v-layout row wrap>
      <preparation-form 
        :types="types"
        :amounts="amounts"

        @set-type="setType"
        @set-amount="setAmount"
      />
    </v-layout>
    <v-layout row wrap justify-space-around fill-height>
      
      <template v-if="filteredPreparations && filteredPreparations.length">
        <v-flex xs6 md4 lg3 grow pa-3
          v-for="preparation in filteredPreparations"
          :key="preparation.id"
        >
          <custom-card
            :preparation="preparation"
          />
        </v-flex>
      </template>

      <template v-else>
        <v-flex xs12>
          <not-found />
        </v-flex>
      </template>

    </v-layout>
  </div>
</template>

<script>
import preparations from '@/assets/preparations'
import PreparationForm from '@/components/PreparationForm'
import CustomCard from '@/components/CustomCard'
import NotFound from '@/components/NotFound'

import { filteredItems } from '@/assets/helpers'
export default {
  name: 'home',
  data() {
    return {
      preparations: [],
      filteredPreparations: [],
      types: [],
      amounts: [],
      type: ' ',
      amount: ' ',
    }
  },
  components: {
    CustomCard,
    PreparationForm,
    NotFound
  },
  methods: {
    filterPreps(type = this.type, amount = this.amount) {
      
      this.filteredPreparations = this.preparations
        .filter(el => el.name.indexOf(type) > -1 ? true : false)
        .filter(el => el.amount.indexOf(amount) > -1 ? true : false)
    },
    setType(type) {
      this.type = type
      this.filterPreps();
    },
    setAmount(amount) {
      this.amount = amount
      this.filterPreps();
    },
  },
  mounted() {
    this.preparations = preparations;
    this.filterPreps();
    
    const types = this.preparations.map(el => {
      let pos = el.name.indexOf('–')
      return el.name.slice(pos +2).trim();
    })
    this.types = filteredItems(types)

    const amounts = this.preparations.map(el => {
      return parseInt(el.amount.replace(/\D+/g,""));
    })
    this.amounts = filteredItems(amounts)
    this.amounts = this.amounts
      .sort((a, b) => a - b)
      .map(el => "" + el)
  }
}
</script>
