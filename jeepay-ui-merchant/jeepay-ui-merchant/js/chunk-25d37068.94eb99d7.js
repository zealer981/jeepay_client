(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25d37068"],{"0fea":function(a,e,t){"use strict";t.d(e,"I",(function(){return i})),t.d(e,"J",(function(){return n})),t.d(e,"k",(function(){return s})),t.d(e,"j",(function(){return o})),t.d(e,"l",(function(){return u})),t.d(e,"n",(function(){return l})),t.d(e,"d",(function(){return p})),t.d(e,"h",(function(){return d})),t.d(e,"p",(function(){return f})),t.d(e,"a",(function(){return m})),t.d(e,"o",(function(){return h})),t.d(e,"i",(function(){return y})),t.d(e,"e",(function(){return b})),t.d(e,"f",(function(){return v})),t.d(e,"m",(function(){return P})),t.d(e,"c",(function(){return g})),t.d(e,"b",(function(){return C})),t.d(e,"g",(function(){return _})),t.d(e,"O",(function(){return k})),t.d(e,"t",(function(){return x})),t.d(e,"L",(function(){return S})),t.d(e,"w",(function(){return T})),t.d(e,"E",(function(){return I})),t.d(e,"F",(function(){return E})),t.d(e,"r",(function(){return O})),t.d(e,"y",(function(){return V})),t.d(e,"x",(function(){return w})),t.d(e,"z",(function(){return A})),t.d(e,"A",(function(){return q})),t.d(e,"v",(function(){return $})),t.d(e,"N",(function(){return j})),t.d(e,"M",(function(){return K})),t.d(e,"B",(function(){return U})),t.d(e,"C",(function(){return M})),t.d(e,"G",(function(){return N})),t.d(e,"H",(function(){return F})),t.d(e,"s",(function(){return G})),t.d(e,"q",(function(){return L})),t.d(e,"u",(function(){return J})),t.d(e,"D",(function(){return R})),t.d(e,"K",(function(){return D}));t("2ca0"),t("ac1f"),t("5319");var r=t("4667"),i={list:function(a,e){return r["a"].request({url:a,method:"GET",params:e},!0,!0,!1)},add:function(a,e){return r["a"].request({url:a,method:"POST",data:e},!0,!0,!1)},getById:function(a,e){return r["a"].request({url:a+"/"+e,method:"GET"},!0,!0,!1)},updateById:function(a,e,t){return r["a"].request({url:a+"/"+e,method:"PUT",data:t},!0,!0,!1)},delById:function(a,e){return r["a"].request({url:a+"/"+e,method:"DELETE"},!0,!0,!1)}},n={list:function(a,e){return r["a"].request({url:a,method:"GET",params:e},!0,!0,!0)},add:function(a,e){return r["a"].request({url:a,method:"POST",data:e},!0,!0,!0)},getById:function(a,e){return r["a"].request({url:a+"/"+e,method:"GET"},!0,!0,!0)},updateById:function(a,e,t){return r["a"].request({url:a+"/"+e,method:"PUT",data:t},!0,!0,!0)},delById:function(a,e){return r["a"].request({url:a+"/"+e,method:"DELETE"},!0,!0,!0)}},s="/api/sysRoles",o="/api/sysRoleEntRelas",u="/api/sysUsers",l="/api/sysUserRoleRelas",c="api/mainChart",p="/api/mchApps",d="/api/payOrder",f="/api/withDrawOrder",m="/api/mainChart/balance",h="/api/withDrawOrder/create",y="/api/refundOrder",b="/api/mch/payConfigs",v="/api/mch/payPassages",P="/api/transferOrders",g="/api/divisionReceiverGroups",C="/api/divisionReceivers",_="/api/division/records",k={avatar:r["a"].baseUrl+"/api/ossFiles/avatar",cert:r["a"].baseUrl+"/api/ossFiles/cert"};function x(){return r["a"].request({url:"/api/sysEnts/showTree",method:"GET"})}function S(a,e){return r["a"].request({url:"api/sysUserRoleRelas/relas/"+a,method:"POST",data:{roleIdListStr:JSON.stringify(e)}})}function T(a,e){return r["a"].request({url:"/api/mch/payConfigs/"+a+"/"+e,method:"get"})}function I(a){return r["a"].request({url:"api/paytest/payways/"+a,method:"GET"})}function E(a){return r["a"].request({url:"/api/paytest/payOrders",method:"POST",data:a})}function O(a,e){return r["a"].request({url:"/api/mch/payPassages/availablePayInterface/"+a+"/"+e,method:"GET"})}function V(){return r["a"].request({url:c+"/payAmountWeek",method:"GET"})}function w(){return r["a"].request({url:c+"/numCount",method:"GET"})}function A(a){return r["a"].request({url:c+"/payCount",method:"GET",params:a})}function q(a){return r["a"].request({url:c+"/payTypeCount",method:"GET",params:a})}function $(){return r["a"].request({url:c,method:"GET"})}function j(a){return r["a"].request({url:"/api/current/modifyPwd",method:"put",data:a})}function K(a){return r["a"].request({url:"/api/current/user",method:"put",data:a})}function U(){return r["a"].request({url:"/api/current/user",method:"get"})}function M(){var a=document.location.protocol+"//"+document.location.host;return a.startsWith("https:")?"wss://"+a.replace("https://",""):"ws://"+a.replace("http://","")}function N(a){return r["a"].request({url:"/api/mch/payConfigs/alipayIsvsubMchAuthUrls/"+a,method:"GET"})}function F(a){return r["a"].request({url:"api/mchTransfers/ifCodes/"+a,method:"GET"})}function G(a,e,t){return r["a"].request({url:"/api/mchTransfers/channelUserId",method:"GET",params:{ifCode:a,appId:e,extParam:t}})}function L(a){return r["a"].request({url:"/api/mchTransfers/doTransfer",method:"POST",data:a},!0,!0,!0)}function J(a){return r["a"].request({url:"/api/mch/payConfigs/ifCodes/"+a,method:"GET"},!0,!0,!0)}function R(a,e,t){return r["a"].request({url:"/api/payOrder/refunds/"+a,method:"POST",data:{refundAmount:e,refundReason:t}})}function D(a){return r["a"].request({url:"/api/division/records/resend/"+a,method:"POST"})}},"4a76":function(a,e,t){"use strict";t("892a")},"892a":function(a,e,t){},"909a":function(a,e,t){"use strict";var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("a-upload",{attrs:{name:"file",action:a.action,headers:a.headers,showUploadList:!1,multiple:!0,"before-upload":a.beforeUpload},on:{change:a.handleChange}},[a._t("uploadSlot",null,{loading:a.loading})],2)],1)},i=[],n=(t("a9e3"),t("381c")),s=t("ffef");function o(){var a={};return a[n["b"].ACCESS_TOKEN_NAME]=s["a"].getToken(),a}var u={name:"JeepayUpload",props:{action:{type:String,default:""},size:{type:Number,default:10},num:{type:Number,default:1}},data:function(){return{loading:!1,fileList:[],headers:o()}},created:function(){},methods:{handleChange:function(a){"uploading"===a.file.status&&(this.loading=!0),"done"===a.file.status?(this.loading=!1,this.$emit("uploadSuccess",a.file.response.data)):"error"===a.file.status&&this.$message.error("上传失败")},beforeUpload:function(a){var e=a.size/1024/1024<this.size;return e||this.$message.error("文件应小于"+this.size+"M!"),e}}},l=u,c=t("2877"),p=Object(c["a"])(l,r,i,!1,null,null,null);e["a"]=p.exports},c73b:function(a,e,t){"use strict";var r=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",[r("a-row",{staticStyle:{width:"100%"},attrs:{gutter:[24,24]}},[a.addAuthority?r("a-col",{attrs:{xxl:24/a.span.xxl,xl:24/a.span.xl,lg:24/a.span.lg,md:24/a.span.md,sm:24/a.span.sm,xs:24/a.span.xs},on:{click:function(e){return a.$emit("addJeepayCard")}}},[r("div",{staticClass:"jeepay-card-add",style:{height:a.height+"px"}},[r("img",{style:{width:a.height/3+"px",height:a.height/3+"px"},attrs:{src:t("e8c7"),alt:"add-icon"}}),r("div",{staticClass:"jeepay-card-add-text"},[a._v(" 新建"+a._s(a.name)+" ")])])]):a._e(),a._l(a.cardList,(function(e,t){return r("a-col",{key:t,attrs:{xxl:24/a.span.xxl,xl:24/a.span.xl,lg:24/a.span.lg,md:24/a.span.md,sm:24/a.span.sm,xs:24/a.span.xs}},[a._t("cardContentSlot",null,{record:e}),a._t("cardOpSlot",null,{record:e})],2)}))],2)],1)},i=[],n=(t("a9e3"),{name:"JeepayCard",props:{span:{type:Object,default:function(){return{xxl:6,xl:4,lg:4,md:3,sm:2,xs:1}}},height:{type:Number,default:200},name:{type:String,default:""},addAuthority:{type:Boolean,default:!1},reqCardListFunc:{type:Function,default:function(){return function(){return{}}}}},data:function(){return{cardList:[]}},created:function(){this.refCardList()},methods:{refCardList:function(){var a=this;this.reqCardListFunc().then((function(e){a.cardList=e}))}}}),s=n,o=(t("4a76"),t("2877")),u=Object(o["a"])(s,r,i,!1,null,"689f62ad",null);e["a"]=u.exports},e892:function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("a-drawer",{attrs:{title:"填写参数",width:"40%",closable:!0,maskClosable:!1,visible:a.visible,"body-style":{paddingBottom:"80px"}},on:{close:a.onClose}},[t("a-form-model",{ref:"infoFormModel",attrs:{model:a.saveObject,layout:"vertical",rules:a.rules}},[t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:12}},[t("a-form-model-item",{attrs:{label:"状态",prop:"state"}},[t("a-radio-group",{model:{value:a.saveObject.state,callback:function(e){a.$set(a.saveObject,"state",e)},expression:"saveObject.state"}},[t("a-radio",{attrs:{value:1}},[a._v(" 启用 ")]),t("a-radio",{attrs:{value:0}},[a._v(" 停用 ")])],1)],1)],1),t("a-col",{attrs:{span:24}},[t("a-form-model-item",{attrs:{label:"备注",prop:"remark"}},[t("a-input",{attrs:{placeholder:"请输入",type:"textarea"},model:{value:a.saveObject.remark,callback:function(e){a.$set(a.saveObject,"remark",e)},expression:"saveObject.remark"}})],1)],1)],1)],1),t("a-divider",{attrs:{orientation:"left"}},[t("a-tag",{attrs:{color:"#FF4B33"}},[a._v(" "+a._s(a.saveObject.ifCode)+" 商户参数配置 ")])],1),t("a-form-model",{ref:"mchParamFormModel",attrs:{model:a.ifParams,layout:"vertical",rules:a.ifParamsRules}},[1===a.mchType?t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:"12"}},[t("a-form-model-item",{attrs:{label:"微信支付商户号",prop:"mchId"}},[t("a-input",{attrs:{placeholder:"请输入"},model:{value:a.ifParams.mchId,callback:function(e){a.$set(a.ifParams,"mchId",e)},expression:"ifParams.mchId"}})],1)],1),t("a-col",{attrs:{span:"12"}},[t("a-form-model-item",{attrs:{label:"应用AppID",prop:"appId"}},[t("a-input",{attrs:{placeholder:"请输入"},model:{value:a.ifParams.appId,callback:function(e){a.$set(a.ifParams,"appId",e)},expression:"ifParams.appId"}})],1)],1),t("a-col",{attrs:{span:"12"}},[t("a-form-model-item",{attrs:{label:"应用AppSecret",prop:"appSecret"}},[t("a-input",{attrs:{placeholder:a.ifParams.appSecret_ph},model:{value:a.ifParams.appSecret,callback:function(e){a.$set(a.ifParams,"appSecret",e)},expression:"ifParams.appSecret"}})],1)],1),t("a-col",{attrs:{span:"12"}},[t("a-form-model-item",{attrs:{label:"oauth2地址（置空将使用官方）",prop:"oauth2Url"}},[t("a-input",{attrs:{placeholder:"请输入"},model:{value:a.ifParams.oauth2Url,callback:function(e){a.$set(a.ifParams,"oauth2Url",e)},expression:"ifParams.oauth2Url"}})],1)],1),t("a-col",{attrs:{span:"12"}},[t("a-form-model-item",{attrs:{label:"微信支付API版本",prop:"apiVersion"}},[t("a-radio-group",{attrs:{defaultValue:"V2"},model:{value:a.ifParams.apiVersion,callback:function(e){a.$set(a.ifParams,"apiVersion",e)},expression:"ifParams.apiVersion"}},[t("a-radio",{attrs:{value:"V2"}},[a._v("V2")]),t("a-radio",{attrs:{value:"V3"}},[a._v("V3")])],1)],1)],1),t("a-col",{attrs:{span:"24"}},[t("a-form-model-item",{attrs:{label:"APIv2密钥",prop:"key"}},[t("a-input",{attrs:{placeholder:a.ifParams.key_ph,type:"textarea"},model:{value:a.ifParams.key,callback:function(e){a.$set(a.ifParams,"key",e)},expression:"ifParams.key"}})],1)],1),t("a-col",{attrs:{span:"24"}},[t("a-form-model-item",{attrs:{label:"APIv3秘钥",prop:"apiV3Key"}},[t("a-input",{attrs:{placeholder:a.ifParams.apiV3Key_ph,type:"textarea"},model:{value:a.ifParams.apiV3Key,callback:function(e){a.$set(a.ifParams,"apiV3Key",e)},expression:"ifParams.apiV3Key"}})],1)],1),t("a-col",{attrs:{span:"24"}},[t("a-form-model-item",{attrs:{label:"序列号",prop:"serialNo"}},[t("a-input",{attrs:{placeholder:a.ifParams.serialNo_ph,type:"textarea"},model:{value:a.ifParams.serialNo,callback:function(e){a.$set(a.ifParams,"serialNo",e)},expression:"ifParams.serialNo"}})],1)],1),t("a-col",{attrs:{span:"24"}},[t("a-form-model-item",{attrs:{label:"API证书(apiclient_cert.p12)",prop:"cert"}},[t("a-input",{attrs:{disabled:"disabled"},model:{value:a.ifParams.cert,callback:function(e){a.$set(a.ifParams,"cert",e)},expression:"ifParams.cert"}}),t("JeepayUpload",{attrs:{action:a.action,fileUrl:a.ifParams.cert},on:{uploadSuccess:function(e){return a.uploadSuccess(e,"cert")}},scopedSlots:a._u([{key:"uploadSlot",fn:function(e){var r=e.loading;return[t("a-button",{staticStyle:{marginTop:"5px"}},[t("a-icon",{attrs:{type:r?"loading":"upload"}}),a._v(" "+a._s(r?"正在上传":"点击上传")+" ")],1)]}}],null,!1,1271385614)})],1)],1),t("a-col",{attrs:{span:"24"}},[t("a-form-model-item",{attrs:{label:"证书文件(apiclient_cert.pem)",prop:"apiClientCert"}},[t("a-input",{attrs:{disabled:"disabled"},model:{value:a.ifParams.apiClientCert,callback:function(e){a.$set(a.ifParams,"apiClientCert",e)},expression:"ifParams.apiClientCert"}}),t("JeepayUpload",{attrs:{action:a.action,fileUrl:a.ifParams.apiClientCert},on:{uploadSuccess:function(e){return a.uploadSuccess(e,"apiClientCert")}},scopedSlots:a._u([{key:"uploadSlot",fn:function(e){var r=e.loading;return[t("a-button",{staticStyle:{marginTop:"5px"}},[t("a-icon",{attrs:{type:r?"loading":"upload"}}),a._v(" "+a._s(r?"正在上传":"点击上传")+" ")],1)]}}],null,!1,1271385614)})],1)],1),t("a-col",{attrs:{span:"24"}},[t("a-form-model-item",{attrs:{label:"私钥文件(apiclient_key.pem)",prop:"apiClientKey"}},[t("a-input",{attrs:{disabled:"disabled"},model:{value:a.ifParams.apiClientKey,callback:function(e){a.$set(a.ifParams,"apiClientKey",e)},expression:"ifParams.apiClientKey"}}),t("JeepayUpload",{attrs:{action:a.action,fileUrl:a.ifParams.apiClientKey},on:{uploadSuccess:function(e){return a.uploadSuccess(e,"apiClientKey")}},scopedSlots:a._u([{key:"uploadSlot",fn:function(e){var r=e.loading;return[t("a-button",{staticStyle:{marginTop:"5px"}},[t("a-icon",{attrs:{type:r?"loading":"upload"}}),a._v(" "+a._s(r?"正在上传":"点击上传")+" ")],1)]}}],null,!1,1271385614)})],1)],1)],1):2===a.mchType?t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:"12"}},[t("a-form-model-item",{attrs:{label:"子商户ID",prop:"subMchId"}},[t("a-input",{attrs:{placeholder:"请输入"},model:{value:a.ifParams.subMchId,callback:function(e){a.$set(a.ifParams,"subMchId",e)},expression:"ifParams.subMchId"}})],1)],1),t("a-col",{attrs:{span:"12"}},[t("a-form-model-item",{attrs:{label:"子账户appID(线上支付必填)",prop:"subMchAppId"}},[t("a-input",{attrs:{placeholder:"请输入"},model:{value:a.ifParams.subMchAppId,callback:function(e){a.$set(a.ifParams,"subMchAppId",e)},expression:"ifParams.subMchAppId"}})],1)],1)],1):a._e()],1),a.$access("ENT_MCH_PAY_CONFIG_ADD")?t("div",{staticClass:"drawer-btn-center"},[t("a-button",{style:{marginRight:"8px"},attrs:{icon:"close"},on:{click:a.onClose}},[a._v("取消")]),t("a-button",{attrs:{type:"primary",icon:"check",loading:a.btnLoading},on:{click:a.onSubmit}},[a._v("保存")])],1):a._e()],1)},i=[],n=(t("b64b"),t("c73b")),s=t("909a"),o=t("0fea"),u={components:{JeepayCard:n["a"],JeepayUpload:s["a"]},props:{callbackFunc:{type:Function,default:function(){return{}}}},data:function(){var a=this;return{btnLoading:!1,visible:!1,isAdd:!0,mchType:1,action:o["O"].cert,saveObject:{},ifParams:{apiVersion:"V2"},rules:{},ifParamsRules:{mchId:[{trigger:"blur",validator:function(e,t,r){1!==a.mchType||t||r(new Error("请输入微信支付商户号")),r()}}],appId:[{trigger:"blur",validator:function(e,t,r){1!==a.mchType||t||r(new Error("请输入应用AppID")),r()}}],appSecret:[{trigger:"blur",validator:function(e,t,r){a.isAdd&&1===a.mchType&&!t&&r(new Error("请输入应用AppSecret")),r()}}],key:[{trigger:"blur",validator:function(e,t,r){"V2"===a.ifParams.apiVersion&&a.isAdd&&1===a.mchType&&!t&&r(new Error("请输入API密钥")),r()}}],apiV3Key:[{trigger:"blur",validator:function(e,t,r){"V3"===a.ifParams.apiVersion&&a.isAdd&&1===a.mchType&&!t&&r(new Error("请输入API V3秘钥")),r()}}],serialNo:[{trigger:"blur",validator:function(e,t,r){"V3"===a.ifParams.apiVersion&&a.isAdd&&1===a.mchType&&!t&&r(new Error("请输入序列号")),r()}}],cert:[{trigger:"blur",validator:function(e,t,r){"V3"===a.ifParams.apiVersion&&a.isAdd&&!t&&r(new Error("请上传API证书(apiclient_cert.p12)")),r()}}],apiClientCert:[{trigger:"blur",validator:function(e,t,r){"V3"===a.ifParams.apiVersion&&a.isAdd&&!t&&r(new Error("请上传证书文件(apiclient_cert.pem)")),r()}}],apiClientKey:[{trigger:"blur",validator:function(e,t,r){"V3"!==a.ifParams.apiVersion||1!==a.mchType||a.ifParams.apiClientKey||r(new Error("请上传私钥文件(apiclient_key.pem)")),r()}}],subMchId:[{trigger:"blur",validator:function(e,t,r){2!==a.mchType||t||r(new Error("请输入子商户ID")),r()}}]}}},methods:{show:function(a,e){void 0!==this.$refs.infoFormModel&&this.$refs.infoFormModel.resetFields(),void 0!==this.$refs.mchParamFormModel&&this.$refs.mchParamFormModel.resetFields(),this.mchType=e.mchType,this.saveObject={infoId:a,ifCode:e.ifCode,state:0===e.ifConfigState?0:1},this.ifParams={apiVersion:"V2",appSecret:"",appSecret_ph:"请输入",key:"",key_ph:"请输入",apiV3Key:"",apiV3Key_ph:"请输入",serialNo:"",serialNo_ph:"请输入"},this.visible=!0,this.getMchPayConfig()},getMchPayConfig:function(){var a=this;Object(o["w"])(a.saveObject.infoId,a.saveObject.ifCode).then((function(e){e&&e.ifParams?(a.saveObject=e,a.ifParams=JSON.parse(e.ifParams),a.ifParams.appSecret_ph=a.ifParams.appSecret,a.ifParams.appSecret="",a.ifParams.key_ph=a.ifParams.key,a.ifParams.key="",a.ifParams.apiV3Key_ph=a.ifParams.apiV3Key,a.ifParams.apiV3Key="",a.ifParams.serialNo_ph=a.ifParams.serialNo,a.ifParams.serialNo="",a.isAdd=!1):void 0===e&&(a.isAdd=!0)}))},onSubmit:function(){var a=this,e=this;this.$refs.infoFormModel.validate((function(t){a.$refs.mchParamFormModel.validate((function(r){if(t&&r){e.btnLoading=!0;var i={};if(i.infoId=e.saveObject.infoId,i.ifCode=e.saveObject.ifCode,i.state=e.saveObject.state,i.remark=e.saveObject.remark,0===Object.keys(e.ifParams).length)return void a.$message.error("参数不能为空！");if(e.clearEmptyKey("appSecret"),e.clearEmptyKey("key"),e.clearEmptyKey("apiV3Key"),e.clearEmptyKey("serialNo"),i.ifParams=JSON.stringify(e.ifParams),0===Object.keys(i).length)return void a.$message.error("参数不能为空！");o["I"].add(o["e"],i).then((function(a){e.$message.success("保存成功"),e.visible=!1,e.btnLoading=!1,e.callbackFunc()}))}}))}))},clearEmptyKey:function(a){this.ifParams[a]||(this.ifParams[a]=void 0),this.ifParams[a+"_ph"]=void 0},uploadSuccess:function(a,e){this.ifParams[e]=a,this.$forceUpdate()},onClose:function(){this.visible=!1}}},l=u,c=t("2877"),p=Object(c["a"])(l,r,i,!1,null,"0925e25e",null);e["default"]=p.exports},e8c7:function(a,e,t){a.exports=t.p+"assets/add-icon.a2f73e90.svg"}}]);