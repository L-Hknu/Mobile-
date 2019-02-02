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
      {id:0,iccid:'89560900000133544112',imsi:'730090013354411',position:0,state:0,cardState:'未分配',time:'2018-06-11 18:52:58',name:'Novator Partners'},
      {id:0,iccid:'89560900000133544112',imsi:'730090013354411',position:0,state:1,cardState:'未分配',time:'2018-06-11 18:52:58',name:'Novator Partners'},
      {id:0,iccid:'89560900000133544112',imsi:'730090013354411',position:0,state:0,cardState:'未分配',time:'2018-06-11 18:52:58',name:'Novator Partners'},
      {id:0,iccid:'89560900000133544112',imsi:'730090013354411',position:0,state:1,cardState:'未分配',time:'2018-06-11 18:52:58',name:'Novator Partners'},
      {id:0,iccid:'89560900000133544112',imsi:'730090013354411',position:0,state:1,cardState:'未分配',time:'2018-06-11 18:52:58',name:'Novator Partners'},
      {id:0,iccid:'89560900000133544112',imsi:'730090013354411',position:0,state:0,cardState:'未分配',time:'2018-06-11 18:52:58',name:'Novator Partners'},
      {id:0,iccid:'89560900000133544112',imsi:'730090013354411',position:0,state:0,cardState:'未分配',time:'2018-06-11 18:52:58',name:'Novator Partners'},
      {id:0,iccid:'89560900000133544112',imsi:'730090013354411',position:0,state:0,cardState:'未分配',time:'2018-06-11 18:52:58',name:'Novator Partners'},
      {id:0,iccid:'89560900000133544112',imsi:'730090013354411',position:0,state:0,cardState:'未分配',time:'2018-06-11 18:52:58',name:'Novator Partners'},
      {id:0,iccid:'89560900000133544112',imsi:'730090013354411',position:0,state:0,cardState:'未分配',time:'2018-06-11 18:52:58',name:'Novator Partners'},
      {id:0,iccid:'89560900000133544112',imsi:'730090013354411',position:0,state:2,cardState:'未分配',time:'2018-06-11 18:52:58',name:'Novator Partners'},
      {id:0,iccid:'89560900000133544112',imsi:'730090013354411',position:0,state:2,cardState:'未分配',time:'2018-06-11 18:52:58',name:'Novator Partners'},
      {id:0,iccid:'89560900000133544112',imsi:'730090013354411',position:0,state:2,cardState:'未分配',time:'2018-06-11 18:52:58',name:'Novator Partners'},
      {id:0,iccid:'89560900000133544112',imsi:'730090013354411',position:0,state:2,cardState:'未分配',time:'2018-06-11 18:52:58',name:'Novator Partners'},
      {id:0,iccid:'89560900000133544112',imsi:'730090013354411',position:0,state:0,cardState:'未分配',time:'2018-06-11 18:52:58',name:'Novator Partners'},
      {id:0,iccid:'89560900000133544112',imsi:'730090013354411',position:0,state:0,cardState:'未分配',time:'2018-06-11 18:52:58',name:'Novator Partners'},

    ],
    state:[
      {state:0,name:'正常待使用',color:'#ff9955'},
      {state:1,name:'正在被使用',color:'#66cc33'},
      {state:2,name:'不可用',color:'#dd4b39'},
    ],
    valid: false,
    firstname: '',
    lastname: '',
    menuList:[
      {title:"查看"},
      {title:"启用"},
      {title:"修改"},
      {title:"绑卡/解绑"},
      {title:"分卡历史"},
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