<template>
	<div>
		<div class="form-input">
			<input type="text" :placeholder="PleaseInputUser" v-model="user" />
		</div>
		<div class="form-input">
			<input type="password" :placeholder="PleaseInputPass" v-model="pass" />
		</div>
		<div class="form-input">
			<button class="primary-button" @click="ToLogin()">
				{{ ButtonName }}
			</button>
		</div>
	</div>
</template>

<script>
	import { reactive, toRefs } from 'vue';
	export default {
		props: ['PleaseInputUser', 'PleaseInputPass', 'ButtonName'],
		setup(props, context) {
			const Data = reactive({
				user: '',
				pass: '',
				ToLogin: () => {
					context.emit('realizeFun', Data.user, Data.pass);
				},
			});
			return {
				...toRefs(Data),
			};
		},
	};
</script>

<style scoped>
	.form-input {
		height: 46px;
		line-height: 46px;
		margin-top: 10px;
	}
	.form-input input {
		box-sizing: border-box;
		padding: 0 25px;
		background: #eef3f5;
		border-radius: 8px;
		width: 100%;
		height: 100%;
		border: 0;
		outline: 0;
		font-size: 14px;
	}
</style>
