<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active:currentTab === i}" v-on:click="currentTab = i">
          <svg class="icon">
            <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
        <!--
        <li v-bind:class="{active:currentTab === 5}" v-on:click="currentTab = 5">
          <svg class="icon">
            <use xlink:href="#icon-09dianhua"></use>
          </svg>
        </li>
        -->
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
        currentTab:0,
        icons:['shenfenzheng','gongzuo','book-empty','xiangmu2','jiangbei','09dianhua']
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

