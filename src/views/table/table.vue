<template>
  <div>
    <v-container grid-list-md>
      <v-card>
        <v-data-table     
          :headers="headers"
          :items="data"
          class="elevation-1"

        >
          <template slot="items" slot-scope="props"> 
              <td v-for="(items, index) in headers" :key="index" >
                <Expand :key="items.value" :row="props.item" :render="expandRender" :index="index"></Expand>
              </td>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import *as listdata from './data.js'
import Expand from './expand.js'
export default {
  components:{
    Expand
  },
  data(){
    return listdata.getData()
  },
  computed:{

    binding () {
    const binding = {}
    if (this.$vuetify.breakpoint.mdAndUp) binding.column = false
    return binding
    },
  },
  created() {
  },
  methods: {
   
  },
  
}
</script>
<style lang="stylus" scoped>
.btnfoot
  padding-bottom  36px
.btn
  min-width 80px  
</style>


