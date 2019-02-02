export function getData() {
  return{
    dialog:true,
    dateRangeOptions:{
    },
    isShow:false,
    items: [
        '是','否'
        
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
      {state:0,name:'在线',color:'#ff9955'},
      {state:1,name:'已离线',color:'#66cc33'},
      {state:2,name:'已禁用',color:'#99cccc'},
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
      v => !!v || '请输入用户名',
      v => v.length <= 10 || '用户名不能大于10位'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
  }
}