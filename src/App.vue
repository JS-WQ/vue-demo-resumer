<template>
  <div id="app">
    <Topbar></Topbar>
    <Preview></Preview>
    <Editor></Editor>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
