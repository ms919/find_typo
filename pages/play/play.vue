<template>
	<div
		class="play-wrapper d-flex flex-column justify-content-center align-items-center"
	>
		<p class="desc">{{ currentDesc }}</p>
		<div class="play-component-wrapper">
			<Play/>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import "~/assets/css/play.css";

export default {
	computed: mapGetters(["currentDesc"]),
};
</script>
