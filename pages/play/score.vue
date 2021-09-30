<template>
	<div
		class="play-wrapper d-flex flex-column justify-content-center align-items-center"
	>
		<div class="d-flex top-wrapper">
			<div class="d-flex mr-auto ml-2 pt-4">
				<p class="p-score">Score&nbsp;</p>
				<p class="p-score">{{ score }}</p>
			</div>
			<NuxtLink to="/play/rule" class="mr-2"
				><fa-layers full-width class="icon-size"
					><fa :icon="faRedoAlt" class="icon-size pink" /><fa
						:icon="faPlay"
						transform="shrink-8.7 right-1.2 down-0.5"
						class="pink" /></fa-layers
			></NuxtLink>
			<NuxtLink to="/" class="mr-2"
				><fa :icon="faHome" class="icon-size yellow"
			/></NuxtLink>
			<a :href="tweetContent" target="_blank" class="mr-2">
				<fa :icon="faTwitter" class="icon-size lightblue" />
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
		score() {
			const arr = this.$store.getters.timeArr;
			if (arr.length == 0) {
				return null;
			}
			const minusPoint = fixed.STANDARD_TIME / fixed.NUM_OF_QUESTION / 10;
			const count = this.$store.getters.hintCount.length;
			// 基準時間 - 合計時間 - (マイナスP * ヒント数)
			return (
				fixed.STANDARD_TIME -
				arr.reduce((x, y) => {
					return x + y;
				}) -
				minusPoint * count
			);
		},
		tweetContent() {
			const url =
				"https://twitter.com/intent/tweet?url=https://find-typo.web.app";
			const text =
				this.score != null ? `%0a&text=SCORE:${this.score}%0a%0a` : "&text=";
			const hashtags =
				"&hashtags=FindTypo,エンジニア,engineer,間違い探し,typo,タイポ,vscode,VSCode";
			return `${url}${text}${hashtags}`;
		},
		faHome: () => faHome,
		faTwitter: () => faTwitter,
		faRedoAlt: () => faRedoAlt,
		faPlay: () => faPlay,
	},
};
</script>
<style scoped>
.top-wrapper {
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.icon-size {
	font-size: 3rem;
}
@media screen and (max-width: 800px) {
	.play-component-wrapper {
		height: 65vh;
	}
}
@media screen and (max-width: 425px) {
	.p-score {
		font-size: 2rem;
	}
	.icon-size {
		font-size: 2rem;
	}
}
</style>
