<template>
  <div>
    <div class="fitler-group">
      <h3 class="fitler-group-title">Фильтрация по <strong>типам</strong> препаратов</h3>
      <v-radio-group row
        v-model="radio_types" 
        class="radio-group"
      >
        <v-radio 
          label="Все типы" 
          value=" "
        />
        <v-radio 
          v-for="type in types"
          :key="type"
          :label="type" 
          :value="type"
        />
      </v-radio-group>
    </div>


    <div class="fitler-group">
      <h3 class="fitler-group-title">Фильтрация по <strong>колличеству</strong></h3>
      <v-radio-group row
        v-model="radio_amount" 
        class="radio-group"
      >
        <v-radio 
          label="Всё" 
          value=" "
        />
        <v-radio 
          v-for="amount in amounts"
          :key="amount"
          :label="amount" 
          :value="amount"
        />
      </v-radio-group>
    </div>
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
      radio_types: ' ',
      radio_amount: ' '
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

<style lang="scss" scoped>
.fitler-group{
  margin-left: 1rem;
  &-title {
    font-weight: normal;
  }
  .radio-group {
    margin-top: 0;
  }
}
</style>
