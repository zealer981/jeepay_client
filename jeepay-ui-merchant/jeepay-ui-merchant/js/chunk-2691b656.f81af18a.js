(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2691b656"],{"0fea":function(t,r,n){"use strict";n.d(r,"I",(function(){return u})),n.d(r,"J",(function(){return a})),n.d(r,"k",(function(){return i})),n.d(r,"j",(function(){return s})),n.d(r,"l",(function(){return o})),n.d(r,"n",(function(){return c})),n.d(r,"d",(function(){return p})),n.d(r,"h",(function(){return f})),n.d(r,"p",(function(){return l})),n.d(r,"a",(function(){return h})),n.d(r,"o",(function(){return m})),n.d(r,"i",(function(){return y})),n.d(r,"e",(function(){return T})),n.d(r,"f",(function(){return q})),n.d(r,"m",(function(){return v})),n.d(r,"c",(function(){return E})),n.d(r,"b",(function(){return b})),n.d(r,"g",(function(){return w})),n.d(r,"O",(function(){return g})),n.d(r,"t",(function(){return O})),n.d(r,"L",(function(){return S})),n.d(r,"w",(function(){return G})),n.d(r,"E",(function(){return R})),n.d(r,"F",(function(){return C})),n.d(r,"r",(function(){return P})),n.d(r,"y",(function(){return I})),n.d(r,"x",(function(){return k})),n.d(r,"z",(function(){return U})),n.d(r,"A",(function(){return D})),n.d(r,"v",(function(){return _})),n.d(r,"N",(function(){return F})),n.d(r,"M",(function(){return x})),n.d(r,"B",(function(){return B})),n.d(r,"C",(function(){return A})),n.d(r,"G",(function(){return J})),n.d(r,"H",(function(){return L})),n.d(r,"s",(function(){return N})),n.d(r,"q",(function(){return j})),n.d(r,"u",(function(){return z})),n.d(r,"D",(function(){return M})),n.d(r,"K",(function(){return W}));n("2ca0"),n("ac1f"),n("5319");var e=n("4667"),u={list:function(t,r){return e["a"].request({url:t,method:"GET",params:r},!0,!0,!1)},add:function(t,r){return e["a"].request({url:t,method:"POST",data:r},!0,!0,!1)},getById:function(t,r){return e["a"].request({url:t+"/"+r,method:"GET"},!0,!0,!1)},updateById:function(t,r,n){return e["a"].request({url:t+"/"+r,method:"PUT",data:n},!0,!0,!1)},delById:function(t,r){return e["a"].request({url:t+"/"+r,method:"DELETE"},!0,!0,!1)}},a={list:function(t,r){return e["a"].request({url:t,method:"GET",params:r},!0,!0,!0)},add:function(t,r){return e["a"].request({url:t,method:"POST",data:r},!0,!0,!0)},getById:function(t,r){return e["a"].request({url:t+"/"+r,method:"GET"},!0,!0,!0)},updateById:function(t,r,n){return e["a"].request({url:t+"/"+r,method:"PUT",data:n},!0,!0,!0)},delById:function(t,r){return e["a"].request({url:t+"/"+r,method:"DELETE"},!0,!0,!0)}},i="/api/sysRoles",s="/api/sysRoleEntRelas",o="/api/sysUsers",c="/api/sysUserRoleRelas",d="api/mainChart",p="/api/mchApps",f="/api/payOrder",l="/api/withDrawOrder",h="/api/mainChart/balance",m="/api/withDrawOrder/create",y="/api/refundOrder",T="/api/mch/payConfigs",q="/api/mch/payPassages",v="/api/transferOrders",E="/api/divisionReceiverGroups",b="/api/divisionReceivers",w="/api/division/records",g={avatar:e["a"].baseUrl+"/api/ossFiles/avatar",cert:e["a"].baseUrl+"/api/ossFiles/cert"};function O(){return e["a"].request({url:"/api/sysEnts/showTree",method:"GET"})}function S(t,r){return e["a"].request({url:"api/sysUserRoleRelas/relas/"+t,method:"POST",data:{roleIdListStr:JSON.stringify(r)}})}function G(t,r){return e["a"].request({url:"/api/mch/payConfigs/"+t+"/"+r,method:"get"})}function R(t){return e["a"].request({url:"api/paytest/payways/"+t,method:"GET"})}function C(t){return e["a"].request({url:"/api/paytest/payOrders",method:"POST",data:t})}function P(t,r){return e["a"].request({url:"/api/mch/payPassages/availablePayInterface/"+t+"/"+r,method:"GET"})}function I(){return e["a"].request({url:d+"/payAmountWeek",method:"GET"})}function k(){return e["a"].request({url:d+"/numCount",method:"GET"})}function U(t){return e["a"].request({url:d+"/payCount",method:"GET",params:t})}function D(t){return e["a"].request({url:d+"/payTypeCount",method:"GET",params:t})}function _(){return e["a"].request({url:d,method:"GET"})}function F(t){return e["a"].request({url:"/api/current/modifyPwd",method:"put",data:t})}function x(t){return e["a"].request({url:"/api/current/user",method:"put",data:t})}function B(){return e["a"].request({url:"/api/current/user",method:"get"})}function A(){var t=document.location.protocol+"//"+document.location.host;return t.startsWith("https:")?"wss://"+t.replace("https://",""):"ws://"+t.replace("http://","")}function J(t){return e["a"].request({url:"/api/mch/payConfigs/alipayIsvsubMchAuthUrls/"+t,method:"GET"})}function L(t){return e["a"].request({url:"api/mchTransfers/ifCodes/"+t,method:"GET"})}function N(t,r,n){return e["a"].request({url:"/api/mchTransfers/channelUserId",method:"GET",params:{ifCode:t,appId:r,extParam:n}})}function j(t){return e["a"].request({url:"/api/mchTransfers/doTransfer",method:"POST",data:t},!0,!0,!0)}function z(t){return e["a"].request({url:"/api/mch/payConfigs/ifCodes/"+t,method:"GET"},!0,!0,!0)}function M(t,r,n){return e["a"].request({url:"/api/payOrder/refunds/"+t,method:"POST",data:{refundAmount:r,refundReason:n}})}function W(t){return e["a"].request({url:"/api/division/records/resend/"+t,method:"POST"})}},4823:function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("a-modal",{attrs:{title:"支付宝子商户扫码授权"},on:{ok:t.handleOkFunc,cancel:t.handleOkFunc},model:{value:t.isShow,callback:function(r){t.isShow=r},expression:"isShow"}},[n("div",{staticStyle:{"text-align":"center"}},[n("p",[t._v("方式1： "),n("br"),t._v(" 使用商家账号登录【支付宝】APP, 扫描如下二维码, 按提示授权： ")]),n("img",{staticStyle:{"margin-bottom":"10px"},attrs:{src:t.apiResData.authQrImgUrl}}),n("hr"),n("p",{staticStyle:{"margin-top":"10px"}},[t._v(" 方式2： "),n("br"),t._v(" "),n("a-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.apiResData.authUrl,expression:"apiResData.authUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy-btn",attrs:{size:"small"}},[t._v("点击复制")]),t._v(" 或点击以下链接，按照页面提示自主授权： ")],1),n("a",{attrs:{target:"_blank",href:t.apiResData.authUrl}},[t._v(t._s(t.apiResData.authUrl))])])])},u=[],a=n("0fea"),i={props:{callbackFunc:{type:Function}},data:function(){return{isShow:!1,appId:"",apiResData:{}}},created:function(){},methods:{show:function(t){var r=this;this.apiResData={},this.appId=t;var n=this;Object(a["G"])(t).then((function(t){n.apiResData=t,r.isShow=!0}))},handleOkFunc:function(){this.isShow=!1,this.callbackFunc&&this.callbackFunc()},onCopySuccess:function(){this.$message.success("复制成功")}}},s=i,o=n("2877"),c=Object(o["a"])(s,e,u,!1,null,null,null);r["default"]=c.exports}}]);