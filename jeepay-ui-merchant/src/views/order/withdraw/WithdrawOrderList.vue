<template>
  <page-header-wrapper>
    <a-card>
      <div class="table-page-search-wrapper">
        <a-form layout="inline" class="table-head-ground">
          <div class="table-layer">
            <!--            <jeepay-text-up :placeholder="'支付/商户/渠道订单号'" :msg="searchData.mchNo" v-model="searchData.mchNo" />-->
            <a-form-item label="" class="table-head-layout" style="max-width:350px;min-width:300px">
              <a-range-picker
                  @change="onChange"
                  :show-time="{ format: 'HH:mm:ss' }"
                  format="YYYY-MM-DD HH:mm:ss"
                  :disabled-date="disabledDate"
              >
                <a-icon slot="suffixIcon" type="sync" />
              </a-range-picker>
            </a-form-item>
            <a-form-item label="" class="table-head-layout">
              <a-select v-model="searchData.state" placeholder="支付状态" default-value="">
                <a-select-option value="">全部</a-select-option>
                <a-select-option value="0">待审核</a-select-option>
                <a-select-option value="1">审核通过</a-select-option>
                <a-select-option value="2">驳回</a-select-option>
              </a-select>
            </a-form-item>
            <span class="table-page-search-submitButtons">
              <a-button type="primary" icon="search" @click="queryFunc" :loading="btnLoading">搜索</a-button>
              <a-button style="margin-left: 8px" icon="reload" @click="() => this.searchData = {}">重置</a-button>
            </span>
          </div>
        </a-form>
        <a-col :sm="24">
          <a-descriptions>
            <a-descriptions-item label="当前余额">
              ￥{{ balance }}
            </a-descriptions-item>
          </a-descriptions>
        </a-col>
        <div>
          <!--          v-if="$access('ENT_MCH_APP_ADD')"-->
          <a-button type="primary" icon="plus" @click="addFunc" class="mg-b-30">新增</a-button>
        </div>
      </div>

      <!-- 列表渲染 -->
      <JeepayTable
          @btnLoadClose="btnLoading=false"
          ref="infoTable"
          :initData="true"
          :reqTableDataFunc="reqTableDataFunc"
          :tableColumns="tableColumns"
          :searchData="searchData"
          rowKey="orderId"
          :tableRowCrossColor="true"
      >
        <template slot="amountSlot" slot-scope="{record}"><b>￥{{ (record.amount/100).toFixed(2) }}</b></template> <!-- 自定义插槽 -->
        <template slot="stateSlot" slot-scope="{record}">
          <a-tag
              :key="record.state"
              :color="record.state === 0?'blue':record.state === 1?'green':record.state === 2?'orange':'volcano'"
          >
            {{ record.state === 0?'待审核':record.state === 1?'审核通过':record.state === 2?'驳回':'未知' }}
          </a-tag>
        </template>
        <template slot="opSlot" slot-scope="{record}">  <!-- 操作列插槽 -->
          <JeepayTableColumns>
            <!--            v-if="$access('ENT_PAY_ORDER_VIEW')"-->
            <a-button type="link" @click="detailFunc(record.orderId)">详情</a-button>
          </JeepayTableColumns>
        </template>
      </JeepayTable>
    </a-card>
    <!-- 日志详情抽屉 -->
    <template>
      <a-drawer
          width="50%"
          placement="right"
          :closable="true"
          :visible="visible"
          :title="visible === true? '订单详情':''"
          @close="onClose"
      >
        <a-row justify="space-between" type="flex">
          <a-col :sm="12">
            <a-descriptions>
              <a-descriptions-item label="订单状态">
                <a-tag :color="detailData.state === 0?'blue':detailData.state === 1?'green':detailData.state === 2?'orange':'volcano'">
                  {{ detailData.state === 0?'待审核':detailData.state === 1?'审核通过':detailData.state === 2?'驳回':'未知' }}
                </a-tag>
              </a-descriptions-item>
            </a-descriptions>
          </a-col>
          <!--          <a-col :sm="12">-->
          <!--            <a-descriptions>-->
          <!--              <a-descriptions-item label="商户名称">-->
          <!--                {{ detailData.mchName }}-->
          <!--              </a-descriptions-item>-->
          <!--            </a-descriptions>-->
          <!--          </a-col>-->
          <!--          <a-col :sm="12">-->
          <!--            <a-descriptions>-->
          <!--              <a-descriptions-item label="商户编号">-->
          <!--                {{ detailData.mchNo }}-->
          <!--              </a-descriptions-item>-->
          <!--            </a-descriptions>-->
          <!--          </a-col>-->
          <a-col :sm="12">
            <a-descriptions>
              <a-descriptions-item label="订单号">
                {{ detailData.orderId }}
              </a-descriptions-item>
            </a-descriptions>
          </a-col>
          <a-col :sm="12">
            <a-descriptions>
              <a-descriptions-item label="提现金额">
                {{ (detailData.amount/100).toFixed(2) }}
              </a-descriptions-item>
            </a-descriptions>
          </a-col>
<!--          <a-col :sm="12">-->
<!--            <a-descriptions>-->
<!--              <a-descriptions-item label="商户余额">-->
<!--                {{}}-->
<!--              </a-descriptions-item>-->
<!--            </a-descriptions>-->
<!--          </a-col>-->
          <a-col :sm="12">
            <a-descriptions>
              <a-descriptions-item label="提现时间">
                {{ detailData.createdAt }}
              </a-descriptions-item>
            </a-descriptions>
          </a-col>
          <a-col :sm="12">
            <a-descriptions>
              <a-descriptions-item label="提交人">
                {{ detailData.issueUser }}
              </a-descriptions-item>
            </a-descriptions>
          </a-col>
          <a-col :sm="12">
            <a-descriptions>
              <a-descriptions-item label="银行卡">
                {{ detailData.cardNo }}
              </a-descriptions-item>
            </a-descriptions>
          </a-col>
          <a-col :sm="12">
            <a-descriptions>
              <a-descriptions-item label="开户行">
                {{ detailData.bankName }}
              </a-descriptions-item>
            </a-descriptions>
          </a-col>
          <a-col :sm="12">
            <a-descriptions>
              <a-descriptions-item label="持卡人姓名">
                {{ detailData.accountName }}
              </a-descriptions-item>
            </a-descriptions>
          </a-col>
          <a-divider />
          <div v-if="detailData.state != 0">
            <a-col :sm="12">
              <a-descriptions>
                <a-descriptions-item label="审核时间">
                  {{ detailData.updatedAt }}
                </a-descriptions-item>
              </a-descriptions>
            </a-col>
            <a-col :sm="12">
              <a-descriptions>
                <a-descriptions-item label="审核人">
                  {{ detailData.auditUser }}
                </a-descriptions-item>
              </a-descriptions>
            </a-col>
          </div>
        </a-row>
      </a-drawer>
    </template>
    <!-- 新增提现  -->
    <WithDrawAddOrEdit ref="withDrawAddOrEdit" :callbackFunc="searchFunc"/>
  </page-header-wrapper>
</template>
<script>
import JeepayTextUp from '@/components/JeepayTextUp/JeepayTextUp' // 文字上移组件
import JeepayTable from '@/components/JeepayTable/JeepayTable'
import JeepayTableColumns from '@/components/JeepayTable/JeepayTableColumns'
import { API_URL_WITHDRAW_ORDER_LIST, API_URL_BALANCE, req } from '@/api/manage'
import WithDrawAddOrEdit from './AddOrEdit'
import moment from 'moment'

// eslint-disable-next-line no-unused-vars
const tableColumns = [
  { key: 'orderId', title: '订单号', dataIndex: 'orderId', width: 210 },
  // { key: 'mchNo', title: '商户号', dataIndex: 'mchNo', width: 210 },
  // { key: 'mchName', title: '商户名称', dataIndex: 'mchName', ellipsis: true, width: 100 },
  { key: 'createdAt', dataIndex: 'createdAt', title: '提交日期', width: 120 },
  { key: 'accountName', dataIndex: 'accountName', title: '提交人', width: 120 },
  { key: 'amount', title: '提现金额', width: 108, scopedSlots: { customRender: 'amountSlot' } },
  { key: 'state', title: '状态', scopedSlots: { customRender: 'stateSlot' }, width: 100 },
  { key: 'op', title: '操作', width: 120, fixed: 'right', align: 'center', scopedSlots: { customRender: 'opSlot' } }
]

export default {
  name: 'IsvListPage',
  components: { JeepayTable, JeepayTableColumns, JeepayTextUp, WithDrawAddOrEdit },
  data () {
    return {
      btnLoading: false,
      tableColumns: tableColumns,
      searchData: {},
      createdStart: '', // 选择开始时间
      createdEnd: '', // 选择结束时间
      visible: false,
      detailData: {},
      balance: 0
    }
  },
  computed: {
  },
  mounted () {
    const that = this
    req.list(API_URL_BALANCE).then(data => {
      that.balance = (data / 100).toFixed(2)
    })
  },
  methods: {
    queryFunc () {
      this.btnLoading = true
      this.$refs.infoTable.refTable(true)
    },
    // 请求table接口数据
    reqTableDataFunc: (params) => {
      return req.list(API_URL_WITHDRAW_ORDER_LIST, params)
    },
    searchFunc: function () { // 点击【查询】按钮点击事件
      this.$refs.infoTable.refTable(true)
    },
    detailFunc: function (recordId) {
      const that = this
      req.getById(API_URL_WITHDRAW_ORDER_LIST, recordId).then(res => {
        that.detailData = res
      })
      this.visible = true
    },
    addFunc: function () { // 业务通用【新增】 函数
      this.$refs.withDrawAddOrEdit.show()
    },
    moment,
    onChange (date, dateString) {
      this.searchData.createdStart = dateString[0] // 开始时间
      this.searchData.createdEnd = dateString[1] // 结束时间
    },
    disabledDate (current) { // 今日之后日期不可选
      return current && current > moment().endOf('day')
    },
    onClose () {
      this.visible = false
      this.detailData = {}
    }
  }
}
</script>
<style lang="less" scoped>
.order-list {
  -webkit-text-size-adjust:none;
  font-size: 12px;
  display: flex;
  flex-direction: column;

  p {
    white-space:nowrap;
    span {
      display: inline-block;
      font-weight: 800;
      height: 16px;
      line-height: 16px;
      width: 35px;
      border-radius: 5px;
      text-align: center;
      margin-right: 2px;
    }
  }
}
</style>
