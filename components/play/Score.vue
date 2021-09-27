<template>
	<div>
		<NuxtLink type="button" to="/play/rule" class="button btn-pink">Replay</NuxtLink>
		<NuxtLink type="button" to="/" class="button btn-pink">Home</NuxtLink>
	</div>
</template>

<script>
export default {
	beforeDestroy() {
		this.$store.dispatch("clearState");
	},
};
</script>
