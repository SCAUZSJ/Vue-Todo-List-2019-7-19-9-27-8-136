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
        <el-checkbox v-model="item.isComplete" @dblclick.native="changeEditIndex()" v-if="editIndex != index">
          <span class="text-content" >{{item.text}}</span>
        </el-checkbox>
        <el-input
          v-model="item.text"
          v-if="editIndex == index"
          @keyup.enter.native="editSubmit()"
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
    };
  },

  components: {},

  computed: {
    editIndex(){
      return this.$store.getters.getEditIndex;
    }
  },

  created() {},

  methods: {
    remove() {
      this.$store.commit('remove',this.index);
    },
    changeEditIndex(){
      this.$store.commit('changeEditIndex',this.index);
    },
    editSubmit(){
      this.$store.commit('changeEditIndex',-1);
    }
  },

  filters: {}
};
</script>
<style lang='scss' >
@import "../style/style.scss";
</style>