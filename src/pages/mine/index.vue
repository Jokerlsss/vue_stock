<template>
  <div class="container">
    <UserLoginInfo></UserLoginInfo>
    <operateMenu></operateMenu>
    <AssetProportion></AssetProportion>
  </div>
</template>

<script>
import UserLoginInfo from '@/components/UserLoginInfo'
import operateMenu from '@/components/operateMenu'
import AssetProportion from '@/components/AssetProportion'
export default {
  components: {
    UserLoginInfo,
    operateMenu,
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
