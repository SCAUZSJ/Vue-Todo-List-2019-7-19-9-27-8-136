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
        <el-checkbox v-model="item.complete" @dblclick.native="changeEditIndex()" v-if="editIndex != index" @change="check">
          <span class="text-content" >{{item.text}}</span>
        </el-checkbox>
        <el-input
          :ref="refKey"
          v-model="textInput"
          v-if="editIndex == index"
          @keyup.enter.native="editSubmit()"
          @blur="loseFocus"
        ></el-input>
        <i class="el-icon-delete icon"
          v-show="mouseEnter == true&&editIndex !=index"
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
      textInput:''
    };
  },

  components: {},

  computed: {
    editIndex(){
      return this.$store.getters.getEditIndex;
    },
    refKey(){
      return this.index+Math.random();
    }
  },

  created() {},

  methods: {
    remove() {
      this.$store.dispatch('deleteTodo',{index:this.index,id:this.item.id});
    },
    changeEditIndex(){
      this.textInput = this.item.text;
      let ref = this.refKey;
      // this.$refs.ref.el.querySelector('input').focus();
      this.$store.commit('changeEditIndex',this.index);
    },
    editSubmit(){
      this.item.text = this.textInput;
      this.$store.dispatch('updateTodoTest',this.item);
    },
    check(){
      this.$store.dispatch('updateTodoStatus',this.item);
    },
    loseFocus(){
      this.$store.context.commit('changeEditIndex',-1);
    }
  },

  filters: {}
};
</script>
<style lang='scss' >
@import "../style/style.scss";
</style>