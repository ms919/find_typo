<template>
	<div>
		<div class="title">
			<h1>Find <span class="wave">Typo</span></h1>
			<br>
			<p>
				for the&nbsp; VSCoder<br />
				by&nbsp; the&nbsp; VSCoder<br />
				of&nbsp; the&nbsp; VSCoder
			</p>
		</div>
		<div class="buttons">
			<NuxtLink type="button" to="/play/rule" class="button btn-pink"
				>Play</NuxtLink
			>
			<a href="#">Login with</a>
		</div>
	</div>
</template>

<style scoped>
.title {
	position: absolute;
	left: 15%;
	top: 28%;
}
.wave {
	text-decoration: underline wavy 0.33rem #007acc;
	text-decoration-skip-ink: none;
}
/* .sm-size {
	font-size: 2.7rem;
} */
.buttons {
	position: absolute;
	left: 60%;
	top: 49%;
	width: 20%;
	text-align: center;
}
</style>
