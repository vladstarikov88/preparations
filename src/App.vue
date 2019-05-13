<template>
  <div id="app">
    <v-app>
      <toolbar></toolbar>
      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
      <v-footer app></v-footer>
    </v-app>   
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
export default {
  components: {
    Toolbar
  }
}
</script>
