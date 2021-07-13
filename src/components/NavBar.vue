<template>
	<div id="navContainer">
		<div id="navLogo">
			<img src="../assets/logo.png" alt="PageLogo" srcset="" />
			<a id="homeLink" href="">Débora Photos</a>
		</div>
		<nav id="navBar">
			
			<a href="#" v-on:click="redirectProdutos">Produtos</a>
			<a href="#">Promoções</a>
			<form v-on:submit.prevent>
				<input
					type="text"
					id="searchInput"
					name="productSearch"
					placeholder="Pesquisar..."
				/>
				<button type="button" id="searchBtn" v-on:click="Teste">
					<img src="../assets/lupa.png" alt="lupa-Pesquisar" />
				</button>
			</form>
		</nav>
	</div>
</template>

<script>
	export default {
		name: "Navbar",
		props: {},
		methods: {
			redirectProdutos: function() {this.$router.push({path:"/products"})},
			Teste: function () {
				const toFind = document.getElementById("searchInput").value;
				if (toFind) {
          localStorage.setItem('toFind', toFind);
					this.$router.push({
						path: "/filtro",
						query: {
							q: this.searchQuery,
							t: new Date().getTime(),
						},
					});
				} else alert("Favor informar dados para pesquisa.");
			},
		},
	};
</script>

<style scoped>
	#navContainer {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		margin: 51px 0px 0px 0px;
		padding: 0px;
		width: 100%;
	}

	#navBar > a {
		margin: 0px 15px 0px 0px;
		text-decoration: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 29px;
		color: #000000;
	}

	#navBar > a:hover {
		color: #fff;
	}

	#navBar > form {
		display: inline;
	}

	#searchInput {
		width: 250px;
		margin: 0px 33px 0px 0px;
		height: 35px;
		background: #ffffff;
		border-radius: 10px;
		border: none;
	}

	#searchInput::placeholder {
		margin-left: 20px;
		font-size: 1.2em;
	}

	#searchBtn {
		cursor: pointer;
		position: absolute;
		margin: 0px 33px 0px 0px;
		right: 0px;
		top: 44px;
		width: 73px;
		height: 52px;
		background: #000000;
		border: none;
		border-radius: 5px;
	}

	#searchBtn > img {
		width: 28px;
	}

	#navLogo {
		width: 325px;
		height: 43px;
		background-color: black;
	}

	#navLogo > img {
		position: absolute;
		top: 40px;
		width: 74px;
		height: 63px;
		margin-left: 12px;
	}

	#homeLink {
		position: relative;
		padding: 0px;
		margin: 4px 17px 5px 97px;
		font-family: Montserrat, sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 28px;
		line-height: 34px;
		color: #ffffff;
		text-decoration: none;
	}
</style>
