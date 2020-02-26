<template>
  <div class="container">
    <UserLoginInfo></UserLoginInfo>
    <UserOperateMenu></UserOperateMenu>
    <AssetProportion></AssetProportion>
  </div>
</template>

<script>
import UserLoginInfo from '@/components/UserLoginInfo'
import UserOperateMenu from '@/components/UserOperateMenu'
import AssetProportion from '@/components/AssetProportion'
export default {
  components: {
    UserLoginInfo,
    UserOperateMenu,
    AssetProportion
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
