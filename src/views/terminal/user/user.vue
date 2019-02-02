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
                     {{item.phone}}({{item.name}})
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
                  <v-list-tile-content>登录IP</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{item.ip}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>当前位置</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{item.position}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>登录时间</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{item.time}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>IMEI</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{item.IMEI}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>IMSI</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{item.IMSI}}</v-list-tile-content>
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
            <v-text-field v-model="firstname" :rules="nameRules"  :counter="10" label="用户名" required ></v-text-field>
        </v-flex>
        <v-flex  d-flex xs12 md12>
          <v-text-field  :counter="10" label="手机号" required ></v-text-field>
        </v-flex>
        <v-combobox
          :items="items"
          label="所属国家"
        ></v-combobox>
        <v-flex d-flex xs12 md12>
        </v-flex>
        <v-flex  d-flex xs12 md12>
          <v-text-field  :counter="10" label="IMEI" required ></v-text-field>
        </v-flex>
        <v-flex  d-flex xs12 md12>
          <v-text-field  :counter="10" label="IMSI编号" required ></v-text-field>
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

      <log></log>
    </v-dialog>
  </div>
</template>

<script>
import log from '@/views/terminal/user/log/log.vue'
import *as listdata from './data.js'
export default {
  components:{
    log
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
          return '#26c6da'
          break;
        case 1:
          return '#006699'
          break;
        case 2:
          return '#ff6699'
          break;
        case 3:
          return '#ff9955'
          break;
        case 4:
          return '#66cc33'
          break;
        case 5:
          return '#99cccc'
          break;
      }
    }
  },
  
}
</script>
<style lang="stylus">
// .child-flex>*, .flex
//   max-width 310px
</style>

