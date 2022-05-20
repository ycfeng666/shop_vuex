<template>
	<div class="shop">
		<div class="left">
			<h1>商城</h1>
			<ShopView :ShopData="Store.state.originShopData" IsShop="1"></ShopView>
		</div>
		<div class="right">
			<h1>购物车</h1>
			<ShopView :ShopData="Store.state.sartData" IsShop="0"></ShopView>
		</div>
	</div>
</template>

<script>
	import { reactive, toRefs } from 'vue';
	import { useStore } from 'vuex';
	import ShopView from '@/components/ShopView.vue';
	export default {
		components: {
			ShopView,
		},
		setup() {
			const Data = reactive({}),
				Store = useStore();
			return {
				...toRefs(Data),
				Store,
			};
		},
	};
</script>

<style scoped>
	.shop {
		display: flex;
		width: 75%;
		margin: 30px auto;
	}
	.left,
	.right {
		flex: 1;
		box-shadow: 0 2px 3px rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 10%);
		padding: 10px;
	}
	.right {
		margin-left: 20px;
	}
</style>
