<template>
 <div class="foot">
    <el-row type="flex" justify="center">
        <el-button @click="showChange('ALL')">ALL</el-button>
        <el-button @click="showChange('Active')">Active</el-button>
        <el-button @click="showChange('Complete')">Complete</el-button>
    </el-row>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  created() {},

  methods: {
      showChange(type){
          this.$store.commit('showChange',type);
      }
  },

  filters: {}
};
</script>
<style lang='scss' >

</style>