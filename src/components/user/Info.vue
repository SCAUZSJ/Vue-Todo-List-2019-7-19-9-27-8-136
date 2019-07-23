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
<style lang='scss'>
@import "../../style/style.scss";
</style>