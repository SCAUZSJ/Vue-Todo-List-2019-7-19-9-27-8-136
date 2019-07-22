<template>
  <div>
      <el-button @click="test"></el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted(){},

  created(){},

  methods: {
      async test(){
          const res = await this.API.getParkingLot('8a80cb816c1924aa016c192a28560000');
          console.log(res)
      }
  },

  filters:{},

}

</script>
<style lang='scss' scoped>
</style>