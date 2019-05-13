<template>
  <div class="home">
    <v-layout row wrap>
      <preparation-form 
        :types="filteredTypes"
        :amounts="filteredAmounts"

        @set-type="setType"
        @set-amount="setAmount"
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
      type: '',
      amount: '',
    }
  },
  components: {
    CustomCard,
    PreparationForm
  },
  methods: {
    setType(type) {

      //сука тупой говнокод вонючий, какое же говно я пишу
      this.type = type;

      type === 'all'
      ? this.filteredPreparations = this.preparations
          .filter(el => el.amount.indexOf(this.amount) > -1 ? true : false)
      : this.filteredPreparations = this.preparations
          .filter(el => el.name.indexOf(this.type) > -1 ? true : false)
          .filter(el => el.amount.indexOf(this.amount) > -1 ? true : false)
    },
    setAmount(amount) {
      this.amount = amount;

      amount === 'all'
      ? this.filteredPreparations = this.preparations
          .filter(el => el.name.indexOf(this.type) > -1 ? true : false)
      : this.filteredPreparations = this.preparations
          .filter(el => el.amount.indexOf(this.amount) > -1 ? true : false)
          .filter(el => el.name.indexOf(this.type) > -1 ? true : false)
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
      return parseInt(el.amount.replace(/\D+/g,""));
    })
    this.filteredAmounts = filteredItems(amounts)
    this.filteredAmounts = this.filteredAmounts
      .sort((a, b) => a - b)
      .map(el => "" + el)
  }
}
</script>
