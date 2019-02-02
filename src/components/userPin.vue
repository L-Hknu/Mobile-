<template>
  <div id="user" style="width:100%; height:400px"> </div>
</template>

<script>
 import echarts from 'echarts'
  export default {
    data() {
      return {
        userPie:'',
        data:[
          {name:'M网禁用用户',value:'112'},
          {name:'M网正常用户',value:'1002'},
          {name:'禁用注册用户',value:'600'},
          {name:'正常注册用户',value:'1002'},
        ]
      }
    },
    created(){
      
    },
    mounted(){
      const that=this
      
      setTimeout(()=>this.setPie())
    },
    methods:{
      setPie(){
        this.userPie=echarts.init(document.querySelector('#user'))
        this.userPie.setOption({
          title:{
            show:true,
          },
          tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} <br/>({d}%)"
              },
          color:['#dd4f43','#6699ff','#73aaa3','#ff9966'],
          legend:{
            icon:'pin',
            x:'8%',
            orient:"vertical",
            data:['M网禁用用户','M网正常用户','禁用注册用户','正常注册用户']
          },
          toolbox:{
                show:true,
                feature : {
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
               }
              },
          series:[
            { 
              
              type:'pie',
              name:'终端用户',
              radius:'70%',
              data:this.data,
              
              label:{
                 normal: {
                    show: true,
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontWeight: 'bold'
                    }
                }
              },
              labelLine:{
                smooth:true
              },
              markPoint:{
                symbol:'circle'
              },
              


            }
          ]
        })
      }
    }
  }
</script>
<style lang="stylus" scoped>

</style>
