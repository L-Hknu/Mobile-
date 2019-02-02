<template>
<v-card-text row wrap>
    <v-container grid-list-xl>
      <v-layout v-bind="binding" v-for="(item, index) in tableData" :key="index" class="table">
        <v-flex py-0 v-for="(value,key) in item" >
            <v-list-tile>
              <v-list-tile-content> {{key}}:</v-list-tile-content>
              <v-list-tile-content style="align-end">{{value}}</v-list-tile-content>
            </v-list-tile>
          </v-flex>
      </v-layout>
    </v-container>
</v-card-text>
</template>

<script>
  export default {
    props: {
      tableData: Array
      
    },
    computed: {
      binding () {
       const binding = {}
        if (this.$vuetify.breakpoint.mdAndUp) {binding.row = true}
        else{binding.column = true}
        return binding
      }
    },
  }
</script>

<style lang="stylus" scoped>
.table 
  border 1px solid #ccc
</style>
