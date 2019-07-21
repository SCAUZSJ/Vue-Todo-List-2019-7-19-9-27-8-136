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
                <el-input v-model="itemContent"></el-input>
              </el-col>
              <el-col :span="4">
                <el-button>Add</el-button>
              </el-col>
            </el-row>
          </div>
          <div class="content">
            <el-row v-for="(item,index) in list" :key="index">
              <el-col :span="1">
                <span>{{(index+1)+"."}}</span>
              </el-col>
              <el-col :span="23">
                <el-checkbox>
                  <span>{{item.text}}</span>
                </el-checkbox>
              </el-col>
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
      itemContent: "",
      list: [
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
      checkList: ["v-for循环"]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    edit(item) {
      console.log("ediiii");
    }
  }
};
</script>
<style lang='scss' >
* {
  margin: 0;
  padding: 0;
}
.todolist-pane {
  width: 600px;
  margin-top: 100px;
  background: #cccccc;
  border-radius: 8px;
  padding: 15px 20px;

  .container {
    background: #ffffff;
    padding: 20px;
    border-radius: 6px;
  }
  .head {
    & p {
      margin: 12px 0;
    }
    & p:nth-of-type(1) {
      font-weight: bold;
      font-size: 30px;
    }
    & p:nth-of-type(2) {
      font-size: 18px;
    }

    .el-button {
      width: 80px;
      background: #fc999a;
      color: #ffffff;
      font-size: 18px;
      line-height: 40px;
      padding: 0;
      border: none;
      border-radius: 6px;
    }
  }
  .content {
    margin-top: 30px;
    padding-left: 6px;
    & span {
      font-size: 18px;
    //   color:#2c3e50;
      font-weight: bold;
    }
    .el-row {
    //   height:40px;
      .el-col{
        padding: 4px 6px;
        line-height: 28px;
        border-radius: 4px;
      }
    }
    .el-row:nth-of-type(2n) {
      .el-col:nth-of-type(2) {
        background: #f4ecec;
      }
    }
    .el-checkbox__inner {
      height: 18px;
      width: 18px;
      border-radius: 4px;
      &::after {
        height: 10px;
        left: 6px;
      }
    }
    .el-checkbox__input.is-checked + .el-checkbox__label span {
      color: #cccccc;
      text-decoration: line-through;
    }
  }
}
</style>