<template>
  <div>
    <el-row
      :class="{'isCheck':item.complete}"
      @mouseenter.native="mouseEnter = true"
      @mouseleave.native="mouseEnter = false"
    >
      <el-col :span="1">
        <span class="text-index">{{(index+1)+"."}}</span>
      </el-col>
      <el-col :span="23">
        <el-checkbox v-model="item.complete"  @dblclick.native="changeEditIndex()" v-if="editIndex !== index" @change="check">
          <span class="text-content" >{{item.text}}</span>
        </el-checkbox>
        <el-input
          v-model="textInput"
          v-if="editIndex === index"
          @keyup.enter.native="editSubmit()"
          @blur="loseFocus"
        ></el-input>
        <i class="el-icon-delete icon"
          v-show="mouseEnter === true&&editIndex !=index"
          @click="remove()"
        ></i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["item", "index"],
  data() {
    return {
      mouseEnter: false,
      textInput:'',
      time:'',
      isDbCheck:false,
    };
  },

  components: {},

  computed: {
    editIndex(){
      return this.$store.getters.getEditIndex;
    },
 
  },

  created() {},

  methods: {
    remove() {
      this.$store.dispatch('deleteTodo',{index:this.index,id:this.item.id});
    },
    changeEditIndex(){
      clearTimeout(this.time);
      this.textInput = this.item.text;
      this.$store.commit('changeEditIndex',this.index);
    },
    editSubmit(){
      this.item.text = this.textInput;
      this.$store.dispatch('updateTodoTest',this.item);
    },
    // check(){
    //   this.$store.dispatch('updateTodoStatus',this.item);
    // },
    loseFocus(){
      this.$store.commit('changeEditIndex',-1);
    },
    check() {
      clearTimeout(this.time); 
      this.time = setTimeout(() => {
      this.$store.dispatch('updateTodoStatus',this.item);
      }, 300); 
    },
　
  },

  filters: {}
};
</script>
<style lang='scss' >
</style>