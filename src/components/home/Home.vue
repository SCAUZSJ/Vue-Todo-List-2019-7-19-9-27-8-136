<template>
  <div>
     <a-row class="nav-head">
       <i class="el-icon-back" @click="visible = true" ></i>
       <a-modal title="提示" v-model="visible"  @ok="back">
         <template slot="footer">
        <a-button key="back" @click="visible = false">取消</a-button>
        <a-button key="submit" type="primary"  @click="back">
          确定
        </a-button>
      </template>
         <p>是否返回WELCOME页面？</p>
         
       </a-modal>
       <span>Hello {{name}}</span>
     </a-row>
     <a-row>
       <a-col :span="6" class="left-menu">
         <span  @click="jump('todolist')" :class="{'focus':index === 'todolist'}">TO DO LIST</span>
         <span  @click="jump('info')" :class="{'focus':index == 'info'}">MY INFO</span>
       </a-col>
       <a-col :span="18">
         <router-view></router-view>
       </a-col>
     </a-row>
  </div>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      index: "todolist",
      visible: false
    };
  },

  components: {},

  computed: {},

  mounted() {},

  created() {},

  methods: {
    back() {
      this.visible = false;
      this.$router.push({ name:"Welcome",params:{name:this.name}});
    },
    jump(val) {
      if (val === "todolist") {
        this.$router.push({ name: "ToDoList" });
        this.index = "todolist";
      } else {
        this.$router.push({ name: "Info", params: { name: this.name } });
        this.index = "info";
      }
    }
  },

  filters: {}
};
</script>
<style lang='scss'>
@import "../../style/home.scss";
</style>