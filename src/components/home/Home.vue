<template>
  <div>
     <el-row class="nav-head">
       <i class="el-icon-back" @click="back" ></i>
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
  },

  methods: {
    back(){
      this.$alert('确认返回？', '提醒', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.go(-1);
          }
      });
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
@import "../../style/home.scss";
</style>