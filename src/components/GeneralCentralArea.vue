<template>
    <div id="generalCentralArea-container">
        <p>{{receivedData}}</p>
    </div>
</template>

<script>
    export default {
        name: "GeneralCentralArea",
        props:{
            receivedData: String
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
        flex-flow: row wrap;
        box-sizing: border-box;        
        height:100vh;
        width: 95%;
        margin: 50px auto 0px auto;
        background-color: #fff;
        box-shadow: -7px 4px 4px rgba(0, 0, 0, 0.25), 12px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;        
    }
  
</style>
