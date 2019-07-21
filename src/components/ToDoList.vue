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
@import '../style/style.scss';
</style>