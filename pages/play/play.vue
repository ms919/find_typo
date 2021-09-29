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
import { mapGetters } from "vuex";

export default {
	computed: mapGetters(["currentDesc", "currentComponent"]),
};
</script>
