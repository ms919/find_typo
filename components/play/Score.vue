<template>
	<div class="d-flex justify-content-center text-left top-div">
		<div class="mr-4">
			<p class="orange">No.</p>
			<p v-for="i in num_of_q" :key="i" class="orange">{{ i }}</p>
		</div>
		<div class="mr-5">
			<p class="orange">Correct</p>
			<p v-for="record in dbData" :key="record.id">{{ record.correct }}</p>
		</div>
		<div class="mr-5">
			<p class="orange">Typo</p>
			<p v-for="record in dbData" :key="record.id">{{ record.typo }}</p>
		</div>
		<div>
			<p class="orange">Time</p>
			<p v-for="time in timeArr" :key="time.id">{{ time / 1000 }}</p>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import fixed from "~/const/const.js";

export default {
	data() {
		return {
			num_of_q: fixed.NUM_OF_QUESTION,
		};
	},
	computed: mapGetters(["dbData", "timeArr"]),
};
</script>

<style scoped>
.top-div {
	margin-top: 2rem;
}
</style>
