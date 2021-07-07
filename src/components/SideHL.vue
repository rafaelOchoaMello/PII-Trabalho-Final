<template>
    <div id="sideHL-container">
        <div id="sideHL-title">
            <p>Destaques</p>
        </div>
        <div v-for="i, index in info" :key="i.id">
            <SideHLCards v-if="index < 3" :title="i.nome" :value="i.valor"></SideHLCards>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    import SideHLCards from './SideHLCards.vue';

export default {
    name: "SideHL",
    components:{
        SideHLCards
    },
    data(){
        return { info:null }
    },
    computed:{
        top3:function(){
            return this.info.slice(0,3);
        }
    },
    mounted(){        
        this.LoadData()       
    },
    methods:{
        LoadData: function(){
            axios.get("http://localhost:3000/destaques")
                    .then( resp => this.info = resp.data )
                    .catch( error => console.log(error) );            
        }
    }      
}
</script>

<style scoped>
    #sideHL-container{
        display: flex;
        flex-flow: column wrap;
        align-items: flex-end;
        width: 100%;
    }

    #sideHL-title{
        width: 282px;
        height: 67px;
        border: none;
        background-color: #000;
        color: white;
        text-align: center;
    }

    #sideHL-title > p{
        margin: 10px 0px 0px 0px;
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 44px;
        color: #FFFFFF;
    }

</style>