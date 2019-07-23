<template>
  <div>
     <el-row class="nav-head">
       <i class="el-icon-back" @click="back"></i>
       <span>Hello {{name}}</span>
     </el-row>
     <el-row>
       <el-col :span="6" class="left-menu">
         <span  @click="jump('todolist')" :class="{'focus':index === 'todolist'}">TO DO LIST</span>
         <span  @click="jump('info')" :class="{'focus':index == 'info'}">MY INFO</span>
       </el-col>
       <el-col :span="18">
         <router-view></router-view>
       </el-col>
     </el-row>
  </div>
</template>

<script>
export default {
  props:['name'],
  data() {
    return {
      index:'todolist',

    };
  },

  components: {},

  computed: {},

  mounted() {},

  created() {
    // this.name = this.$route.params.name;
  },

  methods: {
    back(){
      this.$router.go(-1);
    },
    jump(val){
      if(val === 'todolist'){
        this.$router.push({name:'ToDoList'});
        this.index = 'todolist';
      }else{
        this.$router.push({name:'Info',params:{name:this.name}});
        this.index = 'info';
      }
    }
  },

  filters: {}
};
</script>
<style lang='scss'>
*{
  margin:0;
  padding:0;
}
.nav-head{
  position: relative;
  background: #73d8ff;
  height:80px;
  & i{
    font-size:60px;
    margin-left:20px;
    line-height: 80px;
    &:hover{
      cursor: pointer;
    }
  }
  & span{
    position: absolute;
    right:30px;
    font-size:40px;
    line-height: 80px;
  }

}
.left-menu{
  & span{
    display: block;
    width:100%;
    height:160px;
    text-align: center;
    line-height: 160px;
    font-size:30px;
    color:#333;
    border-radius: 10px;
    &:hover{
      cursor: pointer;
      background: #fff1fd;
      transform: scale(1.1);
    }

  }
  .focus{
    background: #e8cfe5;
      color:#fff;
    
  }
}
</style>