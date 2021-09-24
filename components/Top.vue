<template>
	<div>
		<div class="title">
			<h1>Find <span>Typo</span></h1>
			<p>
				for the vscoder<br />
				by&nbsp; the vscoder<br />
				of&nbsp; the vscoder
			</p>
		</div>
		<div class="buttons">
			<NuxtLink type="button" to="/play" class="button btn-pink">Play</NuxtLink>
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
span {
	text-decoration: underline wavy 0.3rem #007acc;
	text-decoration-skip-ink: none;
}
.buttons {
	position: absolute;
	left: 60%;
	top: 49%;
	width: 20%;
	text-align: center;
}
</style>
