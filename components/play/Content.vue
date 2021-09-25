<template>
	<div>
		<div v-for="item in currentItems" :key="item.id">
			<div
				v-for="i in item"
				:key="i.id"
				v-html="$sanitize(i)"
				style="display: inline-block;"
			></div>
		</div>
	</div>
</template>

<script src="./js/play-logic.js"></script>
