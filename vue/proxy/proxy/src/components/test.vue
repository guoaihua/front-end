<template>
	<div class="child">
		{{message}} 我是子组件


		<div v-on:click="send"> 发送</div>
	</div>
</template>

<script>
	export default{
		data (){
			return {
				ms:"hhaa"
			}
		},
		props:['message'],
		created:function () {
			
		},
		methods:{
			send:function () {
				this.$root.bus.$emit("childms","这是子组件传递的消息");	 
			}
		}
	}
</script>

<style>
	
</style>