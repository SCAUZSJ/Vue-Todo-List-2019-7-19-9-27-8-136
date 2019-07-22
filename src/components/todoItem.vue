<template>
  <div>
    <el-row
      :class="{'isCheck':item.isComplete}"
      @mouseenter.native="mouseEnter = true"
      @mouseleave.native="mouseEnter = false"
    >
      <el-col :span="1">
        <span class="text-index">{{(index+1)+"."}}</span>
      </el-col>
      <el-col :span="23">
        <el-checkbox v-model="item.isComplete" @dblclick.native="editing = true" v-if="editing != true">
          <span class="text-content" >{{item.text}}</span>
        </el-checkbox>
        <el-input
          v-model="item.text"
          v-if="editing == true"
          @keyup.enter.native="editing = false"
        ></el-input>
        <i class="el-icon-delete icon"
          v-show="mouseEnter == true&&editing !=true"
          @click="remove()"
        ></i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props:['item','index'],
  data() {
    return {
      mouseEnter:false,
      editing:false,
    };
  },

  components: {},

  computed: {},


  created() {},

  methods: {

    remove(){
      this.$emit('remove',this.index)
    }
  },

  filters: {}
};
</script>
<style lang='scss' >
@import "../style/style.scss";
</style>