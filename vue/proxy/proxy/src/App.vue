<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <div>{{childms}}</div>
    <mycomponents :message="parent"></mycomponents>  
  </div>
</template>

<script>
import child from './components/test.vue'

export default {
  data(){
      return {
        parent:'我是父组件的动态数据',
        childms:'dada'
      }
  },
    created:function (){
        this.$axios.post('/cityjson').then(function(res){
            console.log(res);
        }).catch(function(error){
           console.log(error);
        });

        this.$root.bus.$on('childms',(data)=>{
          console.log("shoudao");
          console.log(data);
          console.log(this.childms);
          this.childms=data;
        });
    },
    components:{
      'mycomponents':child
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
