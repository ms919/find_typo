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
			<a
				href="https://twitter.com/intent/tweet?url=https://find-typo.web.app&text=hogehoge&hashtags=find-typo,typo,タイポ,vscode,VSCode"
				target="_blank"
			>
				Tweet
			</a>
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
			const arr = this.$store.getters.timeArr;
			return arr.length > 0 ? (
				fixed.STANDARD_TIME -
				arr.reduce((x, y) => {
					return x + y;
				})
			) : null;
		},
	},
};
</script>
