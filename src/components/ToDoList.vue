<template>
  <div>
    <el-row type="flex" justify="center">
      <div class="todolist-pane">
        <div class="container">
          <div class="head">
            <p>Vue To Do List</p>
            <p>Simple Todo List with adding and filter by diff status.</p>
            <el-row :gutter="10">
              <el-col :span="18">
                <el-input v-model="newItem"></el-input>
              </el-col>
              <el-col :span="4">
                <el-button @click="addItem">Add</el-button>
              </el-col>
            </el-row>
          </div>
          <div class="content">
            <el-checkbox-group v-model="checkList">
              <el-row v-for="(item,index) in itemList" :key="index">
                <el-col :span="1">
                  <span>{{(index+1)+"."}}</span>
                </el-col>
                <el-col :span="23">
                  <el-checkbox :label="item.text">
                    <!-- <span>{{item.text}}</span> -->
                  </el-checkbox>
                </el-col>
              </el-row>
            </el-checkbox-group>
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",
      itemList: [
        {
          text: "第一项"
        },
        {
          text: "第二项"
        },
        {
          text: "第三项"
        },
        {
          text: "第四项"
        }
      ],
      checkList: ['第一项']
    };
  },

  components: {},

  computed: {},

  methods: {
    addItem() {
      if (this.newItem == undefined || this.newItem == "") {
        return;
      }
      this.itemList.push({ text: this.newItem });
      this.newItem = "";
    },
    dd() {
      alert("dsa");
    }
  }
};
</script>
<style lang='scss' >
@import "../style/style.scss";
</style>