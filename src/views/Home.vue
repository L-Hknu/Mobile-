<template>
  <div class="home">
    <v-container grid-list-md  >
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md2 v-for="(item, index) in data" :key="index" v-bind="binding">
          <v-hover >
            <v-card
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 12 : 2}`"
            >
              <v-card-title>
                <v-card-actions >{{item.title}}</v-card-actions>
              </v-card-title>
              <v-card-text>

                <v-layout  align-start justify-space-around  reverse >
                    <v-icon :color='item.color' size=40>{{item.icon}}</v-icon>
                    <v-card-actions class="headline">{{item.num}}</v-card-actions>
                </v-layout>
              </v-card-text>
              <v-card-text>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex  d-flex xs12 sm12 md9>
          <v-card>
            <v-card-title>
                <v-list-tile class="grow">
                  <v-list-tile-avatar>
                    <v-icon color="#66ccff">perm_identity</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <span>在线用户实时数据地图</span>
                  </v-list-tile-content>
                </v-list-tile>
            </v-card-title>
            <v-card-text>
              <myMap></myMap>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex  d-flex xs12 sm12 md3>
          <v-card>
            <v-card-title>
                <v-list-tile class="grow">
                  <v-list-tile-avatar>
                    <v-icon color="#66cc99">grid_on</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <span>可用SIM卡地区</span>
                  </v-list-tile-content>
                </v-list-tile>
            </v-card-title>
            <v-card-text>
              qweiadjsaidpo 
            </v-card-text>            
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container  grid-list-md>
      <v-layout row wrap>
        <v-flex  d-flex xs12 sm12 md4>
          <v-card>
            <v-card-title>
                <v-list-tile class="grow">
                  <v-list-tile-avatar>
                    <v-icon color="#66ccff">perm_identity</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <span>终端用户</span>
                  </v-list-tile-content>
                  <v-btn icon>更多</v-btn>
                </v-list-tile>
            </v-card-title>
            <v-card-text>
              qweiadjsaidpo 
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex  d-flex xs12 sm12 md8>
          <v-card>
            <v-card-title>
                <v-list-tile class="grow">
                  <v-list-tile-avatar>
                    <v-icon color="#66cc99">grid_on</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <span>SIMPool</span>
                  </v-list-tile-content>
                  <v-btn icon>更多</v-btn>
                </v-list-tile>
            </v-card-title>
            <v-card-text>
              qweiadjsaidpo 
            </v-card-text>            
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  
</template>

<script>
// @ is an alias to /src

import myMap from '@/components/myMap.vue';
export default {
  components:{
    myMap
  },
  data() {
    return {
      drawerRight: null,
      data:[
        {title:'SIM卡总数',num:18,icon:'sim_card',color:'sim_card'},
        {title:'当前在线用户数',num:18,icon:'perm_identity',color:'perm_identity'},
        {title:'在线的SIMPool数量',num:18,icon:'sim_card',color:'sim_card1'},
        {title:'待使用的SIM卡数量',num:18,icon:'sim_card',color:'sim_card2'},
        {title:'禁用的SIM卡数量',num:18,icon:'no_sim',color:'no_sim'},
        {title:'损坏的SIM卡数量',num:18,icon:'signal_cellular_no_sim',color:'signal_cellular_no_sim'},
      ]
    }
  },
  computed: {
    binding () {
      const binding = {}
      if (this.$vuetify.breakpoint.mdAndUp) binding.column = true
      return binding
    }
  }
}
</script>
<style lang="stylus">

</style>

