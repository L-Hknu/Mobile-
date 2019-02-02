<template>
  <div>
    <v-card>
      <myTabel :tableData=data></myTabel>
    </v-card>
    <v-navigation-drawer
      :value="drawerRight"
      fixed
      right
      clipped
      app
    >
    <v-container  grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs4 md4 v-for="(item, index) in state" :key="index">
          <v-btn dark :color=item.color>
            {{item.name}}
          </v-btn>
        </v-flex>
      </v-layout> 
      <v-layout row wrap>
        <v-flex  d-flex xs12 md12>
            <v-text-field v-model="firstname" :rules="nameRules"  :counter="10" label="IMEI" required ></v-text-field>
        </v-flex>
        <v-flex  d-flex xs12 md12>
          <v-text-field  :counter="10" label="日期" required ></v-text-field>
        </v-flex>
        <v-flex  d-flex xs12 md12>
          <v-text-field  :counter="10" label="提取人" required ></v-text-field>
        </v-flex>
        <v-combobox :items="items"  label="状态" ></v-combobox>
        <v-flex d-flex xs12 md12>
        </v-flex>
        <v-footer  app d-flex>
          <v-layout row wrap>
              <v-btn dark color="sim_card" class="flex">
                查询
              </v-btn>
              <v-btn dark color="sim_card" class="flex">
                重置
              </v-btn>
          </v-layout> 

        </v-footer>
      </v-layout> 
    </v-container>
    </v-navigation-drawer>
    <v-dialog v-model="isShow" width="1000">

    </v-dialog>
  </div>
</template>

<script>
import *as listData from './data.js'
import myTabel from '@/components/table'

export default {
  components:{
    myTabel
  },
  data(){
    return listData.getData()
  },
  computed:{
    drawerRight(){
      return this.$store.getters.drawerRight
    },
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
<style lang="stylus">
// .child-flex>*, .flex
//   max-width 310px
</style>

