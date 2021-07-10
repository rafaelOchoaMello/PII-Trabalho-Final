<template>
    <div id="generalCentralArea-container">
        <h2>{{pageTitle}}</h2>
        <p class="searchMSG">{{notFindMsg}}</p>
    </div>
</template>

<script>
    export default {
        name: "GeneralCentralArea",
        props:{
            notFindMsg: String,
            pageTitle: String,
        },
        components:{            
        },
        methods:{
            
        }
    };
</script>

<style scoped>
    #generalCentralArea-container {
        display: flex;
        flex-flow: column wrap;
        box-sizing: border-box;        
        height:100vh;
        width: 95%;
        margin: 50px auto 0px auto;
        background-color: #fff;
        box-shadow: -7px 4px 4px rgba(0, 0, 0, 0.25), 12px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;        
    }
    
    h2 {
        margin: 40px 0px 0px 50px;
        font-family: montserrat, sans-serif;
        color: rgb(26, 26, 26);
    }

    p.searchMSG{
        margin: 20px 0px 0px 20px;
        padding: 0px;
        background-color: burlywood;
    }



</style>
