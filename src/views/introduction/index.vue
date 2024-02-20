<template>
  <div>
    <!-- <img :src="circleUrl" alt="这是我的头像" /> -->
    首页
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, watch, computed, nextTick, onMounted } from "vue";
import circleUrl from "../../assets/img/header.jpg";
import JSConfetti from "js-confetti";
const confetti = new JSConfetti();
function showConfetti() {
  confetti.addConfetti();
}
showConfetti();
</script>
<style lang="scss" scoped></style>
