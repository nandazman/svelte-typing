<script type="module" lang="ts">
	import DisplayWords from "./component/DisplayWords.svelte";
	import Action from "./component/Action.svelte";
	import API from "../services/api";
	import { onMount } from 'svelte';

	let wordLists: any[] = [];

	let containerPosition = {
		offsetTop: 0,
		currentPositionTop: 0
	}
	
	let currentWord = {
		index: 0,
		offsetTop: 0
	}

	onMount(async () => {
		await getWordLists();
	})
	const getWordLists = async () => {
		wordLists = [];
		const response = await API.get()
		const getSartingPoint = Math.floor(Math.random() * 1592);
		const sentences = response.data.slice(getSartingPoint, getSartingPoint + 50)
		const displayWords = [];

		for (let i = 0; i < sentences.length; i++) {
			const words = sentences[i].text.split(' ');
			for (let j = 0; j < words.length; j++) {
				if (displayWords.length === 250) {
					wordLists = displayWords;
				};
				displayWords.push({
					text: words[j]
				})
			}
		}
	};

</script>

<main>
	<DisplayWords bind:currentWord={currentWord} bind:wordLists={wordLists} bind:containerPosition={containerPosition} />
	<Action bind:currentWord={currentWord} bind:wordLists={wordLists} on:getWordLists={getWordLists} bind:containerPosition={containerPosition}/>
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		
		@media (min-width: 640px) {
			max-width: none;
		}
	}


</style>