<template>
  <div>
      <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {};
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
p{
  font-size: 200px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: center;
  margin-top:100px;
}
</style>