<template>
	<div
		class="play-wrapper d-flex flex-column justify-content-center align-items-center"
	>
		<div class="d-flex top-wrapper">
			<div class="d-flex mr-auto ml-2 pt-4">
				<p class="p-score">Score&nbsp;</p>
				<p class="p-score">{{ commaScore }}&nbsp;{{ level }}</p>
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
	data() {
		return {
			level: "",
			levelText: "",
		};
	},
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
		commaScore() {
			return this.score.toLocaleString();
		},
		tweetContent() {
			const url =
				"https://twitter.com/intent/tweet?url=https://find-typo.web.app";
			const text =
				this.score != null
					? `%0a&text=SCORE:${this.commaScore}【${this.level}】%0a%0a${this.levelText}%0a%0a`
					: "&text=";
			const hashtags =
				"&hashtags=FindTypo,エンジニア,間違い探し,typo,タイポ,vscode,VSCode";
			return `${url}${text}${hashtags}`;
		},
		faHome: () => faHome,
		faTwitter: () => faTwitter,
		faRedoAlt: () => faRedoAlt,
		faPlay: () => faPlay,
	},
	mounted() {
		const score = this.score;
		switch (true) {
			case score >= 150000:
				this.level = "神レベル";
				this.levelText =
					"どんなタイポもすぐに発見！？あなたのタイポ発見力はまさに神がかり！";
				break;
			case score >= 130000:
				this.level = "王者レベル";
				this.levelText =
					"あなたのタイポ発見力は素晴らしいの一言。神レベルも夢じゃない！？";
				break;
			case score >= 100000:
				this.level = "凄腕レベル";
				this.levelText = "タイポ発見の凄腕です！";
				break;
			case score >= 80000:
				this.level = "つよつよレベル";
				this.levelText = "凄腕まであと一歩…！！";
				break;
			case score >= 50000:
				this.level = "中級レベル";
				this.levelText = "この調子でつよつよを目指そう！";
				break;
			default:
				this.level = "初心者レベル";
				this.levelText = "タイポ発見力、鍛えがいがありそう…！？";
		}
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
