<template>
	<div>
		<p>
			1. 全5問出題です。<br />
			2. 各問題1つだけタイポが紛れています。<br />
			3. なるべく早くタイポを探そう!!
		</p>
		<div class="buttons">
			<NuxtLink to="/play/play" class="button btn-pink">Start</NuxtLink>
		</div>
	</div>
</template>
<script>
export default {
	created() {
		this.$store.dispatch("getAllItems");
	},
};
</script>
<style scoped>
div {
	text-align: left;
}
p {
	margin: 3rem;
	line-height: 4.5rem;
}
a {
	margin-bottom: 4rem;
}
.buttons {
	padding: 7rem 10rem 0 0;
	text-align: right;
}
@media screen and (max-width: 1366px) {
	p {
		font-size: 2.2rem;
		line-height: 3rem;
	}
	.buttons {
		padding: 0;
		text-align: center;
	}
}
@media screen and (max-width: 1024px) {
	p {
		margin: 2.5rem;
		font-size: 1.5rem;
		line-height: 2rem;
	}
	a {
		margin-bottom: 0;
	}
	.buttons {
		padding: 0;
		text-align: center;
	}
}
@media screen and (max-width: 425px) {
	p {
		margin: 2rem;
		line-height: 3rem;
	}
	.buttons {
		padding: 0;
		text-align: center;
	}
}
</style>
