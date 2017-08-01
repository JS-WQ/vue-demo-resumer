<template>
  <div id="preview">
    <h1>{{resume.profile.name || '请输入姓名'}}</h1>
    <p>{{resume.profile.city || '请输入城市'}} |{{resume.profile.birth || '请输入出生年月'}}</p>
    <section v-if="filter(resume.Projects).length > 0">
      <h2>项目经历</h2>
      <ul>
        <li v-for="Project in filter(resume.Projects)">
          {{Project.name}}
          {{Project.contents}}
        </li>
      </ul>
    </section>
    <section v-if="filter(resume.WorkExperience).length > 0">
      <h2>工作经历</h2>
      <ul>
        <li v-for="work in filter(resume.WorkExperience)">
          {{work.company}}
          {{work.jobContent}}
        </li>
      </ul>
    </section>
  </div>
</template>

<style>
  #preview{
    border: 1px solid #eeeeee;
  }
</style>
<script>
export default {
  props:['resume'],
  methods:{
    filter(array){
      return array.filter(item=> !this.isEmpty(item))
    },
    isEmpty(object){
      let empty = true 
      for(let key in object){
        if(object[key]){
          empty = false
          break
        }
      }
      return empty
    }

  }
}
</script>
