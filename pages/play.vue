<template>
	<div
		class="play-wrapper d-flex flex-column justify-content-center align-items-center"
	>
		<p class="desc">{{ currentDesc }}</p>
		<div class="play-component-wrapper">
			<component :is="currentComponent"></component>
		</div>
	</div>
</template>

<script>
import Rule from "~/components/play/Rule";
import Play from "~/components/play/Play";
import { mapGetters } from "vuex";

export default {
	components: {
		Rule,
		Play,
	},
	computed: mapGetters(["currentComponent", "currentDesc"]),
};
</script>

<style scoped>
.play-wrapper {
	height: 90vh;
}
.desc {
	margin-left: 12%;
	align-self: start;
}
.play-component-wrapper {
	width: 80%;
	height: 70vh;
	border: 10px solid #3a3d41;
	border-radius: 15px;
	text-align: center;
	padding: 1rem;
}
</style>
