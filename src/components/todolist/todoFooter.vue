<template>
 <div class="foot">
    <el-row type="flex" justify="center">
        <el-button @click="showChange('ALL')" :class="{'is-focus':showType=='ALL'}">ALL</el-button>
        <el-button @click="showChange('Active')" :class="{'is-focus':showType=='Active'}">Active</el-button>
        <el-button @click="showChange('Complete')" :class="{'is-focus':showType=='Complete'}">Complete</el-button>
    </el-row>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  components: {},

  computed: {
    showType(){
        return this.$store.getters.getShowType;
    }
  },

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