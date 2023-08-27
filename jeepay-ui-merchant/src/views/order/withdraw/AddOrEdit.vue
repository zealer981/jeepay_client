<template>
  <a-drawer
    :visible="visible"
    :title="'我要提现'"
    width="40%"
    :maskClosable="false"
    @close="onClose">

    <a-form-model ref="infoFormModel" :model="saveObject" layout="vertical" :rules="rules">

      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-model-item label="持卡人姓名" prop="accountName">
            <a-input v-model="saveObject.accountName" placeholder="请输入" />
          </a-form-model-item>
        </a-col>
        <a-col :span="12">
          <a-form-model-item label="开户行" prop="bankName">
            <a-input v-model="saveObject.bankName" placeholder="请输入" />
          </a-form-model-item>
        </a-col>
        <a-col :span="12">
          <a-form-model-item label="卡号" prop="cardNo">
            <a-input v-model="saveObject.cardNo" placeholder="请输入" />
          </a-form-model-item>
        </a-col>
        <a-col :span="12">
          <a-form-model-item label="提现金额" prop="amount">
            <a-input v-model="saveObject.amount" placeholder="请输入" />
          </a-form-model-item>
        </a-col>
      </a-row>
    </a-form-model>

    <div class="drawer-btn-center">
      <a-button @click="onClose" icon="close" :style="{ marginRight: '8px' }">取消</a-button>
      <a-button type="primary" @click="onSubmit" icon="check" >确认</a-button>
    </div>

  </a-drawer>
</template>

<script>
import { API_URL_BALANCE, API_URL_WITHDRAW_ORDER_CREATE, req } from '@/api/manage'

export default {
  props: {
    callbackFunc: { type: Function, default: () => () => ({}) }
  },

  data () {
    return {
      isAdd: true, // 新增 or 修改
      visible: false, // 抽屉开关
      saveObject: {}, // 数据对象
      balance: 0,
      rules: {
        accountName: [{ required: true, message: '请输入持卡人姓名', trigger: 'blur' }],
        bankName: [{ required: true, message: '请输入开户行', trigger: 'blur' }],
        cardNo: [{ required: true, pattern: /^[0-9]+$/, message: '请输入合法的卡号', trigger: 'blur' }],
        amount: [{ required: true, pattern: /^[0-9]+(.[0-9]{2})?$/, message: '请输入合法的提现金额', trigger: 'blur' },
          {
            validator: (rule, value, callBack) => {
              if (value < 0.01 || value > this.balance / 100) {
                callBack('提现金额不能小于0.01，或者大于当前余额')
              }
              callBack()
            }
          }]
      }
    }
  },
  methods: {
    // 抽屉显示
    show () {
      const that = this
      req.list(API_URL_BALANCE).then(data => {
        that.balance = data
      })
       // 数据清空
      this.saveObject = {
        'accountName': '',
        'bankName': '',
        'cardNo': '',
        'amount': 0
      }

      if (this.$refs.infoFormModel !== undefined) {
        this.$refs.infoFormModel.resetFields()
      }
      this.visible = true // 展示弹层信息
    },
    // 表单提交
    onSubmit () {
      const that = this
      this.$refs.infoFormModel.validate(valid => {
        if (valid) { // 验证通过
          const amount = that.saveObject.amount * 100
          that.saveObject.amount = amount
          // delete that.saveObject.appSecret_ph
          // 请求接口
          if (that.isAdd) {
            req.add(API_URL_WITHDRAW_ORDER_CREATE, that.saveObject).then(res => {
              that.$message.success('新增成功')
              that.visible = false
              that.callbackFunc() // 刷新列表
            })
          }
        }
      })
    },
    onClose () {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
</style>
