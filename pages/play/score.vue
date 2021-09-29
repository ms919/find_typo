<template>
	<div
		class="play-wrapper d-flex flex-column justify-content-center align-items-center"
	>
		<div class="d-flex top-wrapper">
			<div class="d-flex mr-auto pl-4">
				<p>Score&nbsp;</p>
				<p>{{ timeArr }}</p>
			</div>
			<NuxtLink to="/play/rule" class="p-2"
				><fa-layers full-width
					><fa :icon="faRedoAlt" class="fa-lg pink" /><fa
						:icon="faPlay"
						transform="shrink-8 right-4" class="pink" /></fa-layers
			></NuxtLink>
			<NuxtLink to="/" class="p-2"
				><fa :icon="faHome" class="fa-lg yellow"
			/></NuxtLink>
			<a :href="tweetContent" target="_blank" class="pt-2 pr-2">
				<fa :icon="faTwitter" class="fa-lg lightblue" />
			</a>
		</div>
		<div class="play-component-wrapper">
			<PlayScore />
		</div>
	</div>
</template>

<script>
import fixed from "~/const/const.js";
import { faHome, faRedoAlt, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default {
	computed: {
		timeArr() {
			const arr = this.$store.getters.timeArr;
			return arr.length > 0
				? fixed.STANDARD_TIME -
						arr.reduce((x, y) => {
							return x + y;
						})
				: null;
		},
		tweetContent() {
			const url =
				"https://twitter.com/intent/tweet?url=https://find-typo.web.app";
			const text = this.timeArr != null ? `&text=SCORE:${this.timeArr}` : "";
			const hashtags = "&hashtags=findtypo,typo,タイポ,vscode,VSCode";
			return `${url}${text}${hashtags}`;
		},
		faHome() {
			return faHome;
		},
		faTwitter() {
			return faTwitter;
		},
		faRedoAlt() {
			return faRedoAlt;
		},
		faPlay() {
			return faPlay;
		},
	},
};
</script>
<style scoped>
.top-wrapper{
	width: 80%;
}
</style>