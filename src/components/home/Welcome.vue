<template>
  <div style="margin-top:200px;" class="wel">
    <a-row type="flex" justify="center" :gutter="10">
        <a-col :span="6">
            <a-input  size="large" v-model="name"   @keyup.enter.native="signIn"></a-input>              
        </a-col>
        <a-col :span="2" >
            <a-button @click="signIn" type="primary" >开始使用</a-button>
        </a-col>
      </a-row>
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
@import "../../style/home.scss";
</style>