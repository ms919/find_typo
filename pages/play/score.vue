<template>
	<div
		class="play-wrapper d-flex flex-column justify-content-center align-items-center"
	>
		<div>
			<p class="desc">Score</p>
			<p>{{ timeArr }}</p>
			<NuxtLink type="button" to="/play/rule" class="button btn-pink"
				>Replay</NuxtLink
			>
			<NuxtLink type="button" to="/" class="button btn-pink">Home</NuxtLink>
		</div>
		<div class="play-component-wrapper">
			<PlayScore />
		</div>
	</div>
</template>

<script>
import fixed from "~/const/const.js";

export default {
	computed: {
		timeArr() {
			return fixed.STANDARD_TIME - this.$store.getters.timeArr.reduce((x, y) => {
				return x + y;
			});
		},
	},
};
</script>
