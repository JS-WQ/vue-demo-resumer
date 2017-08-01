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
     <!-- <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab === i}" >
        Tab {{i+1}}
      </li>
      -->
      <li v-bind:class="{active:currentTab === 0}">
          <PersonalData v-bind:profile="resume.profile"/>
      </li>
      <li v-bind:class="{active:currentTab === 1}">
          <ArrayEdit v-bind:items="resume.WorkExperience" v-bind:labels="{company:'公司',jobContent:'工作经历'}" title="工作经历"/>
      </li>
      <li v-bind:class="{active:currentTab === 2}">
          <ArrayEdit v-bind:items="resume.StudyExperience" v-bind:labels="{school:'学校',time:'在校时间',degree:'学位'}" title="学习经历"/>
      </li>
      <li v-bind:class="{active:currentTab === 3}">
          <ArrayEdit v-bind:items="resume.Projects" v-bind:labels="{name:'项目名称',contents:'项目介绍'}" title="项目经历"/>
      </li>
      <li v-bind:class="{active:currentTab === 4}">
          <ArrayEdit v-bind:items="resume.Awards" v-bind:labels="{time:'获奖时间',contents:'获奖经历'}" title="获奖经历"/>        
      </li>
      <li v-bind:class="{active:currentTab === 5}">
          <ArrayEdit v-bind:items="resume.telephone" v-bind:labels="{phone:'手机',mail:'邮箱',adress:'地址',QQ:'QQ',wechat:'微信'}" title="联系方式"/>                  
      </li>
    </ol>
  </div>
</template>
<script>
  import PersonalData from './PersonalData'
  import ArrayEdit from './ArrayEdit'
  export default {
    components:{ PersonalData,ArrayEdit },
    props:['resume'],
    data(){
      return {
        currentTab:0,
        icons:['shenfenzheng','gongzuo','book-empty','xiangmu2','jiangbei','09dianhua'],
        
      }
    },
    methods:{
      
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
    > ol{
        flex: 1;    
        > li{
          overflow: auto;
          height: 100%;
          padding: 32px;
          display: none;
          &.active{
            display: block;
          }
          .contents{
            position: relative;
            .el-icon-circle-close{
              position: absolute;
              top: 0;
              right: 0;
            }
          }
         
        }
      }
  }
</style>


