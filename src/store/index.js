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
		// 总价
		allPrice: 0,
		// 全局优惠,此功能暂未实装
		preferentialPrice: 1
	},
	getters: {
		// 根据相应排除筛选商城数据
		filterShopData: (state) => (val, type) => {
			// 这里必须进行深拷贝,否则修改排除后的数据将变动原始数据
			const tempData = JSON.parse(JSON.stringify(state.originShopData));
			// 通过ID搜索
			if (type === 'id') return tempData.filter((item) => item[type] === val);
			// 通过名称进行模糊查询,搜索功能暂未实装
			else if (type === 'title')
				return tempData.filter((item) => item[type].match(val));
		},
		// 根据ID查找索引
		getSartDataIndex: (state) => (id) => {
			const tempData = JSON.parse(JSON.stringify(state.sartData));
			return tempData.findIndex((item) => item.id === id);
		},
		// 计算总价
		comAllPrice:(state)=>()=>{
			let price = 0;
			// 循环购物车计算总价
			state.sartData.forEach(item => {
				price += item.price * item.num;
			});
			return price;
		}
	},
	mutations: {
		// 加入购物车数据
		joinSart(state, id) {
			const tempData = this.getters.filterShopData(id, 'id'),
				bookI = this.getters.getSartDataIndex(id);
			if (bookI >= 0) state.sartData[bookI].num++;
			// 如果此时购物车内不存在当前商品应将排除的数据添加到购物车
			else state.sartData.push(tempData[0]);
			// 调用计算总价的方法
			state.allPrice = this.getters.comAllPrice();
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
				// 如果此时数量为1,正常逻辑下应该在归零后将数据移除
				else state.sartData.splice(bookI, 1);
			}
			// 移除
			else if (obj.type === 3) state.sartData.splice(bookI, 1);
			state.allPrice = this.getters.comAllPrice();
		},
	},
	actions: {},
	modules: {},
});
