<template>
  <div class="info">
    <el-row type="flex" justify="center">
        <el-avatar :size="250" :src="url" shape="square"></el-avatar>
    </el-row>
    <p>{{name}}</p>
    <p>{{phone}}</p>
  </div>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      url:require("../../assets/touxiang.jpg"),
      phone: "13628468759"
    };
  },

  components: {},

  computed: {},

  mounted() {},

  created() {},

  methods: {},

  filters: {}
};
</script>
<style lang='scss' scoped>
.info {
    padding-top: 50px;
  p {
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
  }
  .el-avatar {
    text-align: center;
  }
}
</style>