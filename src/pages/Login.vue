<template>
  <div class="login">
    <div class="login-form">
      <el-form :rules="rules" :label-position="labelPosition"  ref="formLogin" :model="formLogin">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="formLogin.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input type="password" v-model="formLogin.pwd"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="formLogin.code"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('formLogin')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLogin: {
          name: '',
          pwd: '',
          code: '',
          age:'',
        },
        rules:{
           name: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          code: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],

        }
      };
    },
    methods:{
      
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let userinfo = {name:this.formLogin.name};
            this.$store.dispatch('recordUser', userinfo);
            this.$router.push({path:'/home/order'})
          } else {
            this.$message({
            message: '请填写正确的账户和密码',
            type: 'error',
          });
          }
        });
      },
      ...mapActions(['withCache']),
    }
  }
</script>

<style lang="scss" scoped>
  .login{
    background-image: url('../assets/imgs/login-bg.jpg'); 
    background-size:100% 100%;
    background-repeat: no-repeat;
    height:100%;
    width:100%;
    position:absolute;
    min-width: 1200px;
    .login-form{
      width:300px;
      right:30%;
      bottom:20%;
      position:absolute;
      background-color: aquamarine;
      padding:20px;
      border-radius: 4px;
    }
  }
</style>

