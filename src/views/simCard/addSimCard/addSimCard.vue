
<template>
  <div>
    <v-tabs
      v-model="active"
      color="cyan"
      dark
      slider-color="yellow"
    >
      <v-tab>SIM卡基本信息</v-tab>
      <v-tab>APN配置</v-tab>
      <v-tab>CEIIList配置</v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-layout row wrap align-center justify-center>
              <v-flex d-flex xs12 sm6 md3><v-text-field   :counter="10" label="ICCID (*)" required ></v-text-field></v-flex>
              <v-flex d-flex xs12 sm6 md3><v-text-field   :counter="10" label="所属国家地区 (*)" required ></v-text-field></v-flex>
              <v-flex d-flex xs12 sm6 md3><v-text-field   :counter="10" label="运营商 (*)" required ></v-text-field></v-flex>
              <v-flex d-flex xs12 sm6 md3><v-text-field   :counter="10" label=" 运营商套餐 (*)" required ></v-text-field></v-flex>
              <v-flex d-flex xs12 sm6 md3><v-text-field   :counter="10" label="IMSI" required ></v-text-field></v-flex>
              <v-flex d-flex xs12 sm6 md3><v-text-field   :counter="10" label="手机号码" required ></v-text-field></v-flex>
              <v-flex d-flex xs12 sm6 md3><v-text-field   :counter="10" label="购买人" required ></v-text-field></v-flex>
              <v-flex d-flex xs12 sm6 md3><v-text-field   :counter="10" label="购买时间" required ></v-text-field></v-flex>
              <v-flex d-flex xs12 sm6 md3><v-text-field   :counter="10" label="PUK密码" required ></v-text-field></v-flex>
              <v-flex d-flex xs12 sm6 md3><v-text-field   :counter="10" label="虚拟IMEI" required ></v-text-field></v-flex>
              <v-flex d-flex xs12 sm6 md3><v-text-field   :counter="10" label="是否支持漫游" required ></v-text-field></v-flex>
              <v-flex d-flex xs12 sm6 md3><v-text-field   :counter="10" label="是否支持WiFi路由" required ></v-text-field></v-flex>
              <v-flex d-flex xs12 sm6 md3><v-text-field   :counter="10" label="是否激活" required ></v-text-field></v-flex>
              <v-flex d-flex xs12 sm6 md3><v-text-field   :counter="10" label="激活时间" required ></v-text-field></v-flex>
              <v-flex d-flex xs12 sm6 md3><v-text-field   :counter="10" label="是否支持一卡多国" required ></v-text-field></v-flex>
              <v-flex d-flex xs12 sm6 md3><v-text-field   :counter="10" label="是否可消费基础账户" required ></v-text-field></v-flex>
              <v-flex align-center d-flex xs12 sm6 md3 ><v-btn dark color="sim_card">确定</v-btn></v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>1231</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>213132</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: null
      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.flex 
  padding 10px
</style>
