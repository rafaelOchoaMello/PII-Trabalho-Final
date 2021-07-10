<template>
	<div class="cardBody">
		<div class="cardBody-img"></div>
		<div class="cardBody-info">
            <h3>Titulo</h3>
            <h5>Tipo</h5>
            <h4>Valor</h4>
        </div>
		<div class="cardBody-btns"></div>
	</div>
</template>

<script>
	export default {
		name: "ProductCard",
		props: {
			image: String,
			name: String,
			type: String,
			value: String,
			product_id: Number,
		},
		components: {},
		created() {},
		methods: {},
	};
</script>

<style scoped>
	div.cardBody {
		width: 250px;
		height: 350px;
		margin: 25px 15px 25px 40px;

		display: flex;
		flex-flow: column wrap;
		align-items: center;

		border: 1px solid gray;
		box-sizing: border-box;
		border-radius: 10px;
	}

	div.cardBody-img {
		width: 210px;
		height: 160px;

        margin: 10px 0px 0px 0px;

		border: 1px solid red;
		border-radius: 10px;
	}

	div.cardBody-info {
		width: 210px;
		height: 100px;

        margin: 10px 0px 0px 0px;

		border: 1px solid blueviolet;
		border-radius: 10px;
	}

    div.cardBody-info > h3, h4, h5{
        font-family: montserrat, sans-serif;
        color: rgb(70, 70, 70);

        margin: 0px 0px 10px 0px;
        padding: 0px;
    }

    div.cardBody-btns{
        width: 210px;
        height: 50px;

        margin: 5px 0px 0px 0px;

        border: 1px solid green;
    }

</style>