<script setup>
  import { ref, inject } from 'vue'
  import moment from 'moment'
  const text = ref("")
  const result = ref("")
  function change() {
      console.log("text.value", text.value)
      result.value = moment(parseInt(text.value)*1000).calendar()
      console.log("result.value", result.value)
      alert(result.value);
  }
</script>

<template>
  <div class="content-box">
    当前时间戳<input type="text" class="form-control" placeholder="Timestamp" v-model="text">
    <button id="btnChange" type="button" class="btn btn-primary" @click="change()">Change</button>
  </div>
</template>

<style lang="scss">
@use '@vuepress/theme-default/styles/mixins';

.content-box {
  padding-top: 30px;
}
</style>
