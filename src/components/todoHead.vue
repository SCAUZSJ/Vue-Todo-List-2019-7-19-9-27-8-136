<template>
<div class="head">
  <p>Vue To Do List</p>
  <p>Simple Todo List with adding and filter by diff status.</p>
    <el-row :gutter="10">
      <el-col :span="18">
        <el-input v-model="newItem"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button @click="addItem">Add</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: ""
    };
  },

  components: {},

  computed: {},

  mounted(){},

  created(){},

  methods: {
      addItem() {
      if (this.newItem == undefined || this.newItem == "") {
        return;
      }
      this.$store.dispatch('addTodo',newItem);
      this.newItem = "";
    },
  },

};
</script>
<style lang='scss' scoped>

</style>