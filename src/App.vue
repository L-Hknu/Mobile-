<template>
  <v-app id="inspire" light>

    <v-navigation-drawer
      v-model="drawerRight"
      fixed
      right
      clipped
      app
    >
      右侧栏
    </v-navigation-drawer>

    <v-toolbar
      color="light"
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>菜单</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>admin</v-toolbar-title>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>


    
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      class="light"
      
    >
      <v-toolbar flat class="light"> 
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="title" >
                  Oupport System
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0" v-for="(item, index) in menuList" :key="index">
        <v-list-tile v-if="!item.children" :to=item.path>
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title  class='font-weight-bold'>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group
          v-if="item.children"
        >
          <v-list-tile  slot="activator">
              <v-list-tile-action>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-title class='font-weight-bold'>
                 {{item.title}}
              </v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-for="(items, index) in item.children" :key="index" :to='items.path'>
              <v-list-tile-avatar>
                <v-icon>{{items.icon}}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-title class='font-weight-bold'>
                 {{items.title}}
              </v-list-tile-title >
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>


    <v-content>
        <router-view></router-view>
    </v-content>



    <v-navigation-drawer
      v-model="right"
      right
      temporary
      fixed
    ></v-navigation-drawer>
    <v-footer color="blue-grey" class="white--text" app>
      <span>酷泰丰科技</span>
      <v-spacer></v-spacer>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: false,
      left: false,
      menuList:[
       {
        title:'首页',path:'/',icon:'home'
       },
       {
        title:'终端管理', icon:'mobile_screen_share',
        children:[
          {title:'终端管理',path:'/terminal/terminal',icon:'mobile_screen_share'},
          {title:'在线用户管理',path:'/terminal/user',icon:'contact_phone'},
          {title:'终端提取日志',path:'/terminal/terminalLog',icon:'cloud_upload'}
        ]
       },
       {
        title:'设备管理',icon:'memory',
        children:[
          {title:'领科设备',path:'/equipment/lingke',icon:'device_hub'},
        ]
       },
       {
        title:'Simpool管理',icon:'grid_on',
        children:[
          {title:'Simpool管理',path:'/Simpool/Simpool',icon:'grid_on'},
          {title:'操作记录',path:'/Simpool/operationLog',icon:'description'},
        ]
       },
       {
        title:'SimCard管理',icon:'sim_card',
        children:[
          {title:'SimCard查询',path:'/simCard/simCardQuery',icon:'sim_card'},
          {title:'新增SimCard',path:'/simCard/addSimCard',icon:'note_add'},
          {title:'绑卡查询',path:'/simCard/cardInQuiry',icon:'crop_rotate'},
          {title:'不完整信息SIM卡管理',path:'/simCard/incomplete',icon:'broken_image'},
        ]
       },
       {
        title:'基础数据管理',icon:'pie_chart',
        children:[
          {title:'MCC管理',path:'/dataManage/mcc',icon:'gps_fixed'},
          {title:'运营商管理',path:'/dataManage/operator',icon:'people'},
          {title:'运营商网络参数管理',path:'/dataManage/parameter',icon:'signal_cellular_alt'},
          {title:'运营商套餐管理',path:'/dataManage/meal',icon:'business_center'},
          {title:'用户管理',path:'/dataManage/user',icon:'person_pin'},
          {title:'质量分计算规则',path:'/dataManage/rule',icon:'build'},
        ]
       },
       { title:'告警提示',path:'/',icon:'error_outline'},
       { title:'充值系统',path:'/',icon:'add_circle'}
      ]
    }),
    props: {
      source: String
    }
  }
</script>
<style lang="stylus">
.v-list
  padding 0 
.v-list--dense
  padding-bottom 0  
</style>
