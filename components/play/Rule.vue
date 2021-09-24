<template>
	<div>
		<p>
			1. There are 5 questions in total.<br />
			2. There is only 1 typo in each question. <br />
			3. Try to find the typo as soon as possible!!
		</p>
		<div class="flex-wrapper">
			<p>
				1. 全5問出題です。<br />
				2. 各問題1つだけタイポが紛れています。<br />
				3. なるべく早くタイポを探そう!!
			</p>
			<button @click="setCurrentComponent" class="button btn-pink">Start</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Rule",
  methods: {
    setCurrentComponent() {
      this.$store.commit('changeCurrentComponent', { nextComponent: "Play", nextDesc: "1/5" })
    },
  }
};
</script>

<style scoped>
div {
	text-align: left;
}
.flex-wrapper {
	display: flex;
}
p {
	margin: 3rem;
}
button {
	align-self: flex-end;
	margin-bottom: 3rem;
}
</style>
