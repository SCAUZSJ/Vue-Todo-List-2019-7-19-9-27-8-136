<template>
 <div class="foot">
    <a-row type="flex" justify="center">
        <a-button @click="showChange('ALL')" :class="{'is-focus':showType=='ALL'}">ALL</a-button>
        <a-button @click="showChange('Active')" :class="{'is-focus':showType=='Active'}">Active</a-button>
        <a-button @click="showChange('Complete')" :class="{'is-focus':showType=='Complete'}">Complete</a-button>
    </a-row>
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