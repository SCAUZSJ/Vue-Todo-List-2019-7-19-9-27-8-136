<template>
  <div>
    <el-row type="flex" justify="center">
      <div class="todolist-pane">
        <div class="container">
          <todo-head></todo-head>
          <todo-content></todo-content>
          <todo-footer></todo-footer>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
import todoItem from "./todoItem";
import todoHead from './todoHead';
import todoContent from  './todoContent';
import todoFooter from './todoFooter';
export default {
  data() {
    return {
    };
  },

  components: {
    todoItem,
    todoHead,
    todoContent,
    todoFooter,
  },

  computed: {},
  created(){
    this.initData();
  },
  methods: {
    initData(){
       this.$store.dispatch('init');
    }
    
  }
};
</script>
<style lang='scss' >
@import "../style/style.scss";
</style>