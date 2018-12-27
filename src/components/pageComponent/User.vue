<template>
  <div class="user">
      <el-table
    ref="multipleTable"
    :data="userData"
    tooltip-effect="dark"
    @selection-change="handleSelectionChange">
    >
      <el-table-column
        fixed
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="日期"
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="deleteS">批量删除</el-button>
    <el-button @click="add">添加</el-button>
  </div>
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
    <el-button type="primary" @click="updateUser">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userData: [{
          date: '2016-05-03',
          name: '王小虎111',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎222',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎33',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎44',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎55',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎111',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎222',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎33',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎44',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎55',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎111',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎222',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎33',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎44',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎55',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
        dialogUserFormVisible:false,
        userform: {
          name: '',
          date: '',
          address:'',
        },
        userIndex:0,
      }
  },
  methods:{
      handleEdit(index, row) {
        this.userform = row;
        this.userIndex = index;
        this.dialogUserFormVisible = true;
      },
      handleDelete(_index, row) {
        this.userData = this.userData.filter((item,index)=>index!==_index);
      },
      updateUser(){
        this.userData[this.index] = this.userform;
        this.dialogUserFormVisible = false;
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      deleteS(){
         
      },
      add(row){

      }
  },
  components:{
  }
}
</script>

<style lang="scss">
  .user{
    height:100%;
    padding:30px;
     .el-table{
       width:70%;
       height:100%;
       left:15%;
     }

  }
</style>
