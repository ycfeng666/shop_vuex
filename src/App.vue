<template>
	<div>
		<div class="nav">
			<router-link to="/">用户登录</router-link>
			<router-link to="/ss">购物车</router-link>
		</div>
		<div class="view"><router-view /></div>
	</div>
</template>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	.nav {
		height: 70px;
		line-height: 70px;
		border: 0.06em solid #e3e3e3;
		box-shadow: 0 4px 12px -6px #c4c4c4;
	}
	.nav a {
		display: inline-block;
		text-decoration: none;
		width: 80px;
		text-align: center;
		list-style: none;
		color: #000;
	}

	.nav .router-link-exact-active {
		color: #42b983;
	}
</style>
<style>
.primary-button {
		background: linear-gradient(325deg, #4aa4ff, #1058fa);
		width: 100%;
		height: 42px;
		border-radius: 23px;
		border: 0;
		outline: none;
		color: #fff;
		letter-spacing: 10px;
		font-weight: 500;
		font-size: 16px;
		cursor: pointer;
		margin-top: 30px;
	}
</style>
