<template>
	<div>
		<div v-for="item in items" :key="item.id">
			<div
				v-for="i in item"
				:key="i.id"
				v-html="$sanitize(i)"
				style="display: inline-block;"
			></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				[
					"<p class='orange quiz-p'>abcde</p>",
					"<p class='quiz-p' id='typo'>typo</p>",
					"<p class='quiz-p lightblue'>abcde</p>",
				],
				[
					"<p class='pink quiz-p'>abcde</p>",
					"<p class='quiz-p'>abcde</p>",
					"<p class='quiz-p'>abcde</p>",
				],
			],
		};
	},
	methods: {
		gotoNext() {
			this.$store.dispatch("gotoNext");
		},
	},
	mounted() {
		// タイポとクリックイベントを紐付け
		const typo = document.getElementById("typo");
		typo.addEventListener("click", this.gotoNext);
		// コンポーネント削除前にクリックイベントを削除
		this.$once("hook:beforeDestroy", () => {
			typo.removeEventListener("click", this.gotoNext);
		});
	},
};
</script>
