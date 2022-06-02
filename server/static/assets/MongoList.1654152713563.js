var W=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var N=(e,o,p)=>o in e?W(e,o,{enumerable:!0,configurable:!0,writable:!0,value:p}):e[o]=p,j=(e,o)=>{for(var p in o||(o={}))Z.call(o,p)&&N(e,p,o[p]);if(M)for(var p of M(o))x.call(o,p)&&N(e,p,o[p]);return e},q=(e,o)=>X(e,Y(o));import{m as C}from"./api.16541527135635.js";import{p as O}from"./api.16541527135633.js";import{A as T,q as ee,r as L,v as le,t as P,_ as G,E as B,b as s,d as h,e as S,g as l,w as a,h as _,F as I,j as A,k as U,B as i,o as ae,i as m,G as oe}from"./index.1654152713563.js";import{f as te}from"./format.1654152713563.js";import"./Api.1654152713563.js";const ie=T({name:"MongoEdit",props:{visible:{type:Boolean},projects:{type:Array},mongo:{type:[Boolean,Object]},title:{type:String}},setup(e,{emit:o}){const p=ee(null),d=L({dialogVisible:!1,projects:[],envs:[],form:{id:null,name:null,uri:null,project:null,projectId:null,envId:null,env:null},btnLoading:!1,rules:{projectId:[{required:!0,message:"\u8BF7\u9009\u62E9\u9879\u76EE",trigger:["change","blur"]}],envId:[{required:!0,message:"\u8BF7\u9009\u62E9\u73AF\u5883",trigger:["change","blur"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["change","blur"]}],uri:[{required:!0,message:"\u8BF7\u8F93\u5165mongo uri",trigger:["change","blur"]}]}});le(e,async c=>{d.dialogVisible=c.visible,d.projects=c.projects,c.mongo?(E(c.mongo.projectId),d.form=j({},c.mongo)):(d.envs=[],d.form={db:0})});const E=async c=>{d.envs=await O.projectEnvs.request({projectId:c})},z=c=>{for(let r of d.projects)r.id==c&&(d.form.project=r.name);d.form.envId=null,d.form.env=null,d.envs=[],E(c)},f=c=>{for(let r of d.envs)r.id==c&&(d.form.env=r.name)},y=async()=>{p.value.validate(c=>{if(c)C.saveMongo.request(d.form).then(()=>{B.success("\u4FDD\u5B58\u6210\u529F"),o("val-change",d.form),d.btnLoading=!0,setTimeout(()=>{d.btnLoading=!1},1e3),b()});else return B.error("\u8BF7\u6B63\u786E\u586B\u5199\u4FE1\u606F"),!1})},b=()=>{o("update:visible",!1),o("cancel"),setTimeout(()=>{p.value.resetFields(),d.form={}},200)};return q(j({},P(d)),{mongoForm:p,changeProject:z,changeEnv:f,btnOk:y,cancel:b})}}),ne={class:"dialog-footer"},se=i("\u53D6 \u6D88"),re=i("\u786E \u5B9A");function ue(e,o,p,d,E,z){const f=s("el-option"),y=s("el-select"),b=s("el-form-item"),c=s("el-input"),r=s("el-form"),v=s("el-button"),D=s("el-dialog");return h(),S("div",null,[l(D,{title:e.title,modelValue:e.dialogVisible,"onUpdate:modelValue":o[5]||(o[5]=u=>e.dialogVisible=u),"before-close":e.cancel,"close-on-click-modal":!1,width:"35%","destroy-on-close":!0},{footer:a(()=>[_("div",ne,[l(v,{onClick:o[4]||(o[4]=u=>e.cancel())},{default:a(()=>[se]),_:1}),l(v,{type:"primary",loading:e.btnLoading,onClick:e.btnOk},{default:a(()=>[re]),_:1},8,["loading","onClick"])])]),default:a(()=>[l(r,{model:e.form,ref:"mongoForm",rules:e.rules,"label-width":"65px"},{default:a(()=>[l(b,{prop:"projectId",label:"\u9879\u76EE",required:""},{default:a(()=>[l(y,{style:{width:"100%"},modelValue:e.form.projectId,"onUpdate:modelValue":o[0]||(o[0]=u=>e.form.projectId=u),placeholder:"\u8BF7\u9009\u62E9\u9879\u76EE",onChange:e.changeProject,filterable:""},{default:a(()=>[(h(!0),S(I,null,A(e.projects,u=>(h(),U(f,{key:u.id,label:`${u.name} [${u.remark}]`,value:u.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),l(b,{prop:"envId",label:"\u73AF\u5883",required:""},{default:a(()=>[l(y,{onChange:e.changeEnv,style:{width:"100%"},modelValue:e.form.envId,"onUpdate:modelValue":o[1]||(o[1]=u=>e.form.envId=u),placeholder:"\u8BF7\u9009\u62E9\u73AF\u5883"},{default:a(()=>[(h(!0),S(I,null,A(e.envs,u=>(h(),U(f,{key:u.id,label:`${u.name} [${u.remark}]`,value:u.id},null,8,["label","value"]))),128))]),_:1},8,["onChange","modelValue"])]),_:1}),l(b,{prop:"name",label:"\u540D\u79F0",required:""},{default:a(()=>[l(c,{modelValue:e.form.name,"onUpdate:modelValue":o[2]||(o[2]=u=>e.form.name=u),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0","auto-complete":"off"},null,8,["modelValue"])]),_:1}),l(b,{prop:"uri",label:"uri",required:""},{default:a(()=>[l(c,{type:"textarea",rows:2,modelValue:e.form.uri,"onUpdate:modelValue":o[3]||(o[3]=u=>e.form.uri=u),modelModifiers:{trim:!0},placeholder:"\u5F62\u5982 mongodb://username:password@host1:port1","auto-complete":"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue","before-close"])])}var de=G(ie,[["render",ue]]);const ge=T({name:"MongoList",components:{MongoEdit:de},setup(){const e=L({projects:[],list:[],total:0,currentId:null,currentData:null,query:{pageNum:1,pageSize:10,prjectId:null,clusterId:null},mongoEditDialog:{visible:!1,data:null,title:"\u65B0\u589Emongo"},databaseDialog:{visible:!1,data:[],title:"",statsDialog:{visible:!1,data:{},title:""}},collectionsDialog:{database:"",visible:!1,data:[],title:"",statsDialog:{visible:!1,data:{},title:""}},createCollectionDialog:{visible:!1,form:{name:""}}});ae(async()=>{D(),e.projects=(await O.projects.request({pageNum:1,pageSize:100})).list});const o=n=>{e.query.pageNum=n,D()},p=n=>{!n||(e.currentId=n.id,e.currentData=n)},d=async n=>{e.databaseDialog.data=(await C.databases.request({id:n})).Databases,e.databaseDialog.title="\u6570\u636E\u5E93\u5217\u8868",e.databaseDialog.visible=!0},E=async n=>{e.databaseDialog.statsDialog.data=await C.runCommand.request({id:e.currentId,database:n,command:{dbStats:1}}),e.databaseDialog.statsDialog.title=`'${n}' stats`,e.databaseDialog.statsDialog.visible=!0},z=async n=>{e.collectionsDialog.database=n,e.collectionsDialog.data=[],f(n),e.collectionsDialog.title=`'${n}' \u96C6\u5408`,e.collectionsDialog.visible=!0},f=async n=>{const V=await C.collections.request({id:e.currentId,database:n}),g=[];for(let k of V)g.push({name:k});e.collectionsDialog.data=g},y=async n=>{e.collectionsDialog.statsDialog.data=await C.runCommand.request({id:e.currentId,database:e.collectionsDialog.database,command:{collStats:n}}),e.collectionsDialog.statsDialog.title=`'${n}' stats`,e.collectionsDialog.statsDialog.visible=!0},b=async n=>{await C.runCommand.request({id:e.currentId,database:e.collectionsDialog.database,command:{drop:n}}),B.success("\u96C6\u5408\u5220\u9664\u6210\u529F"),f(e.collectionsDialog.database)},c=()=>{e.createCollectionDialog.visible=!0},r=async()=>{const n=e.createCollectionDialog.form;await C.runCommand.request({id:e.currentId,database:e.collectionsDialog.database,command:{create:n.name}}),B.success("\u96C6\u5408\u521B\u5EFA\u6210\u529F"),e.createCollectionDialog.visible=!1,e.createCollectionDialog.form={},f(e.collectionsDialog.database)},v=async()=>{try{await oe.confirm("\u786E\u5B9A\u5220\u9664\u8BE5mongo?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}),await C.deleteMongo.request({id:e.currentId}),B.success("\u5220\u9664\u6210\u529F"),e.currentData=null,e.currentId=null,D()}catch{}},D=async()=>{const n=await C.mongoList.request(e.query);e.list=n.list,e.total=n.total},u=(n=!1)=>{n?(e.mongoEditDialog.data=null,e.mongoEditDialog.title="\u65B0\u589Emongo"):(e.mongoEditDialog.data=e.currentData,e.mongoEditDialog.title="\u4FEE\u6539mongo"),e.mongoEditDialog.visible=!0},$=()=>{e.currentId=null,e.currentData=null,D()};return q(j({},P(e)),{search:D,handlePageChange:o,choose:p,showDatabases:d,showDatabaseStats:E,showCollections:z,showCollectionStats:y,onDeleteCollection:b,showCreateCollectionDialog:c,onCreateCollection:r,formatByteSize:te,deleteMongo:v,editMongo:u,valChange:$})}}),me=i("\u6DFB\u52A0"),ce=i("\u7F16\u8F91"),pe=i("\u5220\u9664"),fe={style:{float:"right"}},be=_("i",null,null,-1),De=i("\u6570\u636E\u5E93"),ve=i("stats"),Ce=i("\u96C6\u5408"),ye=i("\u65B0\u5EFA"),he=i("stats"),Ee=i("\u5220\u9664"),we=i("\u53D6 \u6D88"),ze=i("\u786E \u5B9A");function Fe(e,o,p,d,E,z){const f=s("el-button"),y=s("el-option"),b=s("el-select"),c=s("el-radio"),r=s("el-table-column"),v=s("el-link"),D=s("el-table"),u=s("el-pagination"),$=s("el-row"),n=s("el-card"),V=s("el-divider"),g=s("el-descriptions-item"),k=s("el-descriptions"),F=s("el-dialog"),R=s("el-popconfirm"),H=s("el-input"),J=s("el-form-item"),K=s("el-form"),Q=s("mongo-edit");return h(),S("div",null,[l(n,null,{default:a(()=>[l(f,{type:"primary",icon:"plus",onClick:o[0]||(o[0]=t=>e.editMongo(!0)),plain:""},{default:a(()=>[me]),_:1}),l(f,{type:"primary",icon:"edit",disabled:e.currentId==null,onClick:o[1]||(o[1]=t=>e.editMongo(!1)),plain:""},{default:a(()=>[ce]),_:1},8,["disabled"]),l(f,{type:"danger",icon:"delete",disabled:e.currentId==null,onClick:e.deleteMongo,plain:""},{default:a(()=>[pe]),_:1},8,["disabled","onClick"]),_("div",fe,[l(b,{modelValue:e.query.projectId,"onUpdate:modelValue":o[2]||(o[2]=t=>e.query.projectId=t),placeholder:"\u8BF7\u9009\u62E9\u9879\u76EE",filterable:"",clearable:""},{default:a(()=>[(h(!0),S(I,null,A(e.projects,t=>(h(),U(y,{key:t.id,label:`${t.name} [${t.remark}]`,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),l(f,{class:"ml5",onClick:e.search,type:"success",icon:"search"},null,8,["onClick"])]),l(D,{data:e.list,style:{width:"100%"},onCurrentChange:e.choose,stripe:""},{default:a(()=>[l(r,{label:"\u9009\u62E9",width:"60px"},{default:a(t=>[l(c,{modelValue:e.currentId,"onUpdate:modelValue":o[3]||(o[3]=w=>e.currentId=w),label:t.row.id},{default:a(()=>[be]),_:2},1032,["modelValue","label"])]),_:1}),l(r,{prop:"project",label:"\u9879\u76EE",width:""}),l(r,{prop:"env",label:"\u73AF\u5883",width:""}),l(r,{prop:"name",label:"\u540D\u79F0",width:""}),l(r,{prop:"uri",label:"\u8FDE\u63A5uri","min-width":"150","show-overflow-tooltip":""},{default:a(t=>[i(m(t.row.uri.split("@")[1]),1)]),_:1}),l(r,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4","min-width":"150"},{default:a(t=>[i(m(e.$filters.dateFormat(t.row.createTime)),1)]),_:1}),l(r,{prop:"creator",label:"\u521B\u5EFA\u4EBA"}),l(r,{label:"\u64CD\u4F5C",width:""},{default:a(t=>[l(v,{type:"primary",onClick:w=>e.showDatabases(t.row.id),plain:"",size:"small",underline:!1},{default:a(()=>[De]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","onCurrentChange"]),l($,{style:{"margin-top":"20px"},type:"flex",justify:"end"},{default:a(()=>[l(u,{style:{"text-align":"right"},onCurrentChange:e.handlePageChange,total:e.total,layout:"prev, pager, next, total, jumper","current-page":e.query.pageNum,"onUpdate:current-page":o[4]||(o[4]=t=>e.query.pageNum=t),"page-size":e.query.pageSize},null,8,["onCurrentChange","total","current-page","page-size"])]),_:1})]),_:1}),l(F,{width:"800px",title:e.databaseDialog.title,modelValue:e.databaseDialog.visible,"onUpdate:modelValue":o[6]||(o[6]=t=>e.databaseDialog.visible=t)},{default:a(()=>[l(D,{data:e.databaseDialog.data,size:"small"},{default:a(()=>[l(r,{"min-width":"130",property:"Name",label:"\u5E93\u540D"}),l(r,{"min-width":"90",property:"SizeOnDisk",label:"size"},{default:a(t=>[i(m(e.formatByteSize(t.row.SizeOnDisk)),1)]),_:1}),l(r,{"min-width":"80",property:"Empty",label:"\u662F\u5426\u4E3A\u7A7A"}),l(r,{"min-width":"80",label:"\u64CD\u4F5C"},{default:a(t=>[l(v,{type:"success",onClick:w=>e.showDatabaseStats(t.row.Name),plain:"",size:"small",underline:!1},{default:a(()=>[ve]),_:2},1032,["onClick"]),l(V,{direction:"vertical","border-style":"dashed"}),l(v,{type:"primary",onClick:w=>e.showCollections(t.row.Name),plain:"",size:"small",underline:!1},{default:a(()=>[Ce]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(F,{width:"700px",title:e.databaseDialog.statsDialog.title,modelValue:e.databaseDialog.statsDialog.visible,"onUpdate:modelValue":o[5]||(o[5]=t=>e.databaseDialog.statsDialog.visible=t)},{default:a(()=>[l(k,{title:"\u5E93\u72B6\u6001\u4FE1\u606F",column:3,border:"",size:"small"},{default:a(()=>[l(g,{label:"db","label-align":"right",align:"center"},{default:a(()=>[i(m(e.databaseDialog.statsDialog.data.db),1)]),_:1}),l(g,{label:"collections","label-align":"right",align:"center"},{default:a(()=>[i(m(e.databaseDialog.statsDialog.data.collections),1)]),_:1}),l(g,{label:"objects","label-align":"right",align:"center"},{default:a(()=>[i(m(e.databaseDialog.statsDialog.data.objects),1)]),_:1}),l(g,{label:"indexes","label-align":"right",align:"center"},{default:a(()=>[i(m(e.databaseDialog.statsDialog.data.indexes),1)]),_:1}),l(g,{label:"avgObjSize","label-align":"right",align:"center"},{default:a(()=>[i(m(e.formatByteSize(e.databaseDialog.statsDialog.data.avgObjSize)),1)]),_:1}),l(g,{label:"dataSize","label-align":"right",align:"center"},{default:a(()=>[i(m(e.formatByteSize(e.databaseDialog.statsDialog.data.dataSize)),1)]),_:1}),l(g,{label:"totalSize","label-align":"right",align:"center"},{default:a(()=>[i(m(e.formatByteSize(e.databaseDialog.statsDialog.data.totalSize)),1)]),_:1}),l(g,{label:"storageSize","label-align":"right",align:"center"},{default:a(()=>[i(m(e.formatByteSize(e.databaseDialog.statsDialog.data.storageSize)),1)]),_:1}),l(g,{label:"fsTotalSize","label-align":"right",align:"center"},{default:a(()=>[i(m(e.formatByteSize(e.databaseDialog.statsDialog.data.fsTotalSize)),1)]),_:1}),l(g,{label:"fsUsedSize","label-align":"right",align:"center"},{default:a(()=>[i(m(e.formatByteSize(e.databaseDialog.statsDialog.data.fsUsedSize)),1)]),_:1}),l(g,{label:"indexSize","label-align":"right",align:"center"},{default:a(()=>[i(m(e.formatByteSize(e.databaseDialog.statsDialog.data.indexSize)),1)]),_:1})]),_:1})]),_:1},8,["title","modelValue"])]),_:1},8,["title","modelValue"]),l(F,{width:"600px",title:e.collectionsDialog.title,modelValue:e.collectionsDialog.visible,"onUpdate:modelValue":o[8]||(o[8]=t=>e.collectionsDialog.visible=t)},{default:a(()=>[_("div",null,[l(f,{onClick:e.showCreateCollectionDialog,type:"primary",icon:"plus",size:"small"},{default:a(()=>[ye]),_:1},8,["onClick"])]),l(D,{border:"",stripe:"",data:e.collectionsDialog.data,size:"small"},{default:a(()=>[l(r,{prop:"name",label:"\u540D\u79F0","show-overflow-tooltip":""}),l(r,{"min-width":"80",label:"\u64CD\u4F5C"},{default:a(t=>[l(v,{type:"success",onClick:w=>e.showCollectionStats(t.row.name),plain:"",size:"small",underline:!1},{default:a(()=>[he]),_:2},1032,["onClick"]),l(V,{direction:"vertical","border-style":"dashed"}),l(R,{onConfirm:w=>e.onDeleteCollection(t.row.name),title:"\u786E\u5B9A\u5220\u9664\u8BE5\u96C6\u5408?"},{reference:a(()=>[l(v,{type:"danger",plain:"",size:"small",underline:!1},{default:a(()=>[Ee]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"]),l(F,{width:"700px",title:e.collectionsDialog.statsDialog.title,modelValue:e.collectionsDialog.statsDialog.visible,"onUpdate:modelValue":o[7]||(o[7]=t=>e.collectionsDialog.statsDialog.visible=t)},{default:a(()=>[l(k,{title:"\u96C6\u5408\u72B6\u6001\u4FE1\u606F",column:3,border:"",size:"small"},{default:a(()=>[l(g,{label:"ns","label-align":"right",span:2,align:"center"},{default:a(()=>[i(m(e.collectionsDialog.statsDialog.data.ns),1)]),_:1}),l(g,{label:"count","label-align":"right",align:"center"},{default:a(()=>[i(m(e.collectionsDialog.statsDialog.data.count),1)]),_:1}),l(g,{label:"avgObjSize","label-align":"right",align:"center"},{default:a(()=>[i(m(e.formatByteSize(e.collectionsDialog.statsDialog.data.avgObjSize)),1)]),_:1}),l(g,{label:"nindexes","label-align":"right",align:"center"},{default:a(()=>[i(m(e.collectionsDialog.statsDialog.data.nindexes),1)]),_:1}),l(g,{label:"size","label-align":"right",align:"center"},{default:a(()=>[i(m(e.formatByteSize(e.collectionsDialog.statsDialog.data.size)),1)]),_:1}),l(g,{label:"totalSize","label-align":"right",align:"center"},{default:a(()=>[i(m(e.formatByteSize(e.collectionsDialog.statsDialog.data.totalSize)),1)]),_:1}),l(g,{label:"storageSize","label-align":"right",align:"center"},{default:a(()=>[i(m(e.formatByteSize(e.collectionsDialog.statsDialog.data.storageSize)),1)]),_:1}),l(g,{label:"freeStorageSize","label-align":"right",align:"center"},{default:a(()=>[i(m(e.formatByteSize(e.collectionsDialog.statsDialog.data.freeStorageSize)),1)]),_:1})]),_:1})]),_:1},8,["title","modelValue"])]),_:1},8,["title","modelValue"]),l(F,{width:"400px",title:"\u65B0\u5EFA\u96C6\u5408",modelValue:e.createCollectionDialog.visible,"onUpdate:modelValue":o[11]||(o[11]=t=>e.createCollectionDialog.visible=t),"destroy-on-close":!0},{footer:a(()=>[_("div",null,[l(f,{onClick:o[10]||(o[10]=t=>e.createCollectionDialog.visible=!1)},{default:a(()=>[we]),_:1}),l(f,{onClick:e.onCreateCollection,type:"primary"},{default:a(()=>[ze]),_:1},8,["onClick"])])]),default:a(()=>[l(K,{model:e.createCollectionDialog.form,"label-width":"70px"},{default:a(()=>[l(J,{prop:"name",label:"\u96C6\u5408\u540D",required:""},{default:a(()=>[l(H,{modelValue:e.createCollectionDialog.form.name,"onUpdate:modelValue":o[9]||(o[9]=t=>e.createCollectionDialog.form.name=t),clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),l(Q,{onValChange:e.valChange,projects:e.projects,title:e.mongoEditDialog.title,visible:e.mongoEditDialog.visible,"onUpdate:visible":o[12]||(o[12]=t=>e.mongoEditDialog.visible=t),mongo:e.mongoEditDialog.data,"onUpdate:mongo":o[13]||(o[13]=t=>e.mongoEditDialog.data=t)},null,8,["onValChange","projects","title","visible","mongo"])])}var $e=G(ge,[["render",Fe]]);export{$e as default};