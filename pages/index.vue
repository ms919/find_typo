<template>
	<div>
		<div class="title">
			<h1 class="for-inline">Find&nbsp;</h1>
			<h1 class="for-block">Find</h1>
			<h1><span class="typo">Typo</span></h1>
			<p class="sm-size">
				for the&nbsp; VSCoder<br />
				by&nbsp; the&nbsp; VSCoder<br />
				of&nbsp; the&nbsp; VSCoder
			</p>
		</div>
		<div class="buttons">
			<NuxtLink to="/play/rule" class="button btn-pink">Play</NuxtLink>
		</div>
	</div>
</template>

<style scoped>
.title {
	width: 50%;
	height: 50vh;
	padding: 12rem 0 0 15rem;
}
.title h1 {
	display: inline;
	margin-bottom: 1rem;
}
.for-block {
	display: none !important;
}
.sm-size {
	font-size: 2rem;
	text-align: left;
}
.buttons {
	padding: 6rem 15rem;
	text-align: right;
}
@media screen and (max-width: 1024px) {
	.title {
		width: 100%;
		padding: 10rem 0 0 10rem;
	}
	.buttons {
		padding: 6rem 10rem;
	}
}
@media screen and (max-width: 425px) {
	.title {
		padding: 5rem 0;
	}
	.title h1 {
		font-size: 8rem;
		display: block;
		text-align: center;
	}
	.for-block {
		display: block !important;
	}
	.for-inline {
		display: none !important;
	}
	.sm-size {
		font-size: 1.5rem;
		text-align: center;
	}
	.buttons {
		padding: 0;
		padding-top: 13rem;
		text-align: center;
		height: 100vh;
	}
}
</style>
