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
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
      {id:0,'提取人':'ctf','终端账号':18925248025,Time:'2018-09-25 08:15:18',MEI:'911346459904095',state:0,},
 
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