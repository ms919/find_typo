<template>
	<div
		class="play-wrapper d-flex flex-column justify-content-center align-items-center"
	>
		<div class="d-flex align-items-center">
			<p class="desc mr-auto ml-2 pt-3">{{ currentDesc }}</p>
			<fa :icon="faExclamationCircle" @click="giveHint" class="icon-settings cleargreen ml-3" />
		</div>
		<div class="play-component-wrapper">
			<component :is="currentComponent"></component>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export default {
	computed: {
		...mapGetters(["currentDesc", "currentComponent"]),
		faExclamationCircle: () => faExclamationCircle,
	},
	methods: {
		giveHint(){
			document.getElementById("typo").classList.add("typo");
			this.$store.dispatch("addHintCount", this.$store.getters.itemsPointer);
		}
	}
};
</script>

<style scoped>
.icon-settings {
	font-size: 2.7rem;
	cursor: pointer;
}
@media screen and (max-width: 425px) {
	.icon-settings {
		font-size: 2rem;
	}
}
</style>
