/**
* 全局配置信息， 包含网站标题，  动态组件定义
*
* @author terrfly
* @site https://www.jeepay.vip
* @date 2021/5/8 07:18
*/

/** 应用配置项 **/
export default {
  APP_TITLE: 'Jeepay商户系统', // 设置浏览器title
  ACCESS_TOKEN_NAME: 'iToken' // 设置请求token的名字， 用于请求header 和 localstorage中存在名称
}

/**
 * 与后端开发人员的路由名称及配置项
 * 组件名称 ：{ 默认跳转路径（如果后端配置则已动态配置为准）， 组件渲染 }
 * */
export const asyncRouteDefine = {

  'CurrentUserInfo': { defaultPath: '/current/userinfo', component: () => import('@/views/current/UserinfoPage') }, // 用户设置

  'MainPage': { defaultPath: '/main', component: () => import('@/views/dashboard/Analysis') },
  'SysUserPage': { defaultPath: '/users', component: () => import('@/views/sysuser/SysUserPage') },
  'RolePage': { defaultPath: '/roles', component: () => import('@/views/role/RolePage') },

  'MchAppPage': { defaultPath: '/apps', component: () => import ('@/views/mchApp/List') }, // 商户应用列表
  'PayTestPage': { defaultPath: '/paytest', component: () => import ('@/views/payTest/PayTest') }, // 支付测试
  'MchTransferPage': { defaultPath: '/doTransfer', component: () => import ('@/views/transfer/MchTransferPage') }, // 转账

  'PayOrderListPage': { defaultPath: '/payOrder', component: () => import('@/views/order/pay/PayOrderList') }, // 支付订单列表
  'WithdrawOrderListPage': { defaultPath: '/withdrawOrder', component: () => import('@/views/order/withdraw/WithdrawOrderList') }, // 提现订单列表
  'RefundOrderListPage': { defaultPath: '/refundOrder', component: () => import('@/views/order/refund/RefundOrderList') }, // 退款订单列表
  'TransferOrderListPage': { defaultPath: '/transferOrder', component: () => import('@/views/order/transfer/TransferOrderList') }, // 转账订单

  'DivisionReceiverGroupPage': { defaultPath: '/divisionReceiverGroup', component: () => import('@/views/division/group/DivisionReceiverGroupPage') }, // 分账账号组管理
  'DivisionReceiverPage': { defaultPath: '/divisionReceiver', component: () => import('@/views/division/receiver/DivisionReceiverPage') }, // 分账账号管理
  'DivisionRecordPage': { defaultPath: '/divisionRecord', component: () => import('@/views/division/record/DivisionRecordPage') } // 分账记录

}
