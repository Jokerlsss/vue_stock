<template>
  <div class="container">
    <UserLoginInfo :investmentCharacter="investmentCharacter"></UserLoginInfo>
    <UserOperateMenu></UserOperateMenu>
    <AssetProportion :proportionOfAssets="proportionOfAssets"></AssetProportion>
    <AssetProportionFromRisk
      :proportionOfAssetsByRisk="proportionOfAssetsByRisk"
      :suggestion="suggestion"
    ></AssetProportionFromRisk>
    <AceAsset></AceAsset>
    <ExitLogin></ExitLogin>
    <BottomSpace></BottomSpace>
  </div>
</template>

<script>
import UserLoginInfo from '@/components/UserLoginInfo'
import UserOperateMenu from '@/components/UserOperateMenu'
import AssetProportion from '@/components/AssetProportion'
import AssetProportionFromRisk from '@/components/AssetProportionFromRisk'
import AceAsset from '@/components/AceAsset'
import BottomSpace from '@/components/BottomSpace'
import ExitLogin from '@/components/ExitLogin'

import globalStore from '../../stores/global-stores'
export default {
  components: {
    UserLoginInfo,
    UserOperateMenu,
    AssetProportion,
    AceAsset,
    BottomSpace,
    AssetProportionFromRisk,
    ExitLogin
  },
  onShow () {
    this.getTotalEarn()
    this.getTotalEarnByRisk()
    this.getUserInfo()
  },
  onUnload () {
    this.investmentCharacter = ''
    this.proportionOfAssets = ''
    this.proportionOfAssetsByRisk = ''
  },
  methods: {
    // 获取用户信息
    getUserInfo () {
      this.$httpWX.get({
        url: '/user/loadUserByName',
        data: {
          userName: globalStore.state.userName
        }
      }).then(res => {
        // 投资性格
        console.log(res)
        this.investmentCharacter = res.investmentCharacter
      })
    },
    // 获取各类型资产 => 计算占比
    getTotalEarn () {
      this.$httpWX.get({
        url: '/personalFinancialAssets/getSumOfAssets',
        data: {
          userid: globalStore.state.userID
        }
      }).then(res => {
        console.log('getTotalEarn', res)
        this.proportionOfAssets = res
      })
    },
    // 获取各类型资产
    getTotalEarnByRisk () {
      this.$httpWX.get({
        url: '/personalFinancialAssets/getAssetsFromRisk',
        data: {
          userid: globalStore.state.userID
        }
      }).then(res => {
        console.log('getTotalEarnByRisk', res)
        this.proportionOfAssetsByRisk = res.assetsList
        this.suggestion = res.suggestion
      })
    }
  },
  data () {
    return {
      proportionOfAssets: [
        // {
        //   assetItem: 0,
        //   progressItem: '0%',
        //   projectItem: '股票',
        //   proportionItem: '0%'
        // },
        // {
        //   assetItem: 0,
        //   progressItem: '0%',
        //   projectItem: '基金',
        //   proportionItem: '0%'
        // },
        // {
        //   assetItem: 0,
        //   progressItem: '0%',
        //   projectItem: '黄金',
        //   proportionItem: '0%'
        // }
      ],
      proportionOfAssetsByRisk: '',

      // 用户的投资性格
      investmentCharacter: ''
    }
  }
}
</script>

<style>
page {
  background-color: #12121e;
}
</style>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
