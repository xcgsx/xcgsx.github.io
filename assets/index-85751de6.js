import{I as g,d as le,r as u,c as te,D as ae,e as i,J as oe,o as w,f as ne,g as l,w as t,K as se,j as p,A as R,v as N,z as j,L as _,p as re,k as ie,m as de,_ as ce}from"./index-f4238ceb.js";import{u as ue}from"./setting-5dde2129.js";const pe=(o,d,y)=>g.get(`/admin/acl/role/${o}/${d}/?roleName=${y}`),me=o=>o.id?g.put("/admin/acl/role/update",o):g.post("/admin/acl/role/save",o),fe=o=>g.get("/admin/acl/permission/toAssign/"+o),ve=(o,d)=>g.post(`/admin/acl/permission/doAssign/?roleId=${o}&permissionId=${d}`),_e=o=>g.delete("/admin/acl/role/remove/"+o),ge=o=>(re("data-v-3a3113dc"),o=o(),ie(),o),ye=ge(()=>de("h4",null,"分配菜单与按钮的权限",-1)),he=le({__name:"index",setup(o){const d=u(1),y=u(3),$=u(),h=u(""),V=u([]),I=ue(),m=u(!1),r=te({roleName:""}),x=u(),b=u(!1),z=u([]),U=u([]),S=u();ae(()=>{f()});const f=async(n=1)=>{d.value=n;const e=await pe(d.value,y.value,h.value);console.log("角色数据获取成功",e),e.code==200&&($.value=e.data.total,V.value=e.data.records)},E=()=>{f()},q=()=>{f(),h.value=""},O=()=>{I.refsh=!I.refsh},L=()=>{m.value=!0,Object.assign(r,{id:"",roleName:""}),j(()=>{x.value.clearValidate("roleName")})},T=n=>{m.value=!0,Object.assign(r,n),j(()=>{x.value.clearValidate("roleName")})},B={roleName:[{required:!0,trigger:"blur",validator:(n,e,s)=>{e.trim().length>=2?s():s(new Error("角色名称至少两位"))}}]},M=async()=>{await x.value.validate(),(await me(r)).code==200?(m.value=!1,_({type:"success",message:r.id?"编辑成功":"添加成功"}),f(r.id?d.value:1)):_({type:"error",message:r.id?"编辑失败":"添加失败"})},H={children:"children",label:"name"},J=async n=>{b.value=!0,Object.assign(r,n);const e=await fe(r.id);console.log("角色职位与按钮数据获取成功",e),e.code&&(z.value=e.data,U.value=A(z.value,[]))},A=(n,e)=>(n.forEach(s=>{s.select&&s.level==4&&e.push(s.id),s.children&&s.children.length>0&&A(s.children,e)}),e),F=async()=>{const n=r.id,e=S.value.getCheckedKeys(),s=S.value.getHalfCheckedKeys(),k=e.concat(s);(await ve(n,k)).code==200?(b.value=!1,_({type:"success",message:"分配权限成功"}),window.location.reload()):_({type:"error",message:"分配权限失败"})},G=async n=>{(await _e(n)).code==200?(_({type:"success",message:"删除成功"}),f(V.value.length>1?d.value:d.value-1)):_({type:"error",message:"删除失败"})};return(n,e)=>{const s=i("el-input"),k=i("el-form-item"),c=i("el-button"),D=i("el-form"),K=i("el-card"),v=i("el-table-column"),Q=i("el-popconfirm"),W=i("el-table"),X=i("el-pagination"),Y=i("el-dialog"),Z=i("el-tree"),ee=i("el-drawer"),C=oe("has");return w(),ne("div",null,[l(K,{style:{height:"80px"}},{default:t(()=>[l(D,{inline:"",class:"form"},{default:t(()=>[l(k,{label:"角色搜索"},{default:t(()=>[l(s,{placeholder:"请输入角色名 - 回车搜索",modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=a=>h.value=a),onKeyup:se(q,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),l(k,null,{default:t(()=>[l(c,{type:"primary",disabled:!h.value,onClick:q},{default:t(()=>[p("搜索")]),_:1},8,["disabled"]),l(c,{type:"primary",plain:"",onClick:O},{default:t(()=>[p("重置")]),_:1})]),_:1})]),_:1})]),_:1}),l(K,{style:{margin:"10px 0px"}},{default:t(()=>[R((w(),N(c,{type:"primary",icon:"Plus",onClick:L},{default:t(()=>[p("添加角色")]),_:1})),[[C,"btn.Role.add"]]),l(W,{border:"",style:{margin:"10px 0px"},data:V.value},{default:t(()=>[l(v,{label:"#",align:"center",type:"index"}),l(v,{label:"ID",align:"center",prop:"id"}),l(v,{label:"角色名称",align:"center",prop:"roleName","show-overflow-tooltip":""}),l(v,{label:"创建时间",align:"center",prop:"createTime","show-overflow-tooltip":""}),l(v,{label:"更新时间",align:"center",prop:"updateTime","show-overflow-tooltip":""}),l(v,{label:"操作",align:"center",width:"265px"},{default:t(({row:a,index:ke})=>[R((w(),N(c,{type:"primary",size:"small",icon:"User",onClick:P=>J(a)},{default:t(()=>[p("分配权限")]),_:2},1032,["onClick"])),[[C,"btn.Role.assgin"]]),R((w(),N(c,{type:"info",size:"small",icon:"Edit",onClick:P=>T(a)},{default:t(()=>[p("编辑")]),_:2},1032,["onClick"])),[[C,"btn.Role.update"]]),l(Q,{title:`确定删除${a.roleName}吗?`,onConfirm:P=>G(a.id),width:"250px",icon:"Delete","icon-color":"red","hide-after":10},{reference:t(()=>[R((w(),N(c,{type:"danger",size:"small",icon:"Delete"},{default:t(()=>[p("删除")]),_:1})),[[C,"btn.Role.remove"]])]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"]),l(X,{"current-page":d.value,"onUpdate:currentPage":e[1]||(e[1]=a=>d.value=a),"page-size":y.value,"onUpdate:pageSize":e[2]||(e[2]=a=>y.value=a),"page-sizes":[3,5,6,10],background:!0,layout:"prev, pager, next, jumper, ->, sizes, total",total:$.value,onCurrentChange:f,onSizeChange:E},null,8,["current-page","page-size","total"])]),_:1}),l(Y,{title:r.id?"编辑角色":"添加角色",modelValue:m.value,"onUpdate:modelValue":e[5]||(e[5]=a=>m.value=a)},{footer:t(()=>[l(c,{type:"primary",plain:"",onClick:e[4]||(e[4]=a=>m.value=!1)},{default:t(()=>[p("取消")]),_:1}),l(c,{type:"primary",onClick:M},{default:t(()=>[p("确定")]),_:1})]),default:t(()=>[l(D,{model:r,rules:B,ref_key:"formRef",ref:x},{default:t(()=>[l(k,{label:"角色名称",prop:"roleName"},{default:t(()=>[l(s,{placeholder:"请输入角色名称",modelValue:r.roleName,"onUpdate:modelValue":e[3]||(e[3]=a=>r.roleName=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"]),l(ee,{modelValue:b.value,"onUpdate:modelValue":e[7]||(e[7]=a=>b.value=a)},{header:t(()=>[ye]),default:t(()=>[l(Z,{ref_key:"tree",ref:S,data:z.value,"show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":U.value,props:H},null,8,["data","default-checked-keys"])]),footer:t(()=>[l(c,{type:"primary",plain:"",onClick:e[6]||(e[6]=a=>b.value=!1)},{default:t(()=>[p("取消")]),_:1}),l(c,{type:"primary",onClick:F},{default:t(()=>[p("确定")]),_:1})]),_:1},8,["modelValue"])])}}});const Ce=ce(he,[["__scopeId","data-v-3a3113dc"]]);export{Ce as default};
