<template>
  <v-card class="card">
    <v-card-title>
      <div class="title">
        <h3 class="headline">{{ preparation.name }}</h3>
        <p class="number">
          <span class="id">#</span>
          <span class="value">{{ preparation.id }}</span>
        </p>
      </div>
      <div>
        <h4>{{ preparation.lat_name }}</h4>
        <p>{{ preparation.amount }}</p>
        <p>{{ preparation.portion }}</p>
      </div>
    </v-card-title>
    <!-- <v-card-actions>
      <v-btn flat color="orange">Share</v-btn>
      <v-btn flat color="orange">Explore</v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  props: {
    preparation: Object
  }
}
</script>

<style lang="scss">
.title{
  position: relative;
  min-height: 7rem;
  width: 100%;

  .number{
    position: absolute;
    top: 0;
    right: 0;
    color: rgba(50, 50, 50, .2);
    font-size: 1.8rem;

    user-select: none;
    .value {
      font-size: 3rem;
      font-weight: bold;
    }
  }
}

.card {
  min-height: 18rem;
}
</style>
