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
          <h2>身份信息</h2>
          <el-form>
            <el-form-item label="姓名">
              <el-input v-model="profile.name"></el-input>
            </el-form-item>
            <el-form-item label="城市">
              <el-input v-model="profile.city"></el-input>
            </el-form-item>
            <el-form-item label="生日">
              <el-input v-model="profile.birth"></el-input>
            </el-form-item>
        </el-form>
      </li>
      <li v-bind:class="{active:currentTab === 1}">
        <h2>工作经历</h2>
        <el-form>
          <div class="workcontents"v-for="(work,index) in WorkExperience">
            <el-form-item label="公司">
              <el-input v-model="work.company"></el-input>
            </el-form-item>
            <el-form-item label="工作内容">
              <el-input v-model="work.jobContent"></el-input>
            </el-form-item>
            <i class="el-icon-circle-close" v-on:click="removeWorkExperience(index)"></i>
          </div>

          <el-button v-on:click="addWorkExperience">新建一个</el-button>
        </el-form>
      </li>
      <li v-bind:class="{active:currentTab === 2}">
        <h2>学习经历</h2>
        <el-form>
            <el-form-item label="名称">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input></el-input>
            </el-form-item>
          </el-form>      
      </li>
      <li v-bind:class="{active:currentTab === 3}">
        <h2>完成项目</h2>
        <el-form>
            <el-form-item label="名称">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input></el-input>
            </el-form-item>
          </el-form>
      </li>
      <li v-bind:class="{active:currentTab === 4}">
        <h2>获奖情况</h2>
        <el-form>
            <el-form-item label="名称">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input></el-input>
            </el-form-item>
          </el-form>
      </li>
      <li v-bind:class="{active:currentTab === 5}">
        <h2>联系方式</h2>
        <el-form>
            <el-form-item label="名称">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input></el-input>
            </el-form-item>
          </el-form>
      </li>
    </ol>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        currentTab:0,
        icons:['shenfenzheng','gongzuo','book-empty','xiangmu2','jiangbei','09dianhua'],
        profile:{
          name:'',
          city:'',
          birth:''
        },
        WorkExperience:[
          {company:'',jobContent:''}
        ]
      }
    },
    methods:{
      addWorkExperience(){
        this.WorkExperience.push({company:'',content:''})
      },
      removeWorkExperience(index){
        this.WorkExperience.splice(index,1)
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
          .workcontents{
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


