<template>
   <div class="content">
            <div  v-for="(item,index) in itemShow" :key="item.id">
            <todo-item :item="item" :index="index"></todo-item>
            </div>
          </div>
</template>

<script>
import todoItem from './todoItem';
export default {
  data () {
    return {
    };
  },

  components: {
      todoItem
  },

  computed: {
      itemShow(){
          return this.$store.getters.getItemShow;
      }
  },

  mounted(){},

  created(){},

  methods: {
  },

  filters:{},

}

</script>
<style lang='scss' scoped>
</style>