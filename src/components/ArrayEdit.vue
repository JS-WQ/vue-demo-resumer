<template>
  <div>
    <h2>{{title}}</h2>
    <el-form>
      <div class="contents" v-for="(item,index) in items" v-bind:key="index">
        <el-form-item v-for="key in keys" v-bind:label="labels[key]" v-bind:key="key" >
          <el-input v-model="item.key"></el-input>
        </el-form-item>
        <i class="el-icon-circle-close" v-on:click="removeitem(index)"></i>
      </div>
      <el-button v-on:click="additem" >新建一个</el-button>
    </el-form>
  </div>
</template>
<script>
    export default {
        props:['items','labels','title','telephone'],
        
        computed:{
            keys(){
                return Object.keys(this.items[0])
            }
        },
        methods:{
            additem(){
                const empty = {}
                this.keys.map((key)=>{
                    empty[key] = ''
                })
                this.items.push(empty)
            },
            removeitem(index){
                this.items.splice(index,1)
            }
        }
    }
</script>
