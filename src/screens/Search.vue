<template>
	<div>
		<Navbar />
		<GeneralCentralArea
			:receivedData="this.searchResultData"
			:pageTitle="this.pageTitle"
			:searchResultStatus="this.searchResultStatus"
			:searchResultMessage="this.searchResultMessage"
		/>
	</div>
</template>

<script>
	import Navbar from "../components/NavBar.vue";
	import GeneralCentralArea from "../components/GeneralCentralArea.vue";
	import axios from "axios";

	export default {
		name: "App",
		data: function() {
			return {
				searchResultData: Array,
				searchResultStatus: Boolean,
				searchResultMessage: String,
				pageTitle: "Resultado da pesquisa",
			}
		},
		props: {},
		components: {
			Navbar,
			GeneralCentralArea,
		},
		mounted() {
			const toFind = localStorage.getItem("toFind");
			this.search(toFind);
		},
		methods: {
			search: function (toFind) {
				axios
					.post("http://localhost:3000/produtos/filtro/", {
						palavra: toFind,
					})
					.then((resp) => {
						this.searchResultData = resp.data;
						this.searchResultStatus = true;
						this.searchResultMessage = "";
					})
					.catch((error) => {
						console.log(error);
						this.searchResultData = [];
						this.searchResultStatus = false;
						this.searchResultMessage = "Não há itens...";
					});
			},
		},
	};
</script>

<style>
</style>
