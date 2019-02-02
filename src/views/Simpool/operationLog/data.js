export function getData() {
  return{
    dialog:true,
    dateRangeOptions:{
    },
    isShow:false,
    items: [
        '记录生成','命令已下发','终端已接收命令','执行成功','WEB参数错误','执行失败'
        
    ],
    data: [
      {id:0,sum:'15',macip:' 00:11:c2:ff:ec:68',position:'中国',state:0},
      {id:1,sum:'15',macip:' 00:11:c2:ff:ec:68',position:'中国',state:1},
      {id:1,sum:'15',macip:' 00:11:c2:ff:ec:68',position:'中国',state:1},
      {id:1,sum:'15',macip:' 00:11:c2:ff:ec:68',position:'中国',state:1},
      {id:1,sum:'15',macip:' 00:11:c2:ff:ec:68',position:'中国',state:1},
      {id:1,sum:'15',macip:' 00:11:c2:ff:ec:68',position:'中国',state:1},
      {id:1,sum:'15',macip:' 00:11:c2:ff:ec:68',position:'中国',state:1},
      {id:1,sum:'15',macip:' 00:11:c2:ff:ec:68',position:'中国',state:1},
      {id:1,sum:'15',macip:' 00:11:c2:ff:ec:68',position:'中国',state:1},
      {id:1,sum:'15',macip:' 00:11:c2:ff:ec:68',position:'中国',state:1},
      {id:1,sum:'15',macip:' 00:11:c2:ff:ec:68',position:'中国',state:1},
      {id:2,sum:'15',macip:' 00:11:c2:ff:ec:68',position:'中国',state:2},
      {id:2,sum:'15',macip:' 00:11:c2:ff:ec:68',position:'中国',state:2},
      {id:2,sum:'15',macip:' 00:11:c2:ff:ec:68',position:'中国',state:2},
      {id:2,sum:'15',macip:' 00:11:c2:ff:ec:68',position:'中国',state:2},
 
    ],
    state:[
      {state:0,name:'提取记录',color:'#ff9955'},
      {state:1,name:'升级记录',color:'#66cc33'},
      {state:2,name:'重启记录',color:'#99cccc'},
    ],
    valid: false,
    firstname: '',
    lastname: '',
    menuList:[
      {title:"查看SIM卡"},
      {title:"禁用"},
      {title:"修改"},
      {title:"查看提取日志"},
      {title:"查看重启历史"},
      {title:"查看升级历史"},
      ],
    nameRules: [
      v => !!v || '请输入Mac地址',
      v => v.length <= 10 || 'Mac地址不能大于10位'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
  }
}