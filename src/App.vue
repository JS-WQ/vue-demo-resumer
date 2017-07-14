<template>
  <div id="app">
    <Topbar class="topbar"></Topbar>
    <main>
      <Editor class="editor"></Editor>
      <Preview class="preview"></Preview>
    </main>
    
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'



export default {
  name: 'app',
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


</style>
