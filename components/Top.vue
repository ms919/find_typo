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
	/* background-color: white; */
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
	/* background-color: palegreen; */
}
.button {
	display: inline-block;
	text-align: center;
	width: 100%;
	vertical-align: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	box-sizing: border-box;
	padding: 0.375rem 0.75rem;
  margin-bottom: 2rem;
	font-size: 3rem;
	line-height: 1.5;
	border-radius: 0.8rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	transition-property: color, background-color, border-color, box-shadow;
	transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
	transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;
	transition-delay: 0s, 0s, 0s, 0s;
}
.btn-pink {
	color: #c586c0;
	background: #3a3d41;
	border: 5px solid #c586c0;
}
</style>
