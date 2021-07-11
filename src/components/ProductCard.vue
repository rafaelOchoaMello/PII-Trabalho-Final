<template>
	<div class="cardBody">
		<div class="cardBody-img"></div>
		<div class="cardBody-info">
            <h3>{{name}}</h3>
            <h5>{{type}}</h5>
            <h4>R$:{{value}}</h4>
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

		background-color: rgb(247, 247, 247);
		border: 1px solid rgba(128, 128, 128, 0.063);
		box-sizing: border-box;
		border-radius: 10px;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	}

	div.cardBody-img {
		width: 210px;
		height: 160px;

        margin: 10px 0px 0px 0px;

		border: 1px solid rgba(128, 128, 128, 0.419);
		border-radius: 10px;
	}

	div.cardBody-info {
		width: 210px;
		height: 100px;

        margin: 10px 0px 0px 0px;
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