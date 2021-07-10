<template>
	<div id="generalCentralArea-container">
		<h2>{{ pageTitle }}</h2>
		<template v-if="this.searchResultStatus === true">
			<!--  Os produtos estão configurados via flex para uma linha de 4-em-4 -->
			<div id="productCard-container">
				<div v-for="i in this.receivedData" :key="i.id">
                    <ProductCard :name="i.nome" :type="i.tipo" :value="i.valor"/>
                </div>
			</div>
		</template>
		<template v-else>
			<h1 id="noDataMSG">{{ searchResultMessage }}</h1>
		</template>
	</div>
</template>

<script>
	import ProductCard from "./ProductCard.vue";

	export default {
		name: "GeneralCentralArea",
		data() {
			return { dataArray: null };
		},
		props: {
			receivedData: Array,
			searchResultStatus: Boolean,
			searchResultMessage: String,
			pageTitle: String,
		},
		components: {
			ProductCard,
		}
	};
</script>

<style scoped>
	#generalCentralArea-container {
		display: flex;
		flex-flow: column wrap;
		box-sizing: border-box;
		min-height: 100vh;
		width: 95%;
		margin: 50px auto 0px auto;
		background-color: #fff;
		box-shadow: -7px 4px 4px rgba(0, 0, 0, 0.25),
			12px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 25px;
	}

	h2 {
		margin: 40px 0px 0px 50px;
		font-family: montserrat, sans-serif;
		color: rgb(26, 26, 26);
	}

	p.searchMSG {
		margin: 20px 0px 0px 20px;
		padding: 0px;
		background-color: burlywood;
	}

	#productCard-container {
		display: flex;
		flex-flow: row wrap;
		box-sizing: border-box;
	}

	h1#noDataMSG {
		font-family: montserrat, sans-serif;
		margin: 40px 0px 0px 50px;
	}
</style>
