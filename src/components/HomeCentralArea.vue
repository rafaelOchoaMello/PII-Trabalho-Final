<template>
    <div id="CentralArea-container">
        <div class="rightSideContent">
            <img src="../assets/Camera.png" id="homeCameraImg" alt="">
        </div>
        <div class="leftSideContent">
            <SideHL />
        </div>
    </div>
</template>

<script>
    import SideHL from "./SideHL.vue";

    export default {
        name: "CentralArea-container",
        components:{
            SideHL
        }
    };
</script>

<style scoped>
    #CentralArea-container {
        display:flex;
        flex-flow: row wrap;
        justify-content: space-between;
        width: 100%;
        height:65vh;
        margin: 50px 0px 0px 0px;
        box-sizing: border-box;        
    }

    #CentralArea-container > div.rightSideContent{
        width: 60%;
    }

    #CentralArea-container > div.leftSideContent{
        width: 39%;
    }

    #homeCameraImg{
        width: 500px;
        margin: 30px 0px 0px 46px;
    }
</style>
