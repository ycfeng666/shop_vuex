<template>
	<div class="box">
		<div class="search">
			<input type="text" v-model="searchData" />
			<button @click="ToSearch(searchData)"></button>
		</div>
		<div class="item" v-for="(item, index) in ShopData" :key="index">
			<div class="img">
				<img :src="item.src" :title="'列表' + (index + 1)" />
			</div>
			<div class="info">
				<h3>{{ item.title + ' * ' + item.num }}</h3>
				<p><b>￥ </b>{{ item.price * item.num }}</p>
				<p v-if="IsShop === '1'">
					<button class="btn_shop" @click="addSart(item.id)">加入购物车</button>
				</p>
				<p v-else-if="IsShop === '0'">
					<button class="btn_sart" @click="changeNum(item.id, 1)">
						增加一个
					</button>
					<button class="btn_sart" @click="changeNum(item.id, 2)">
						减少一个
					</button>
					<button class="btn_sart" @click="changeNum(item.id, 3)">移除</button>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { reactive, toRefs } from 'vue';
	import { useStore } from 'vuex';

	export default {
		props: ['ShopData', 'IsShop'],
		setup() {
			const Data = reactive({
				searchData: '',
				addSart: (id) => {
					Store.commit('joinSart', id);
				},
				changeNum: (id, type) => {
					Store.commit('adjustSart', { id, type });
				},
				ToSearch: (val) => {
					console.log(val);
				},
			});
			const Store = useStore();
			return {
				...toRefs(Data),
			};
		},
	};
</script>

<style scoped>
	.item {
		padding: 5px;
		display: flex;
	}
	.item:not(:first-child) {
		margin-top: 20px;
	}
	.item .img,
	.item .info {
		display: inline-block;
	}
	.item .img {
		flex: 1;
	}
	.item .img img {
		width: 125px;
		height: 160px;
	}
	.item .info {
		flex: 3;
		vertical-align: top;
		text-align: center;
	}
	.item .info .btn_sart:not(:first-child) {
		margin-left: 20px;
	}
</style>
