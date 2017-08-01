<template>
  <div id="app" v-bind:class="{previewModel:previewModel}">
    <Topbar class="topbar" v-on:preview="preview"></Topbar>
    <main>
      <Editor v-bind:resume="resume" class="editor"></Editor>
      <Preview v-bind:resume="resume" class="preview"></Preview>
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'



export default {
  data(){
    return{
      previewModel:false,
      resume:{
        profile:{
          name:'',
          city:'',
          birth:''
        },
        WorkExperience:[
          {company:'',jobContent:''}
        ],
        StudyExperience:[
          {school:'',time:'',degree:''}
        ],
        Projects:[  
          {name:'',contents:''}
        ],
        Awards:[
          {time:'',contents:''}
        ],
        telephone:[
          {phone:'',QQ:'',wechat:'',mail:'',adress:''}
        ]
      }
    }
  },
  name: 'app',
  methods:{
    preview(){
      this.previewModel= true
    },
    exitPreview(){
      this.previewModel= false
    }
  },
  components: {
    Topbar,Preview,Editor
  }

}

</script>

<style lang="scss">
html,body,#app{height: 100%;}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100%;
}
.topbar{position:relative;z-index:2;display: flex;align-items: center;justify-content: space-between;
  box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
}
.icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
main{
  display: flex;
  background: #cccccc;
  flex: 1;
  > .preview{
      flex: 1;
      margin: 16px 8px 0 16px;
      background: #ffffff;
      box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    }
  > .editor{
      width: 25vw;
      margin: 16px 16px 0 8px;
      background: #ffffff;
      box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    }
  }
.previewModel > #topbar{display: none;}
.previewModel  #editor{display: none;}
#exitPreview{display: none;}
.previewModel #exitPreview{
  display: inline-block;
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
