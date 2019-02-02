<template>
      <v-card min-height=600 >
        <v-window v-show="isShow" v-model="onboarding"  height="200">
            <v-window-item :value="0" >
              <v-card-title class="justify-center">M网信息</v-card-title>
               <v-divider></v-divider>
              <v-card-text>
                <v-list-tile v-for="(item, index) in data.M" :key="index">
                  <v-list-tile-content>{{item.key}}</v-list-tile-content>
                  <v-list-tile-content calss='align-end'>{{item.value}}</v-list-tile-content>
                </v-list-tile>
              </v-card-text>
            </v-window-item>
            <v-window-item :value="1">
              <v-card-title class="justify-center">
                G网信息
              </v-card-title>
               <v-divider></v-divider>
              <v-card-text>
                <v-list-tile v-for="(item, index) in data.G" :key="index"> 
                  <v-list-tile-content>{{item.key}}</v-list-tile-content>
                  <v-list-tile-content calss='align-end'>{{item.value}}</v-list-tile-content>
                </v-list-tile>
              </v-card-text>
            </v-window-item>
            <v-window-item :value="2">
              <v-card-title class="justify-center">
                搜网信息
              </v-card-title>
              <v-divider></v-divider>
              <myTabel :tableData=table></myTabel>
  
            </v-window-item>
            <v-window-item :value="3">
              <v-card-title class="justify-center">
                账户信息
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-list-tile v-for="(item, index) in data.S" :key="index"> 
                  <v-list-tile-content>{{item.key}}</v-list-tile-content>
                  <v-list-tile-content calss='align-end'>{{item.value}}</v-list-tile-content>
                </v-list-tile>
              </v-card-text>

            </v-window-item>
            <v-window-item :value="4">
              <v-card-title class="justify-center">
                调卡历史记录
              </v-card-title>
              <v-divider></v-divider>
               <myTabel :tableData=data.D></myTabel>   
            </v-window-item>
            <v-window-item :value="5">
              <v-card-title class="justify-center">
                登录历史记录
              </v-card-title>
              <v-divider></v-divider>
               <myTabel :tableData=data.L></myTabel>   
            </v-window-item>
            
        </v-window>

        <v-card-actions class="justify-space-between foot" >
          <v-btn flat  @click="prev" >
            <v-icon>chevron_left</v-icon>
          </v-btn>
          <!-- <v-item-group v-model="onboarding"  class="text-xs-center" mandatory >
            <v-item v-for="n in length" :key="`btn-${n}`">
              <v-btn slot-scope="{ active, toggle }" :input-value="active"  icon  @click="toggle" >
                <v-icon small >brightness_1</v-icon>
              </v-btn>
            </v-item>
          </v-item-group> -->
          <v-btn flat @click="next" >
            <v-icon>chevron_right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>  
</template>

<script>
  import *as listData from './data.js'
  import myTabel from '@/components/table'
  export default {
    components:{
      myTabel
    },
    computed: {
      binding () {
       const binding = {}
        if (this.$vuetify.breakpoint.mdAndUp) {binding.row = true}
        else{binding.column = true}
        return binding
      }
    },
    props: {
      id: {
        type: Number,
        default:1000 
      },
      isShow:{
        type:Boolean,
        default:true
      }
    },
    data(){
      
      return  listData.getData()
    },
    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      }
    }
  }
</script>

<style lang="stylus" scoped>
.foot
  position absolute
  display flex
  top 0
  width 100%
</style>
