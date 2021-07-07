<template>
    <div id="app">
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->      
      <Navbar />
      <GeneralCentralArea :notFindMsg="searchResultMsg" />
    </div>
</template>

<script>
  import Navbar from "../components/NavBar.vue";
  import GeneralCentralArea from '../components/GeneralCentralArea.vue';
  
  export default {
      name: "App",
      props:{
        searchResultMsg: String
      },
      components: {
        Navbar,
        GeneralCentralArea
      },
       mounted(){        
        this.checkSearchResult()  
       },
      methods:{
        checkSearchResult: function(){
            const data = localStorage.getItem("searchData");
            if(data)
              this.searchResultMsg = "Itens encontrados";
            else
              this.searchResultMsg = "Não há itens...";
        }    
      }
  };
</script>

<style>
#app {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
