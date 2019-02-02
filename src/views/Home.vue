<template>
  <div>
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
      <v-layout>
        <v-flex  d-flex xs12 sm12 md12>
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

      </v-layout>
    </v-container>
    <v-container  grid-list-md>
      <v-layout row wrap>
        <v-flex  d-flex xs12 sm12 md8>
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
              <User></User>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex  d-flex xs12 sm12 md4>
          <v-card width='70%'>
            <v-card-title >
                <v-list-tile class="grow">
                  <v-list-tile-avatar>
                    <v-icon color="#66cc99">grid_on</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <span>可用SIM卡地区</span>
                  </v-list-tile-content>
                </v-list-tile>
            </v-card-title>

            <v-card-text class="scroll-y">
              <v-list>
                <v-list-tile>
                  <v-list-tile-content>可用MCC地区</v-list-tile-content>
                  <v-list-tile-action>可用的SIM卡数量</v-list-tile-action>

                </v-list-tile>
              </v-list>
              <v-container style="max-height:400px" class="scroll-y">
                <v-list dense v-for="(item, index) in data2" :key="index"> 
                  <v-list-tile>
                    <v-list-tile-content>{{item.name}}</v-list-tile-content>
                    <v-list-tile-action>{{item.value}}</v-list-tile-action>
                  </v-list-tile>
                </v-list>
              </v-container>
            </v-card-text>            
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md>
      <v-layout>
        <v-flex  d-flex xs12 sm12 md12>
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
              <simPool></simPool>
            </v-card-text>            
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  
</template>

<script>
import myMap from '@/components/myMap1.vue';
import User from '@/components/userPin.vue';
import simPool from '@/components/simPool.vue';
import { DateRange } from 'vuetify-daterange-picker';
import 'vuetify-daterange-picker/dist/vuetify-daterange-picker.css';
import *as listData from './data.js'
export default {
  components:{
    myMap,
    User,
    simPool,
  },
  data() {
    return listData.getData()
  },
  watch:{

  },
  computed: {
    binding () {
      const binding = {}
      if (this.$vuetify.breakpoint.mdAndUp) binding.column = true
      return binding
    },
  }
}
</script>
<style lang="stylus" scoped>
.container
  padding 12px 24px 0px 24px
.scroll-y
  margin-top -10px
  margin-bottom 24px
</style>

