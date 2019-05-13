<template>
  <div class="home">
    <v-layout row wrap>
      <preparation-form></preparation-form>
    </v-layout>
    <v-layout row wrap justify-space-around fill-height>
      <v-flex xs4 grow pa-3
        v-for="preparation in preparations"
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
export default {
  name: 'home',
  data() {
    return {
      preparations: []
    }
  },
  components: {
    CustomCard,
    PreparationForm
  },
  mounted() {
    this.preparations = preparations;

    console.log(this.preparations)
  }
}
</script>
