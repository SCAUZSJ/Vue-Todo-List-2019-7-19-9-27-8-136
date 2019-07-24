<template>
<div class="head">
  <p>Vue To Do List</p>
  <p>Simple Todo List with adding and filter by diff status.</p>
    <a-row :gutter="10">
      <a-col :span="18">
        <a-input  size="large" v-model="newItem"></a-input>
        
      </a-col>
      <a-col :span="4">
        <a-button @click="visible = true">Add</a-button>
        <a-modal title="提示" v-model="visible"  @ok="addItem">
         <template slot="footer">
        <a-button key="back" @click="visible = false">取消</a-button>
        <a-button key="submit" type="primary"  @click="addItem">
          确定
        </a-button>
      </template>
         <p>确认添加TODO:{{newItem}}?</p>
         
       </a-modal>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",
      visible:false,
    };
  },

  components: {},

  computed: {},

  mounted(){},

  created(){},

  methods: {
      addItem() {
      if (this.newItem === undefined || this.newItem === "") {
        this.visible = false;
        return;
      }
      this.visible = false;
      this.$store.dispatch('addTodo',this.newItem);
      this.newItem = "";
    },
  },

};
</script>
<style lang='scss' scoped>

</style>