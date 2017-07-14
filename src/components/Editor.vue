<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-bind:class="{active:currentTab === 0}" v-on:click="currentTab = 0">
          <svg class="icon">
            <use xlink:href="#icon-shenfenzheng"></use>
          </svg>
        </li>
        <li v-bind:class="{active:currentTab === 1}" v-on:click="currentTab = 1">
          <svg class="icon">
            <use xlink:href="#icon-gongzuo"></use>
          </svg>
        </li>
        <li v-bind:class="{active:currentTab === 2}" v-on:click="currentTab = 2">
          <svg class="icon">
            <use xlink:href="#icon-book-empty"></use>
          </svg>
        </li>
        <li v-bind:class="{active:currentTab === 3}" v-on:click="currentTab = 3">
          <svg class="icon">
            <use xlink:href="#icon-xiangmu2"></use>
          </svg>
        </li>
        <li v-bind:class="{active:currentTab === 4}" v-on:click="currentTab = 4">
          <svg class="icon">
            <use xlink:href="#icon-jiangbei"></use>
          </svg>
        </li>
        <li v-bind:class="{active:currentTab === 5}" v-on:click="currentTab = 5">
          <svg class="icon">
            <use xlink:href="#icon-09dianhua"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol>
      <li v-bind:class="{active:currentTab === 0}">这是身份信息</li>
      <li v-bind:class="{active:currentTab === 1}">这是工作经历</li>
      <li v-bind:class="{active:currentTab === 2}">这是学习经历</li>
      <li v-bind:class="{active:currentTab === 3}">这是完成项目</li>
      <li v-bind:class="{active:currentTab === 4}">这是获奖情况</li>
      <li v-bind:class="{active:currentTab === 5}">这是联系方式</li>
    </ol>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        currentTab:0
      }
    }
  }
</script>
<style lang="scss">
  #editor{
    display: flex;
    > nav {
        background: #000000;
        width: 80px;
        ol >li {
          cursor: pointer;
          padding: 16px 0;
          text-align: center;
          >.icon {
            width: 24px;
            height: 24px;
            fill: #ffffff;
          }
          &.active{
            background: #ffffff;
            >.icon{
              fill: #000000;
            }
          }
        }
    }
    > ol > li{
      display: none;
      &.active{
        display: block;
      }
    }
  }
</style>

