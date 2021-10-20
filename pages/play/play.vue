<template>
	<div
		class="play-wrapper d-flex flex-column justify-content-center align-items-center"
	>
		<div class="d-flex align-items-center">
			<p class="desc mr-auto ml-2 pt-3">{{ currentDesc }}</p>
			<fa
				:icon="faExclamationCircle"
				@click="giveHint"
				class="icon-settings cleargreen ml-3"
			/>
			<fa
				v-if="muteFlg"
				:icon="faVolumeMute"
				@click="changeSoundSetting"
				class="icon-settings ml-3"
			/>
			<fa
				v-else
				:icon="faVolumeUp"
				@click="changeSoundSetting"
				class="icon-settings ml-3"
			/>
		</div>
		<div class="play-component-wrapper">
			<component :is="currentComponent"></component>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import {
	faExclamationCircle,
	faVolumeUp,
	faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

export default {
	computed: {
		...mapGetters(["currentDesc", "currentComponent", "muteFlg"]),
		faExclamationCircle: () => faExclamationCircle,
		faVolumeUp: () => faVolumeUp,
		faVolumeMute: () => faVolumeMute,
	},
	methods: {
		giveHint() {
			document.getElementById("typo").classList.add("typo");
			this.$store.dispatch("addHintCount", this.$store.getters.itemsPointer);
		},
		changeSoundSetting() {
			this.$store.dispatch("changeMuteFlg");
		},
	},
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
