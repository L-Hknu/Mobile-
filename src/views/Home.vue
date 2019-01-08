<template>
  <div class="home">
    <v-container>
      <v-flex xl2 xs6>
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
          >
            <v-card-title>
              <span class="headline">Cafe Badilico</span>
            </v-card-title>
            <v-card-text>
              <v-layout  align-start justify-space-around  reverse >
              <v-icon>info</v-icon>
              <span class="headline">Cafe Badilico</span>
              </v-layout>
            </v-card-text>
            <v-card-text>
              <span class="headline"></span>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
    </v-container>
  </div>
  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  data() {
    return {
      drawerRight: null,
      data:[
        {title:'SIM卡总数',num:18,icon:'121',color:''},
        {title:'当前在线用户数',num:18,icon:'121',color:''},
        {title:'在线的SIMPool数量',num:18,icon:'121',color:''},
        {title:'待使用的SIM卡数量',num:18,icon:'121',color:''},
        {title:'禁用的SIM卡数量',num:18,icon:'121',color:''},
        {title:'损坏的SIM卡数量',num:18,icon:'121',color:''},
      ]
    }
  },
}
</script>
