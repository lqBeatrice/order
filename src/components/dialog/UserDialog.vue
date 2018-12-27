<template>
  <el-dialog title="用户管理" :visible.sync="dialogUserFormVisible">
  <el-form :model="userform">
    <el-form-item label="用户名" >
      <el-input v-model="userform.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="用户地址" >
      <el-input v-model="userform.address" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="创建时间" >
      <el-input v-model="userform.date" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogUserFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogUserFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</template>
