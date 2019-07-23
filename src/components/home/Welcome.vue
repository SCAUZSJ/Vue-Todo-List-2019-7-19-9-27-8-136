<template>
  <div style="margin-top:200px;">
    <el-row type="flex" justify="center" :gutter="10">
        <el-col :span="6">
            <el-input v-model="name" :autofocus="true"  @keyup.enter.native="signIn"></el-input>              
        </el-col>
        <el-col :span="2">
            <el-button @click="signIn" type="primary" >开始使用</el-button>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },

  components: {},

  computed: {},

  mounted() {},

  created() {},

  methods: {
    signIn() {
      this.$router.push({ name:"ToDoList",params:{name:this.name}});
    }
  },

  filters: {}
};
</script>
<style lang='scss' scoped>

</style>