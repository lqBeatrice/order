<template>
  <div class="header">
    <el-menu 
      router 
      background-color="#545c64"
      :default-active="$route.path" 
      mode="horizontal" 
      text-color="#fff"
      active-text-color="#ffd04b"
      class="el-menu-order">
      <el-menu-item index="/home/user">
        <i class="el-icon-location"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/home/order">
        <i class="el-icon-location"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="/home/menu">
        <i class="el-icon-document"></i>
        <span slot="title">菜品管理</span>
      </el-menu-item>
      <el-menu-item index="/home/pay">
        <i class="el-icon-setting"></i>
        <span slot="title">支付管理</span>
      </el-menu-item>
      <el-menu-item index="/home/comment">
        <i class="el-icon-setting"></i>
        <span slot="title">评价管理</span>
      </el-menu-item>
      <!-- <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">{{$store.state.userinfo.name||'请登录'}}</span>
      </el-menu-item> -->
      <el-menu-item index="/login">
        <el-button type="primary" class="login">登录</el-button>
      </el-menu-item>
      
    </el-menu>
    
    
  </div>  
</template>

<script>
export default{
  props:['username'],
}
</script>

<style lang="scss">
  .header{
    width:100%;
    height:100%;
    .el-menu-order{
      display: flex;
      flex-direction:row;
      justify-content:center;
      border-bottom:1px solid #41869ad4;
    }
  }
</style>
