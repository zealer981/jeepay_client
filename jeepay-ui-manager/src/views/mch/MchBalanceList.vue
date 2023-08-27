<template>
  <page-header-wrapper>
    <a-card>
      <div class="table-page-search-wrapper">
        <a-form layout="inline" class="table-head-ground">
          <div class="table-layer">
            <jeepay-text-up :placeholder="'商户号'" :msg="searchData.mchNo" v-model="searchData.mchNo" />
            <jeepay-text-up :placeholder="'商户名称'" :msg="searchData.mchName" v-model="searchData.mchName" />
            <span class="table-page-search-submitButtons">
              <a-button type="primary" icon="search" @click="queryFunc" :loading="btnLoading">搜索</a-button>
              <a-button style="margin-left: 8px" icon="reload" @click="() => this.searchData = {}">重置</a-button>
            </span>
          </div>
          <a-col :sm="24">
            <a-descriptions>
              <a-descriptions-item label="平台余额">
                ￥{{ balance }}
              </a-descriptions-item>
            </a-descriptions>
          </a-col>
        </a-form>
      </div>
      <!-- 列表渲染 -->
      <JeepayTable
          @btnLoadClose="btnLoading=false"
          ref="infoTable"
          :initData="true"
          :reqTableDataFunc="reqTableDataFunc"
          :tableColumns="tableColumns"
          :searchData="searchData"
          rowKey="refundOrderId"
          :tableRowCrossColor="true"
      >
        <template slot="balanceSlot" slot-scope="{record}"><b>￥{{ (record.balance/100).toFixed(2) }}</b></template> <!-- 自定义插槽 -->
      </JeepayTable>
    </a-card>
  </page-header-wrapper>
</template>
<script>
import JeepayTable from '@/components/JeepayTable/JeepayTable'
import JeepayTextUp from '@/components/JeepayTextUp/JeepayTextUp' // 文字上移组件
import JeepayTableColumns from '@/components/JeepayTable/JeepayTableColumns'
import { API_URL_MCH_BALANCE, API_URL_BALANCE_TOTAL, req } from '@/api/manage'

// eslint-disable-next-line no-unused-vars
const tableColumns = [
  { key: 'infoId', title: '商户号', dataIndex: 'infoId' },
  { key: 'infoName', title: '商户名称', dataIndex: 'infoName' },
  { key: 'balance', title: '余额', scopedSlots: { customRender: 'balanceSlot' }, width: 220 }
]

export default {
  name: 'IsvListPage',
  components: { JeepayTable, JeepayTableColumns, JeepayTextUp },
  data () {
    return {
      btnLoading: false,
      balance: 0,
      tableColumns: tableColumns,
      searchData: {}
    }
  },
  mounted () {
    const that = this
    req.list(API_URL_BALANCE_TOTAL).then(data => {
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
      return req.list(API_URL_MCH_BALANCE, params)
    },
    searchFunc: function () { // 点击【查询】按钮点击事件
      this.$refs.infoTable.refTable(true)
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
