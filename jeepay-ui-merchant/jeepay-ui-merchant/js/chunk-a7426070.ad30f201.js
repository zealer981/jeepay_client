(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7426070"],{"0fea":function(e,r,t){"use strict";t.d(r,"I",(function(){return u})),t.d(r,"J",(function(){return a})),t.d(r,"k",(function(){return i})),t.d(r,"j",(function(){return o})),t.d(r,"l",(function(){return s})),t.d(r,"n",(function(){return c})),t.d(r,"d",(function(){return f})),t.d(r,"h",(function(){return l})),t.d(r,"p",(function(){return p})),t.d(r,"a",(function(){return m})),t.d(r,"o",(function(){return h})),t.d(r,"i",(function(){return v})),t.d(r,"e",(function(){return y})),t.d(r,"f",(function(){return q})),t.d(r,"m",(function(){return T})),t.d(r,"c",(function(){return g})),t.d(r,"b",(function(){return b})),t.d(r,"g",(function(){return O})),t.d(r,"O",(function(){return w})),t.d(r,"t",(function(){return E})),t.d(r,"L",(function(){return G})),t.d(r,"w",(function(){return F})),t.d(r,"E",(function(){return I})),t.d(r,"F",(function(){return S})),t.d(r,"r",(function(){return j})),t.d(r,"y",(function(){return k})),t.d(r,"x",(function(){return P})),t.d(r,"z",(function(){return C})),t.d(r,"A",(function(){return D})),t.d(r,"v",(function(){return L})),t.d(r,"N",(function(){return A})),t.d(r,"M",(function(){return R})),t.d(r,"B",(function(){return B})),t.d(r,"C",(function(){return U})),t.d(r,"G",(function(){return $})),t.d(r,"H",(function(){return N})),t.d(r,"s",(function(){return _})),t.d(r,"q",(function(){return x})),t.d(r,"u",(function(){return M})),t.d(r,"D",(function(){return J})),t.d(r,"K",(function(){return W}));t("2ca0"),t("ac1f"),t("5319");var n=t("4667"),u={list:function(e,r){return n["a"].request({url:e,method:"GET",params:r},!0,!0,!1)},add:function(e,r){return n["a"].request({url:e,method:"POST",data:r},!0,!0,!1)},getById:function(e,r){return n["a"].request({url:e+"/"+r,method:"GET"},!0,!0,!1)},updateById:function(e,r,t){return n["a"].request({url:e+"/"+r,method:"PUT",data:t},!0,!0,!1)},delById:function(e,r){return n["a"].request({url:e+"/"+r,method:"DELETE"},!0,!0,!1)}},a={list:function(e,r){return n["a"].request({url:e,method:"GET",params:r},!0,!0,!0)},add:function(e,r){return n["a"].request({url:e,method:"POST",data:r},!0,!0,!0)},getById:function(e,r){return n["a"].request({url:e+"/"+r,method:"GET"},!0,!0,!0)},updateById:function(e,r,t){return n["a"].request({url:e+"/"+r,method:"PUT",data:t},!0,!0,!0)},delById:function(e,r){return n["a"].request({url:e+"/"+r,method:"DELETE"},!0,!0,!0)}},i="/api/sysRoles",o="/api/sysRoleEntRelas",s="/api/sysUsers",c="/api/sysUserRoleRelas",d="api/mainChart",f="/api/mchApps",l="/api/payOrder",p="/api/withDrawOrder",m="/api/mainChart/balance",h="/api/withDrawOrder/create",v="/api/refundOrder",y="/api/mch/payConfigs",q="/api/mch/payPassages",T="/api/transferOrders",g="/api/divisionReceiverGroups",b="/api/divisionReceivers",O="/api/division/records",w={avatar:n["a"].baseUrl+"/api/ossFiles/avatar",cert:n["a"].baseUrl+"/api/ossFiles/cert"};function E(){return n["a"].request({url:"/api/sysEnts/showTree",method:"GET"})}function G(e,r){return n["a"].request({url:"api/sysUserRoleRelas/relas/"+e,method:"POST",data:{roleIdListStr:JSON.stringify(r)}})}function F(e,r){return n["a"].request({url:"/api/mch/payConfigs/"+e+"/"+r,method:"get"})}function I(e){return n["a"].request({url:"api/paytest/payways/"+e,method:"GET"})}function S(e){return n["a"].request({url:"/api/paytest/payOrders",method:"POST",data:e})}function j(e,r){return n["a"].request({url:"/api/mch/payPassages/availablePayInterface/"+e+"/"+r,method:"GET"})}function k(){return n["a"].request({url:d+"/payAmountWeek",method:"GET"})}function P(){return n["a"].request({url:d+"/numCount",method:"GET"})}function C(e){return n["a"].request({url:d+"/payCount",method:"GET",params:e})}function D(e){return n["a"].request({url:d+"/payTypeCount",method:"GET",params:e})}function L(){return n["a"].request({url:d,method:"GET"})}function A(e){return n["a"].request({url:"/api/current/modifyPwd",method:"put",data:e})}function R(e){return n["a"].request({url:"/api/current/user",method:"put",data:e})}function B(){return n["a"].request({url:"/api/current/user",method:"get"})}function U(){var e=document.location.protocol+"//"+document.location.host;return e.startsWith("https:")?"wss://"+e.replace("https://",""):"ws://"+e.replace("http://","")}function $(e){return n["a"].request({url:"/api/mch/payConfigs/alipayIsvsubMchAuthUrls/"+e,method:"GET"})}function N(e){return n["a"].request({url:"api/mchTransfers/ifCodes/"+e,method:"GET"})}function _(e,r,t){return n["a"].request({url:"/api/mchTransfers/channelUserId",method:"GET",params:{ifCode:e,appId:r,extParam:t}})}function x(e){return n["a"].request({url:"/api/mchTransfers/doTransfer",method:"POST",data:e},!0,!0,!0)}function M(e){return n["a"].request({url:"/api/mch/payConfigs/ifCodes/"+e,method:"GET"},!0,!0,!0)}function J(e,r,t){return n["a"].request({url:"/api/payOrder/refunds/"+e,method:"POST",data:{refundAmount:r,refundReason:t}})}function W(e){return n["a"].request({url:"/api/division/records/resend/"+e,method:"POST"})}},7280:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("a-modal",{attrs:{title:e.isAdd?"新增菜单":"修改菜单",confirmLoading:e.confirmLoading},on:{ok:e.handleOkFunc},model:{value:e.isShow,callback:function(r){e.isShow=r},expression:"isShow"}},[t("a-form-model",{ref:"infoFormModel",attrs:{model:e.saveObject,"label-col":{span:6},"wrapper-col":{span:15},rules:e.rules}},[t("a-form-model-item",{attrs:{label:"组名称：",prop:"receiverGroupName"}},[t("a-input",{model:{value:e.saveObject.receiverGroupName,callback:function(r){e.$set(e.saveObject,"receiverGroupName",r)},expression:"saveObject.receiverGroupName"}})],1),t("a-form-model-item",{attrs:{label:"自动分账组",prop:"autoDivisionFlag"}},[t("a-radio-group",{model:{value:e.saveObject.autoDivisionFlag,callback:function(r){e.$set(e.saveObject,"autoDivisionFlag",r)},expression:"saveObject.autoDivisionFlag"}},[t("a-radio",{attrs:{value:1}},[e._v("是")]),e._v(" "),t("a-radio",{attrs:{value:0}},[e._v("否")])],1),t("hr"),t("p",{staticStyle:{color:"indianred"}},[e._v("1. 自动分账组: 当订单分账模式为自动分账，该组下的所有正常分账状态的账号将作为订单分账对象")]),t("p",{staticStyle:{color:"indianred"}},[e._v("2. 每个商户仅有一个默认分账组， 当该组更新为自动分账时，其他组将改为否")])],1)],1)],1)},u=[],a=t("0fea"),i={props:{callbackFunc:{type:Function}},data:function(){return{confirmLoading:!1,isAdd:!0,isShow:!1,saveObject:{autoDivisionFlag:0},recordId:null,rules:{receiverGroupName:[{required:!0,message:"请输入组名称",trigger:"blur"}]}}},created:function(){},methods:{show:function(e){this.isAdd=!e,this.saveObject={autoDivisionFlag:0},this.confirmLoading=!1,void 0!==this.$refs.infoFormModel&&this.$refs.infoFormModel.resetFields();var r=this;this.isAdd?r.isShow=!0:(r.recordId=e,a["I"].getById(a["c"],e).then((function(e){r.saveObject=e,r.isShow=!0})))},handleOkFunc:function(){var e=this;this.$refs.infoFormModel.validate((function(r){r&&(e.confirmLoading=!0,e.isAdd?a["I"].add(a["c"],e.saveObject).then((function(r){e.$message.success("添加成功"),e.isShow=!1,e.callbackFunc()})).catch((function(r){e.confirmLoading=!1})):a["I"].updateById(a["c"],e.recordId,e.saveObject).then((function(r){e.$message.success("修改成功"),e.isShow=!1,e.callbackFunc()})).catch((function(r){e.confirmLoading=!1})))}))}}},o=i,s=t("2877"),c=Object(s["a"])(o,n,u,!1,null,null,null);r["default"]=c.exports}}]);