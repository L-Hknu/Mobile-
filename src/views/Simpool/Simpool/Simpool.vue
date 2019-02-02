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
                     simpool{{item.id}}
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
                  <v-list-tile-content>MAC地址</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{item.macip}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>simpool版本</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{item.id}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>插卡比例</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{item.sum}}/256</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>位置</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{item.position}}</v-list-tile-content>
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
            <v-text-field v-model="firstname" :rules="nameRules"  :counter="10" label="Mac地址" required ></v-text-field>
        </v-flex>
        <v-flex  d-flex xs12 md12>
          <v-text-field  :counter="10" label="SimPool名称" required ></v-text-field>
        </v-flex>
        <v-combobox :items="items"  label="是否禁用" ></v-combobox>
        <v-combobox :items="items"  label="是否在线" ></v-combobox>
        <v-flex d-flex xs12 md12>
        </v-flex>
        <v-flex  d-flex xs12 md12>
          <v-text-field  :counter="10" label="所在位置" required ></v-text-field>
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
          return '#ff9955'
          break;
        case 1:
          return '#66cc33'
          break;
        case 2:
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

