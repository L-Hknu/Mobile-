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
      color="indigo"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>


    
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      class="indigo"
      dark
    >
      <v-toolbar flat class="indigo"> 
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
          no-action
          sub-group
          value="true"
          v-if="item.children"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title  class='font-weight-bold'>{{item.title}}</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
          v-for="(itemChildren, index) in item.children" :key="index"
          :to=itemChildren.path
          >
            <v-list-tile-title class='font-weight-bold'>{{itemChildren.title}}</v-list-tile-title>
            <v-list-tile-action>
              <v-icon >{{itemChildren.icon}}</v-icon>
            </v-list-tile-action>
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
        title:'首页',path:'/'
       },
       {
        title:'终端管理',icon:'dashboard',
        children:[
          {title:'终端管理',path:'/terminal/terminal',icon:'affiliatetheme'},
          {title:'在线用户管理',path:'/terminal/user',icon:'dashboard'},
          {title:'终端提取日志',path:'/terminal/terminalLog',icon:'dashboard'}
        ]
       },
       {
        title:'设备管理',icon:'dashboard',
        children:[
          {title:'领科设备',path:'/equipment/lingke',icon:'dashboard'},
        ]
       },
       {
        title:'Simpool管理',icon:'dashboard',
        children:[
          {title:'Simpool管理',path:'/Simpool/Simpool',icon:'dashboard'},
          {title:'操作记录',path:'/Simpool/operationLog',icon:'dashboard'},
        ]
       },
       {
        title:'SimCard管理',icon:'dashboard',
        children:[
          {title:'SimCard查询',path:'/simCard/simCardQuery',icon:'dashboard'},
          {title:'新增SimCard',path:'/simCard/addSimCard',icon:'dashboard'},
          {title:'绑卡查询',path:'/simCard/cardInQuiry',icon:'dashboard'},
          {title:'不完整信息SIM卡管理',path:'/simCard/incomplete',icon:'dashboard'},
        ]
       },
       {
        title:'基础数据管理',icon:'dashboard',
        children:[
          {title:'MCC管理',path:'/dataManage/mcc',icon:'dashboard'},
          {title:'运营商管理',path:'/dataManage/operator',icon:'dashboard'},
          {title:'运营商网络参数管理',path:'/dataManage/parameter',icon:'dashboard'},
          {title:'运营商套餐管理',path:'/dataManage/meal',icon:'dashboard'},
          {title:'用户管理',path:'/dataManage/user',icon:'dashboard'},
          {title:'质量分计算规则',path:'/dataManage/rule',icon:'dashboard'},
        ]
       },
       { title:'告警提示',path:'/',icon:'dashboard'},
       { title:'充值系统',path:'/',icon:'dashboard'}
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
