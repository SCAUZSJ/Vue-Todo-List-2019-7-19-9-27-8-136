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
            <el-row
              v-for="(item,index) in itemShow"
              :key="item.id"
              :class="{'isCheck':item.isComplete}"
              @mouseenter.native="mouseEnterIndex = index"
              @mouseleave.native="mouseEnterIndex = -1"
            >
              <el-col :span="1">
                <span class="text-index">{{(index+1)+"."}}</span>
              </el-col>
              <el-col :span="23">
                <el-checkbox v-model="item.isComplete" @dblclick.native="edit(index)">
                  <span class="text-content" v-if="item.editing != true">{{item.text}}</span>
                </el-checkbox>
                <el-input
                  v-model="item.text"
                  v-if="item.editing == true"
                  @keyup.enter.native="submit(index)"
                ></el-input>
                <i
                  class="el-icon-delete icon"
                  v-show="mouseEnterIndex == index&&item.editing !=true"
                  @click="remove(index)"
                ></i>
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
      showType: "ALL",
      itemShow: [],
      itemStorage: [],
      lastEditIndex: -1,
      mouseEnterIndex: -1
    };
  },

  components: {},

  computed: {},

  methods: {
    addItem() {
      if (this.newItem == undefined || this.newItem == "") {
        return;
      }
      this.itemShow.push({
        id: Math.random() + "",
        text: this.newItem,
        isComplete: false,
        editing: false
      });
      this.newItem = "";
    },
    showChange(type) {
      if (this.showType === type) {
        return;
      }
      if (type === "ALL") {
        this.itemShow = this.itemStorage;
        this.showType = "ALL";
        this.clearEditStatus();
        return;
      }
      if (this.showType === "ALL") {
        this.itemStorage = this.itemShow;
      }
      this.itemShow = this.itemStorage.filter(item => {
        return item.isComplete == (type === "Complete" ? true : false);
      });
      this.clearEditStatus();
      this.showType = type;
    },
    clearEditStatus() {
      this.itemShow.forEach(item => {
        item.editing = false;
      });
    },
    edit(index) {
      if (this.lastEditIndex != -1) {
        this.itemShow[this.lastEditIndex].editing = false;
      }
      this.itemShow[index].editing = true;
      this.lastEditIndex = index;
    },
    submit(index) {
      console.log(this.itemShow);
      this.itemShow[index].editing = false;
    },
    remove(index) {
        if(this.showType !== 'ALL'){
            let id = this.itemShow[index].id;
            this.itemStorage.forEach((item,index) =>{
                if(item.id ===id){
                    this.itemStorage.splice(index,1);
                }
            });
        }
      this.itemShow.splice(index, 1);
    }
  }
};
</script>
<style lang='scss' >
@import "../style/style.scss";

</style>