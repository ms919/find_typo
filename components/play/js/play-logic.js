import { mapGetters } from "vuex";
import fixed from "~/const/const.js";

export default {
	computed: mapGetters(["currentItems", "itemsPointer"]),
	methods: {
		gotoNext() {
			if (this.itemsPointer + 1 == fixed.NUM_OF_QUESTION) {
				this.$router.push("/play/score");
			} else {
				this.$store.dispatch("gotoNext");
			}
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
