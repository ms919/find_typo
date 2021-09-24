<template>
	<div>
		<header class="header mb-auto"></header>
		<nuxt />
		<footer class="footer fixed-bottom"></footer>
	</div>
</template>
<style>
header,
footer {
	background-color: #3a3d41;
	height: 30px;
}
body {
	font-family: Menlo, Monaco, "Courier New", monospace;
	color: #d4d4d4;
	background-color: #1e1e1e;
}
h1 {
	font-size: 5rem;
}
p {
	font-size: 3rem;
}
a {
	font-size: 2.5rem;
	color: #d4d4d4;
}
.button {
	display: inline-block;
	text-align: center;
	vertical-align: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	box-sizing: border-box;
	padding: 0.375rem 7rem;
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
.quiz-p {
	line-height: 1em;
	cursor: pointer;
	margin-right: 1rem;
}
.orange {
	color: #ce9178;
}
.skyblue {
	color: #9cdcfe;
}
.lightblue {
	color: #569cd6;
}
.green {
	color: #6a9955;
}
.pink {
	color: #c586c0;
}
.yellow {
	color: #dcdcaa;
}
.cleargreen {
	color: #4ec9b0;
}
.blue {
	color: #007acc;
}
</style>
