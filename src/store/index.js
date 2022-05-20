import { createStore } from 'vuex';

export default createStore({
	state: {
		// 商城数据
		originShopData: [
			{
				id: 1,
				title: '三体合集',
				price: 45.0,
				src: '/static/img/santi.jpg',
				num: 1,
			},
			{
				id: 2,
				title: '法治的细节',
				price: 21.0,
				src: '/static/img/fazhi.jpg',
				num: 1,
			},
			{
				id: 3,
				title: '资本论',
				price: 33.0,
				src: '/static/img/zibenlun.jpg',
				num: 1,
			},
		],
		// 购物车数据
		sartData: [],
	},
	getters: {
		// 根据相应排除筛选商城数据
		filterShopData: (state) => (val, type) => {
			const tempData = JSON.parse(JSON.stringify(state.originShopData));
			if (type === 'id') return tempData.filter((item) => item[type] === val);
			else if (type === 'title')
				return tempData.filter((item) => item[type].match(val));
		},
		// 根据ID查找索引
		getSartDataIndex: (state) => (id) => {
			const tempData = JSON.parse(JSON.stringify(state.sartData));
			return tempData.findIndex((item) => item.id === id);
		},
	},
	mutations: {
		// 加入购物车数据
		joinSart(state, id) {
			const tempData = this.getters.filterShopData(id, 'id'),
				bookI = this.getters.getSartDataIndex(id);
			if (bookI >= 0) state.sartData[bookI].num++;
			else state.sartData.push(tempData[0]);
		},
		// 调整购物车数据
		adjustSart(state, obj) {
			const bookI = this.getters.getSartDataIndex(obj.id);
			// 加一
			if (obj.type === 1) {
				state.sartData[bookI].num++;
			}
			// 减一
			else if (obj.type === 2) {
				const e = state.sartData[bookI];
				if (e.num > 1) e.num--;
				else state.sartData.splice(bookI, 1);
			}
			// 移除
			else if (obj.type === 3) state.sartData.splice(bookI, 1);
		},
	},
	actions: {},
	modules: {},
});
