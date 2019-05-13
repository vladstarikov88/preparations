<template>
  <div>
    <v-radio-group row
      v-model="radio_types" 
    >
      <v-radio 
        label="all" 
        value="all"
      />
      <v-radio 
        v-for="type in types"
        :key="type"
        :label="type" 
        :value="type"
      />
    </v-radio-group>

    <v-radio-group row
      v-model="radio_amount" 
    >
      <v-radio 
        label="all" 
        value="all"
      />
      <v-radio 
        v-for="amount in amounts"
        :key="amount"
        :label="amount" 
        :value="amount"
      />
    </v-radio-group>
  </div>
</template>

<script>
export default {
  props: {
    types: Array,
    amounts: Array,
  },
  data() {
    return {
      radio_types: 'all',
      radio_amount: 'all'
    }
  },
  watch: {
    'radio_types'(val) {
      this.$emit('set-type', val)
    },
    'radio_amount'(val) {
      this.$emit('set-amount', val)
    }
  }
}
</script>

<style>

</style>
