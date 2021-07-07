<template>
   <div class="sideHL-card">
       <img src="../assets/temp.png" alt="">
       <div class="textContent">
            <h1>{{title}}</h1>
            <p>{{value}}</p>
       </div>       
   </div>
</template>

<script>
export default {
    name: "SideHLCards",
    props: {
        title: String,
        value: String
    }
}
</script>

<style scoped>
   div.sideHL-card{
       display: flex;
       flex-flow: row wrap;
        margin: 16px 0px 0px 0px;
        width: 494px;
        height: 86px;
        background-color: #fff;
        box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
   }

    div.sideHL-card > img {
        width: 100px;
    }

    div.sideHL-card > div.textContent {
        display: flex;
        flex-flow: column wrap;
    }

    div.sideHL-card > div.textContent > h1 {
        margin: 15px 0px 0px 20px;
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: 510;
        font-size: 24px;
        line-height: 22px;        
        color: black;
   }

   div.sideHL-card > div.textContent > p{
        margin: 6px 0px 0px 20px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 16px;
        color: #000000;
   }
</style>