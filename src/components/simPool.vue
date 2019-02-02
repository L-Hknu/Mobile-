<template>
    <div id="myBar" style="width:100%; height:400px" ></div>  
</template>

<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {
        data1:[
          {name:'SimPool1',value:20},
          {name:'SimPool2',value:10},
          {name:'SimPool3',value:50},
          {name:'SimPool4',value:60},
          {name:'SimPool5',value:40},
          {name:'SimPool6',value:20},
          {name:'SimPool7',value:10},
        ],
        data2:[
          {name:'SimPool1',value:100},
          {name:'SimPool2',value:110},
          {name:'SimPool3',value:70},
          {name:'SimPool4',value:60},
          {name:'SimPool5',value:80},
          {name:'SimPool6',value:100},
          {name:'SimPool7',value:110},
        ],
        myBar:''
      }
    },
    created(){
    },
    mounted(){
      const that=this
      setTimeout(()=>{
        that.setBar()
      })
    },
    methods:{
      setBar(){
        this.myBar=echarts.init(document.querySelector('#myBar'))
        this.myBar.setOption({
          color:['#66cc99','#ff9966'],
          xAxis:{
            type:"category",
            nameRotate:180,
            data:['SimPool1',
            'SimPool2',
            'SimPool3',
            'SimPool4',
            'SimPool5',
            'SimPool6',
            'SimPool7'
            ],
           
          },
          toolbox:{
            show:true,
            feature : {
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
           }
          },
          calculable : true,
          tooltip : {
            trigger: 'item',
          },
          yAxis:{
            trigger: 'value',

          },
          dataZoom :[
            {
              type:'slider',
              start:0,
              end:50
            }
          ],
          legend:{
            icon:'pin',
            x:'8%',
            orient:"vertical",
            data:['使用中sim卡','待使用sim卡']
          },
          series:[
            {
              name:'使用中sim卡',
              type:'bar',
              data:this.data1,
              barWidth:'20%',
              zlevel:1,
              markLine:{
                data:[{type:'average',name:'平均数'}]
              }
            },
            {
              name:'待使用sim卡',
              type:'bar',
              data:this.data2,
              barWidth:'20%',
              zlevel:0,
              markLine:{
                data:[{type:'average',name:'平均数'}]
              }
            }
          ]
        })

      } 
    }
  }
</script>

<style scoped>

</style>