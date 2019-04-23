<template>
	<div class="card">
		<div class="card-body">
			<h3>{{ title }}</h3>
			<p>{{ content }}</p>
			<button class="btn" :class="parceColor">{{ textButton }}</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'content', 'textButton', 'color'],
		data () {
			return {
				parceColor: 'btn-primary',
			}
		},
		mounted () {
			if (this.color) {
				this.parceColor = 'btn-' + this.color;
			}
		}
	}
</script>