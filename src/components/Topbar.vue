<template>
  <div id="topbar">
      <div class="topLogo">Resumer</div>
      <div class="topAction">
        <el-button>注册</el-button>
        <el-button type="primary">登录</el-button>
        <el-button v-on:click="preview">预览</el-button>

      </div>
  </div>
</template>

<style lang="scss">
  #topbar{
    border: 1px solid #eeeeee;
    min-height: 100px;
    padding: 16px;
  }
</style>
<script>
export default {
  methods:{
    preview(){
      this.$emit('preview')
    }
  }
}
</script>
