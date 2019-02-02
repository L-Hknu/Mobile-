<template>
  <div>
    <v-container grid-list-md>
        <v-layout row wrap justify-space-between >
          <v-flex d-flex v-for="(item, index) in data" :key="index" v-bind="binding" >
            <v-hover>
              <v-card
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 12 : 2}`"
              
            >
              <v-responsive primary-title>
                <v-toolbar dark dense flat :color="tileColor(item.state)">
                  <v-toolbar-title>
                    {{item.name}}
                  </v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-menu offset-y  nudge-left=70>
                    <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
                    <v-list>
                        <v-list-tile v-for="(item, index) in menuList" :key="index" @click.stop=""  >
                          {{item.title}}
                        </v-list-tile>
                    </v-list>

                  </v-menu>
                </v-toolbar>
              </v-responsive>
              <v-divider></v-divider>
              <v-card-text @click.stop="isShow=true">
                <v-list-tile>
                  <v-list-tile-content>IMSI:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{item.imsi}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                <v-list-tile-content>ICCID:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{item.iccid}}</v-list-tile-content>
                </v-list-tile>
                
                <v-list-tile>
                <v-list-tile-content>卡状态:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{item.cardState}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                <v-list-tile-content>插卡位置:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{item.position}}</v-list-tile-content>
                </v-list-tile>
                
                <v-list-tile>
                  <v-list-tile-content>手机号:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{item.id}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>基础账户:{{item.id}}</v-list-tile-content>
                  <v-list-tile-content class="align-end">账户详情</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>到期时间:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{item.time}}</v-list-tile-content>
                </v-list-tile>
              </v-card-text>
            </v-card>
            </v-hover>
          </v-flex>
        </v-layout> 
    </v-container>
    <v-navigation-drawer
      :value="drawerRight"
      fixed
      right
      clipped
      app
    >
    <v-container  grid-list-md class="btnfoot">
      <v-layout row wrap>
        <v-flex d-flex xs4 md4 v-for="(item, index) in state" :key="index">
          <v-btn dark :color=item.color class="btn">
            {{item.name}}
          </v-btn>
        </v-flex>
        
      </v-layout> 
      <v-layout row wrap>
        <v-flex  d-flex xs12 md12>
            <v-text-field v-model="firstname" :rules="nameRules"  :counter="10" label="Mac地址" required ></v-text-field>
        </v-flex>
        <v-combobox :items="items"  label="所属国家地区" ></v-combobox>
        <v-combobox :items="items"  label="运营商" ></v-combobox>
        <v-flex  d-flex xs12 md12>
          <v-text-field  :counter="10" label="ICCID" required ></v-text-field>
        </v-flex>
        <v-flex  d-flex xs12 md12>
          <v-text-field  :counter="10" label="IMSI" required ></v-text-field>
        </v-flex>
        <v-combobox :items="items"  label="是否禁用" ></v-combobox>
        <v-combobox :items="items"  label="是否损坏" ></v-combobox>
        <v-combobox :items="items"  label="是否激活" ></v-combobox>
        <v-combobox :items="items"  label="是否就绪" ></v-combobox>
        <v-combobox :items="items"  label="是否使用" ></v-combobox>
        <v-combobox :items="items"  label="SIMPool" ></v-combobox>
        <v-layout row wrap  class='btnfoot'>
          <v-flex d-flex xs4 md4>
            <v-btn  dark color="sim_card" class="flex btn"> 查询 </v-btn>
          </v-flex>
          <v-flex d-flex xs4 md4>
            <v-btn  dark color="sim_card" class="flex btn">重置</v-btn>
          </v-flex>
          <v-flex d-flex xs4 md4>
            <v-btn  dark color="sim_card" class="flex btn">
              导入
            </v-btn>
          </v-flex>
        </v-layout> 
      </v-layout> 
    </v-container>
    </v-navigation-drawer>
    <v-dialog v-model="isShow" width="1000">

      <addSimCard></addSimCard>
    </v-dialog>
  </div>
</template>
<script>
import addSimCard from './addSimCard.vue'
import *as listdata from './data.js'
export default {
  components:{
    addSimCard
  },
  data(){
    return listdata.getData()
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
    tileColor(state) {
      switch (state) {
        case 0:
          return '#ff9955'
          break;
        case 1:
          return '#66cc33'
          break;
        case 2:
          return '#dd4b39'
          break;
      }
    }
  },
  
}
</script>
<style lang="stylus" scoped>
.btnfoot
  padding-bottom  36px
.btn
  min-width 80px  
</style>


