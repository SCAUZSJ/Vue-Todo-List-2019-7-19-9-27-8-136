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
            <el-row v-for="(item,index) in itemShow" :key="item.text">
              <el-col :span="1">
                <span :class="{'isCheck':item.isComplete}">{{(index+1)+"."}}</span>
              </el-col>
              <el-col :span="23">
                <el-checkbox :label="item.text" v-model="item.isComplete"></el-checkbox>
              </el-col>
            </el-row>
          </div>
          <div class="foot">
            <el-row type="flex" justify="center">
              <el-button @click="showChange('ALL')">ALL</el-button>
              <el-button @click="showChange('Active')">Active</el-button>
              <el-button @click="showChange('Complete')">Complete</el-button>
            </el-row>
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
      showType: 'ALL',
      itemShow: [
        {
          text: "123",
          isComplete: false
        },
        {
          text: "456",
          isComplete: true
        },
        {
          text: "789",
          isComplete: false
        },
        {
          text: "101",
          isComplete: true
        }
      ],
      itemStorage: [],
      checkList: ["456"]
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
    check(val) {
      return this.itemList.indexOf(val) > -1;
    },
    showChange(type) {
      if (this.showType === type) {
        return;
      }
      if(type==='ALL'){
          this.itemShow = this.itemStorage;
          this.showType = 'ALL';
          return;
      }
      if (this.showType === 'ALL') {
        this.itemStorage = this.itemShow;
      }
      this.itemShow = this.itemStorage.filter(item => {
          return item.isComplete == (type === "Complete" ? true : false);
        });
        this.showType = type;
    }
  }
};
</script>
<style lang='scss' >
@import "../style/style.scss";
</style>