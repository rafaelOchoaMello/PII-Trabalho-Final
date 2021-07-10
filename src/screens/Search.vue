<template>
	<div>
		<Navbar />
		<GeneralCentralArea
			:receivedData="this.searchResultData"
			:pageTitle="this.pageTitle"
      :searchResultStatus="this.searchResultStatus"
		/>
	</div>
</template>

<script>
	import Navbar from "../components/NavBar.vue";
	import GeneralCentralArea from "../components/GeneralCentralArea.vue";
	import axios from "axios";

	export default {
		name: "App",
		data() {
			return {
				searchResultData: "",
				searchResultStatus: Boolean,
				pageTitle: "Resultado da pesquisa",
			};
		},
		props: {},
		components: {
			Navbar,
			GeneralCentralArea,
		},
		created() {
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
						this.searchResultData = JSON.stringify(resp.data);
            this.searchResultStatus = true;
          })
					.catch((error) => {
						console.log(error);
						this.searchResultData = "Não há itens ...";
            this.searchResultStatus = false;
					});
			},
		},
	};
</script>

<style>
</style>
