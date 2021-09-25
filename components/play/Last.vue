<template>
	<div>
		<div v-for="item in currentItems" :key="item.id">
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
import { mapGetters } from "vuex";

export default {
	computed: mapGetters(["currentItems"]),
	methods: {
		gotoNext() {
			this.$router.push('/play/score')
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
