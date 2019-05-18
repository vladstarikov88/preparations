<template>
  <v-toolbar app>
    <v-toolbar-title 
      class="header-title"
    >Препараты</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat
        to="/"
      >Главная</v-btn>
      <v-btn flat
        to="/check"
      >Проверить себя</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header-title{
  margin-left: 1em !important;
}
</style>
