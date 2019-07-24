<template>
  <div class="info">
    <a-row type="flex" justify="center">
        <a-avatar :size="250" :src="url" shape="square"></a-avatar>
    </a-row>
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
@import "../../style/info.scss";
</style>