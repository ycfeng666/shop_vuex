<template>
	<div class="box">
		<div class="title">
			<a
				href="javascript:;"
				@click="ChangeTL(1)"
				:class="{ click: TLName === 'LoginView' }"
				>用户登录</a
			>
			<a
				href="javascript:;"
				@click="ChangeTL(2)"
				:class="{ click: TLName === 'ResigestView' }"
				>用户注册</a
			>
		</div>
		<transition mode="out-in">
			<LoginView
				v-if="TLName === 'LoginView'"
				@realizeFun="ToLogin"
				PleaseInputUser="请输入账号"
				PleaseInputPass="请输入密码"
				ButtonName="登录"
			></LoginView>
			<LoginView
				v-else-if="TLName === 'ResigestView'"
				@realizeFun="ToRegeist"
				PleaseInputUser="请输入账号"
				PleaseInputPass="请输入密码"
				ButtonName="注册"
			></LoginView>
		</transition>
	</div>
</template>

<script>
	import { reactive, toRefs } from 'vue';
	import { useRouter } from 'vue-router';
	import LoginView from '@/components/LoginView.vue';
	export default {
		components: {
			LoginView,
		},
		setup() {
			const data = reactive({
					TLName: 'LoginView',
					ChangeTL: (Type) => {
						if (Type === 1) data.TLName = 'LoginView';
						else if (Type === 2) data.TLName = 'ResigestView';
					},
					ToLogin: (v1, v2) => {
						console.log(v1, v2);
						if (v1 === 'admin' && v2 === '123456') {
							alert('登陆成功');
							uRouter.push('/shop');
						} else alert('登陆失败');
					},
					ToRegeist: () => {
						data.TLName = 'LoginView';
						alert('注册成功');
					},
				}),
				uRouter = useRouter();
			return {
				...toRefs(data),
			};
		},
	};
</script>

<style scoped>
	.box {
		width: 60%;
		margin: 50px auto;
		padding: 10px;
	}
	.title {
		height: 50px;
		border-bottom: 1px solid #e1e7ec;
		text-align: center;
	}
	.title a {
		text-decoration: none;
		color: black;
		font-size: 16px;
		background: #f1f1f1;
		padding: 5px 10px;
		margin: 0 10px;
		border-radius: 5px;
	}
	.title .click {
		background: red;
		color: white;
	}
	.v-enter,
	.v-leave-to {
		opacity: 0;
		transform: translateY(100px);
	}

	.v-enter-active,
	.v-leave-active {
		transition: all 0.5s ease;
	}
</style>
<style>
	
</style>
