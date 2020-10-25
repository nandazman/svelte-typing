<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<script type="module" lang="ts">
	import DisplayWords from "./component/DisplayWords.svelte";
	import Action from "./component/Action.svelte";
	import Result from "./component/Result.svelte";
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

	let keystrokes = {
		total: 0,
		incorrect: 0
	}

	let result: boolean = false;
	onMount(async () => {
		await getWordLists();
	})
	const getWordLists = async () => {
		wordLists = [];
		const response = await API.get()
		const getSartingPoint = Math.floor(Math.random() * 1592);
		const sentences = response.data.slice(getSartingPoint, getSartingPoint + 50)
		wordLists = adjustArrayText(sentences);
	};

	const adjustArrayText = (sentences: any) => {
		const displayWords = [];
		for (let i = 0; i < sentences.length; i++) {
			const words = sentences[i].text.split(' ');
			for (let j = 0; j < words.length; j++) {
				if (displayWords.length === 250) {
					return displayWords;
				};
				displayWords.push({
					text: words[j]
				})
			}
		}
	}

</script>

<main>
	{#if !result}
		<DisplayWords bind:currentWord={currentWord} bind:wordLists={wordLists} bind:containerPosition={containerPosition} />
	{/if}
	<Action 
		on:showResult={(value) => {
			result = value.detail;
		}} 
		bind:currentWord={currentWord} 
		bind:wordLists={wordLists} 
		bind:keystrokes={keystrokes}
		on:getWordLists={getWordLists} 
		bind:containerPosition={containerPosition}/>
	{#if result}
		<Result 
			bind:currentWord={currentWord}
			bind:keystrokes={keystrokes} 
			bind:wordLists={wordLists}
		/>
	{/if}
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		font-family: 'Montserrat', sans-serif;
		
		@media (min-width: 640px) {
			max-width: none;
		}
	}


</style>