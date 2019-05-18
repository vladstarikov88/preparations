<template>
  <v-card 
    class="card"
  >
    <v-card-title>
      <div 
        class="check-block"
        :class="{hoverable: !isVisible}"
        @click="checkMyself"
      >

      </div>
      <div class="title">
        <h3 class="headline">{{ preparation.name }}</h3>
        
        <template v-if="isVisible">
          <h4 class="lat-name">{{ preparation.lat_name }}</h4>
          <p class="number">
            <span class="id">#</span>
            <span class="value">{{ preparation.id }}</span>
          </p>
        </template>
        <template v-else>
          <h4 class="lat-name">???</h4>
        </template>
      </div>
      <div v-if="isVisible">
        <p class="additional-info">{{ preparation.amount }}</p>
        <p class="additional-info">{{ preparation.portion }}</p>
      </div>
      <div v-else>
        <p class="additional-info">???</p>
        <p class="additional-info">???</p>
      </div>
    </v-card-title>

    <v-card-actions v-if="isVisible">
      <v-btn flat 
        color="error"
        @click="wrong"
      >Я тупая</v-btn>
      <v-btn flat 
        color="green"
        @click="success"
      >Я самая умная и красивая</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    preparation: Object,
    isVisible: Boolean
  },
  methods: {
    checkMyself() {
      this.$emit('check-myself')
    },
    success() {
      this.$emit('success')
    },
    wrong() {
      this.$emit('wrong', this.preparation.id)
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

/deep/ .v-card__title {
  position: relative;
  z-index: 1;
}

.check-block {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
}
.hoverable {
  &:hover {
    cursor: pointer;
  }
}
</style>
