import{I as v,d as W,r as m,c as X,D as Y,e as s,J as Z,o as f,f as V,g as t,w as l,A as x,v as z,j as U,m as C,t as F,z as ee,L as p,_ as ae}from"./index-f4238ceb.js";const te=(i,d)=>v.get(`/admin/product/baseTrademark/${i}/${d}`),le=i=>i.id?v.put("/admin/product/baseTrademark/update",i):v.post("/admin/product/baseTrademark/save",i),oe=i=>v.delete("/admin/product/baseTrademark/remove/"+i),re=["src"],ne=["src"],se=W({__name:"index",setup(i){const d=m(1),y=m(3),T=m(0),b=m([]),u=m(!1),o=X({tmName:"",logoUrl:""}),c=m(),_=async(a=1)=>{d.value=a;const e=await te(d.value,y.value);console.log(e),T.value=e.data.total,b.value=e.data.records};Y(()=>{_()});const w=()=>{_()},$=()=>{u.value=!0,o.id=0,o.tmName="",o.logoUrl="",ee(()=>{c.value.clearValidate("tmName"),c.value.clearValidate("logoUrl")})},D=a=>{var e,n;(e=c.value)==null||e.clearValidate("tmName"),(n=c.value)==null||n.clearValidate("logoUrl"),u.value=!0,Object.assign(o,a)},P=()=>{u.value=!1},q=async()=>{await c.value.validate();const a=await le(o);console.log(a),a.code==200?(u.value=!1,p({type:"success",message:o.id?"修改品牌成功":"添加品牌成功"}),_(o.id?d.value:1)):(u.value=!1,p({type:"error",message:o.id?"修改品牌失败":"添加品牌失败"}))},L=a=>(console.log(a),a.type=="image/png"||a.type=="image/jpeg"||a.type=="image/gif"?a.size/1024/1024<4?!0:(p({type:"error",message:"上传文件大小超过4M 请重新上传"}),!1):(p({type:"error",message:"上传文件格式必须为 PNG | JPG | GIF"}),!1)),O=(a,e)=>{o.logoUrl=a.data,console.log(a),c.value.clearValidate("logoUrl")},A={tmName:[{required:!0,trigger:"blur",validator:(a,e,n)=>{e.trim().length>=2?n():n(new Error("品牌名称要大于等于两位"))}}],logoUrl:[{required:!0,validator:(a,e,n)=>{e?n():n(new Error("LOGO图片务必上传"))}}]},E=async a=>{const e=await oe(a);console.log(e),e.code==200?(p({type:"success",message:"删除品牌成功"}),_(b.value.length>1?d.value:d.value-1)):p({type:"error",message:"删除品牌失败"})};return(a,e)=>{const n=s("el-button"),g=s("el-table-column"),G=s("el-popconfirm"),j=s("el-table"),S=s("el-pagination"),I=s("el-card"),M=s("el-input"),N=s("el-form-item"),B=s("Plus"),H=s("el-icon"),J=s("el-upload"),R=s("el-form"),K=s("el-dialog"),k=Z("has");return f(),V("div",null,[t(I,null,{default:l(()=>[x((f(),z(n,{type:"primary",size:"default",icon:"Plus",onClick:$},{default:l(()=>[U("添加品牌")]),_:1})),[[k,"btn.Trademark.add"]]),t(j,{style:{margin:"10px 0px"},border:"",data:b.value},{default:l(()=>[t(g,{label:"序号",width:"80px",align:"center",type:"index"}),t(g,{label:"品牌名称"},{default:l(({row:r,$index:h})=>[C("p",null,F(r.tmName),1)]),_:1}),t(g,{label:"品牌LOGO"},{default:l(({row:r,$index:h})=>[C("img",{src:r.logoUrl,style:{width:"60px",height:"60px","border-radius":"8px"}},null,8,re)]),_:1}),t(g,{label:"品牌操作"},{default:l(({row:r,$index:h})=>[x(t(n,{type:"warning",size:"default",icon:"Edit",onClick:Q=>D(r)},null,8,["onClick"]),[[k,"btn.Trademark.update"]]),t(G,{title:`确定删除${r.tmName}吗?`,width:"170px",icon:"Delete","icon-color":"red",onConfirm:Q=>E(r.id),"hide-after":10},{reference:l(()=>[x(t(n,{type:"danger",size:"default",icon:"Delete"},null,512),[[k,"btn.Trademark.remove"]])]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"]),t(S,{"current-page":d.value,"onUpdate:currentPage":e[0]||(e[0]=r=>d.value=r),"page-size":y.value,"onUpdate:pageSize":e[1]||(e[1]=r=>y.value=r),"page-sizes":[2,5,6,10],background:!0,layout:"prev, pager, next, jumper, ->, sizes, total",total:T.value,onCurrentChange:_,onSizeChange:w},null,8,["current-page","page-size","total"])]),_:1}),t(K,{modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=r=>u.value=r),title:o.id?"修改品牌":"添加品牌"},{footer:l(()=>[t(n,{type:"primary",size:"default",onClick:P,plain:""},{default:l(()=>[U("取消")]),_:1}),t(n,{type:"primary",size:"default",onClick:q},{default:l(()=>[U("确定")]),_:1})]),default:l(()=>[t(R,{style:{width:"50%"},model:o,rules:A,ref_key:"formRef",ref:c},{default:l(()=>[t(N,{label:"品牌名称","label-width":"100px",prop:"tmName"},{default:l(()=>[t(M,{placeholder:"请您输入品牌名称",modelValue:o.tmName,"onUpdate:modelValue":e[2]||(e[2]=r=>o.tmName=r)},null,8,["modelValue"])]),_:1}),t(N,{label:"品牌Logo","label-width":"100px",prop:"logoUrl"},{default:l(()=>[t(J,{class:"avatar-uploader",action:"/api/admin/product/fileUpload","show-file-list":!1,"on-success":O,"before-upload":L},{default:l(()=>[o.logoUrl?(f(),V("img",{key:0,src:o.logoUrl,class:"avatar"},null,8,ne)):(f(),z(H,{key:1,class:"avatar-uploader-icon"},{default:l(()=>[t(B)]),_:1}))]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}});const ce=ae(se,[["__scopeId","data-v-e1784b1a"]]);export{ce as default};
