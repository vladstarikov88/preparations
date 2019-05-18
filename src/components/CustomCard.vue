<template>
  <v-card class="card">
    <v-card-title>
      <div class="title">
        <h3 class="headline">{{ preparation.name }}</h3>
        <h4 class="lat-name">{{ preparation.lat_name }}</h4>
        <p class="number">
          <span class="id">#</span>
          <span class="value">{{ preparation.id }}</span>
        </p>
      </div>
      <div>
        <p class="additional-info">{{ preparation.amount }}</p>
        <p class="additional-info">{{ preparation.portion }}</p>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat 
        color="green"
        @click="addToForgotList"
        v-if="type === 'common'"
      >Повторить</v-btn>
      <v-btn flat 
        color="error"
        @click="removeFromForgotList"
        v-if="type === 'forgotList'"
      >Удалить</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    preparation: Object,
    type: String
  },
  methods: {
    addToForgotList() {
      this.$emit('push-preparation', this.preparation.id)
    },
    removeFromForgotList() {
      this.$emit('remove-preparation', this.preparation.id)
    }
  }
}
</script>

<style scoped lang="scss">
.title{
  position: relative;
  min-height: 9rem;
  width: 100%;

  .headline{
    margin-bottom: 1rem;
  }

  .number{
    position: absolute;
    top: 0;
    right: 0;
    color: rgba(100, 100, 100, .2);
    font-size: 1.8rem;

    user-select: none;
    .value {
      font-size: 3rem;
      font-weight: bold;
    }
  }
}

.additional-info{
  font-size: 1.2rem;
}

.card {
  height: 100%;
}
</style>
