<template>
    <div id="app">
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <Navbar />
      <HomeCentralArea />
      <div id="socialBtnsContainer">
        <a href="#"> <img src="../assets/facebook.png" alt=""> </a>
        <a href="#"> <img src="../assets/Insta.png" alt=""> </a>
        <a href="#"> <img src="../assets/whats.png" alt=""> </a>
      </div>
    </div>
</template>

<script>
  import Navbar from "../components/NavBar.vue";
  import HomeCentralArea from "../components/HomeCentralArea.vue";

  export default {
    name: "App",
    components: {
      Navbar,
      HomeCentralArea,
    },
  };
</script>

<style>
#app {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

#socialBtnsContainer {
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: 73px;
  width: 100%;
}

#socialBtnsContainer > a img{
  margin: 39px 15px 0px 0px;
  width: 30px;
  height: 30px;
}
</style>
