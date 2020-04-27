<template>
  <div class="container">
    <UserLoginInfo></UserLoginInfo>
    <UserOperateMenu></UserOperateMenu>
    <AssetProportion></AssetProportion>
    <AssetProportionFromRisk></AssetProportionFromRisk>
    <AceAsset></AceAsset>
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
export default {
  components: {
    UserLoginInfo,
    UserOperateMenu,
    AssetProportion,
    AceAsset,
    BottomSpace,
    AssetProportionFromRisk
  },
  methods: {

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
