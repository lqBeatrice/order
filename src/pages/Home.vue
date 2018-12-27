<template>
  <div class="home-container">
      <div class="header"><Header :username='_userName'/></div>
      <div class="main">
          <div class="label"></div>
          <router-view/>
      </div>
  </div>
</template>

<script>
  import Sider from '@/components/common/Sider.vue';
  import Header from '@/components/common/Header.vue';
  export default{
    data(){
      return{
        userName:this.$store.state.userinfo.name,
      }
    },
    computed:{
       _userName:function(){
         return this.userName;
       }
    },
    components:{
      Sider,Header
    },
    created(){
        let that = this;
        window.onbeforeunload=function(e){
            window.sessionStorage.setItem('userinfo',JSON.stringify(that.$store.state.userinfo));
        }
        window.onload=function(){
            that.$store.state.userinfo = JSON.parse(window.sessionStorage.getItem('userinfo'));
        }
    }
  }
</script>

<style lang="scss">
  .home-container{
    background-size:100% 100%;
    height:100%;
    width:100%;
      .header{
        width:100%;
        height: 60px;
        background-color: #0538408a;
        position:fixed;
        z-index:9;
      }
      .main{
        width:100%;
        height: 100%;
        padding-top: 60px;
        box-sizing:border-box;
        background-color: rgb(255, 208, 75);
        overflow: auto;
      }
  }
</style>