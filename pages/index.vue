<template>
	<div>
		<div class="title">
			<h1>Find <span class="wave">Typo</span></h1>
			<br>
			<br>
			<p class="hoge sm-size">
				<span class="sm-size">for the&nbsp;</span> VSCoder<br />
				<span class="sm-size">by&nbsp; the&nbsp;</span> VSCoder<br />
				<span class="sm-size">of&nbsp; the&nbsp;</span> VSCoder
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
	color: #ce9178;
	text-decoration: underline wavy 0.33rem #007acc;
	text-decoration-skip-ink: none;
}
.sm-size {
	font-size: 2rem;
}
.hoge {
	/* background-color: palegreen; */
	text-align: left;
}
.buttons {
	position: absolute;
	left: 60%;
	top: 49%;
	width: 20%;
	text-align: center;
}
</style>
