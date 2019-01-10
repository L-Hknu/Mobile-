<template>
    <div id="mymap" style="width:100%; height:500px"></div>  
</template>

<script>
 import echarts from 'echarts'
 import world from 'echarts/map/js/world.js'
  export default {
    data() {
      return {
        data:[
          {name:'北京',value:150},
          {name:'郑州',value:100},
          {name:'乌鲁木齐',value:50},
          {name:'三门峡',value:205},
          {name:'深圳',value:150},

        ],
        geoCoordMap:{
          '北京':[116.46,39.92],
          '郑州':[113.65,34.76],
          '乌鲁木齐':[87.68,43.77],
          '三门峡':[111.19,34.76],
          '深圳':[114.07,22.62],
        },

      }
    },
    mounted(){
      this.mymap()
    },
    methods:{
      convertData(data){
        let res=[]
        data.forEach((item,index) => {
          let geoCoord =this.geoCoordMap[item.name];
          if (geoCoord) {
            res.push({
              name:item.name,
              value:geoCoord.concat(item.value)
            })
          }
        });
        return res
      },
      mymap(){
        let mymap=echarts.init(document.querySelector('#mymap'))
        mymap.setOption({
          title:{
            show:false
          },
          tooltip : {
            trigger: 'item',
            formatter:function(val){
              let value=`
              ${val.seriesName}
              ${val.data.name}:${val.data.value[2]}`
              return value
            },
            textStyle:{
                color:'#272727'
              }
          },
          geo: {
              map:'world',
              center: [104.114129, 37.550339],
              zoom: 5,
              roam: true,
              itemStyle: {
                areaColor:'#f3f3f3',
                borderColor:'#73aaa3',
                borderWidth:1,
              },
              emphasis:{
                label:{
                  color:'#293c55'
                },
                itemStyle:{
                  areaColor:'#73aaa3',
                }
              }
             },
          series:[
            {
              name: '实时数据',
              type: 'scatter',
              coordinateSystem: 'geo',
              data:this.convertData(this.data),
              symbolSize: function (val) {
                  return val[2] / 10;
              },
              label: {
                formatter: '{b}',
                position: 'right',
                show: true,
                color:'#000'
              },
              itemStyle: {
                color: '#6699ff'
              }
            },
            {
              name: 'Top 3',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              
              data: this.convertData(this.data.sort(function (a, b) {
                  return b.value - a.value;
              }).slice(0, 3)),
              symbolSize: function (val) {
                  return val[2] / 10;
              },
              //数据过滤
              showEffectOn: 'render',
              //特效配置
              itemStyle: {
                color: '#2299ff'
              },
              rippleEffect: {
                  brushType: 'stroke'
              },
              //涟漪效果
              hoverAnimation: true,
              //动画效果
              label: {
                formatter: '{b}',
                position: 'right',
                show: true,
                color:'#000'
              },
              //标题
              itemStyle: {
                normal: {
                    color: '#2299ff',
                    shadowBlur: 10,
                    borderWidth:1,
                    shadowColor: '#2299ff',
                }
              },
              //图形样式
              zlevel: 1
            }
          ]
        })
      }
    }
  }
</script>

<style scoped>

</style>