<template>
  <el-container>
    <el-header>
      <div class="tab">
        <div class="head">
          <el-avatar :size="50" :src="circleUrl" />
        </div>
        <div>
          <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-change="handleClick">
            <el-tab-pane label="首页" name="Introduction"></el-tab-pane>
            <el-tab-pane label="文章" name="Article"></el-tab-pane>
            <el-tab-pane label="项目" name="Project"></el-tab-pane>
            <el-tab-pane label="留言" name="Leave"></el-tab-pane>
            <el-tab-pane label="关于" name="About"></el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div>
        <el-switch
          v-model="value1"
          :active-action-icon="Moon"
          :inactive-action-icon="Sunny"
          active-color="#2c2c2c"
          inactive-color=""
          @change="toggleDark()" />
        &nbsp;
        <el-button type="primary" @click="dialogTableVisible = true"
          >登 录</el-button
        >
        <el-button type="danger" disabled>注册</el-button>
      </div>
    </el-header>
    <el-main> <router-view /></el-main>
  </el-container>
  <el-dialog v-model="dialogTableVisible" width="400px" :draggable="true">
    <h1>登录</h1>
    <el-link :underline="false" disabled>没有账号？立即注册 > </el-link>
    <el-input
      v-model="userName"
      placeholder="请输入账号"
      style="margin: 10px 0"
      disabled />
    <el-input
      v-model="passWord"
      :show-password="showPassword"
      placeholder="请输入密码"
      disabled>
    </el-input>
    <div class="check">
      <el-checkbox v-model="checked1" label="记住密码" size="large" disabled />
      <el-link :underline="false" disabled>忘记密码</el-link>
    </div>
    <el-button type="primary" :icon="User" style="width: 100%" disabled
      >登 录</el-button
    >
  </el-dialog>
</template>
<script lang="ts" setup>
// ----------------------- 引入方法元素 -----------------------
import { ref, reactive, watch, computed, nextTick, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import circleUrl from "../../assets/img/header.jpg";
import { useDark, useToggle } from "@vueuse/core";
import { Sunny, Moon, User } from "@element-plus/icons-vue";
// ----------------------- 字段 -----------------------
const router = useRouter();
const route = useRoute();
const activeName = ref("Article");
const isDark = useDark();
const toggleDark = useToggle(isDark);
const value1 = ref(false);
const userName = ref("");
const passWord = ref("");
const checked1 = ref(true);
const dialogTableVisible = ref(false);
const showPassword = ref(true);
onMounted(() => {
  let Html = document.querySelector("html");
  if (!Html?.className) return false;
  value1.value = true;
});
// ----------------------- 监听 -----------------------
watch(
  () => route.name,
  (newVal: any, oldVal) => {
    activeName.value = newVal;
  },
  { immediate: true, deep: true }
);
// ----------------------- 方法 -----------------------
function handleClick() {
  router.push({
    name: activeName.value,
  });
}
</script>
<style>
.el-dialog {
  border-radius: 20px !important;
}
</style>
<style lang="scss" scoped>
.el-container {
  height: 100%;
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid gainsboro;
    .tab {
      display: flex;
      justify-content: space-between;
      .head {
        margin-right: 35px;
      }
    }
  }
  .el-main {
    height: 100%;
  }
}
h1 {
  font-weight: 500;
  margin-top: 0;
  outline: 0 !important;
  position: relative;
}
h1::after {
  transition: 0.5s;
  position: absolute;
  bottom: -3px;
  left: 0;
  content: "";
  width: 40px;
  height: 3px;
  background: #00a2e3;
  border-radius: 10px;
}
h1:hover {
  &::after {
    width: 60px;
  }
}
.check {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
