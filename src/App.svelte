<script lang="ts">
	import API from "../services/api";
	import _ from "../node_modules/lodash";
	import { onMount } from 'svelte';
	let inputUser: string;
	let examples = [];
	let containerPosition = {
		offsetTop: 0,
		currentPositionTop: 0
	}
	const currentWord = {
		index: 0
	}

	onMount(async () => {
		examples = await getWordLists();
	})
	const getWordLists = async () => {
		const response = await API.get()
		const sentences = response.data.slice(0, 50)
		const displayWords = [];
		_.forEach(sentences, (data) => {
			const words = data.text.split(' ');
			_.forEach(words, (word) => {
				displayWords.push({
					text: word
				})
			});
		})
		return displayWords;
	};
	
	const userPressKey = ({ keyCode }) => {
		checkUserInputWithWord(keyCode === 32)
		if (keyCode === 32) {
			initFirstWord();
			currentWord.index++;
		}
	}
	
	const initFirstWord = () => {
		inputUser = '';
	}

	const restart = async () => {
		initFirstWord()
		currentWord.index = 0;
		examples = await getWordLists();
	}

	const checkUserInputWithWord = (lastInput = false) => {
		const typedWord = inputUser || '';
		const word = examples[currentWord.index].text;
		examples[currentWord.index].incorrect = false;

		if (lastInput) {
			if(word !== typedWord.trim()) {
				examples[currentWord.index].incorrect = true;
				return;
			}
		}

		for (let i = 0; i < typedWord.trim().length; i++) {
			if(word[i] !== typedWord[i]) {
				examples[currentWord.index].incorrect = true;
				break;
			}
		}
	}

	const getClassWordBasedOnInput = (i, example) => {
		if (currentWord.index === i) {
			if (example.incorrect) return 'active incorrect';
			return 'active'
		}
		if (i < currentWord.index) {
			if (example.incorrect) return 'incorrect';
			return 'correct';
		}
		return ''
	}

</script>

<main>
	<div class="container">
		<div class="word-container" style="top:{containerPosition.offsetTop}">
			{#each examples as example, i}
				<span class="word {getClassWordBasedOnInput(i, example)}">{example.text}</span>
			{/each}
		</div>
	</div>
	<input type=text bind:value="{inputUser}" on:keyup={userPressKey}>
	<button on:click={restart}>Restart</button>
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		.container {
			height: 100px;
			overflow: hidden;
			box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
			max-width: 815px;
			margin: auto;
			background: #fff;
			padding: 0.5rem 1rem;
			margin-bottom: 1rem;
			.word-container {
				position: relative;
				display: flex;
				flex-wrap: wrap;
				.word {
					line-height: 1.5em;
					font-size: 1.75em;
					border-radius: 5px;
					margin-bottom: 10px;
					padding: 0 5px;
					user-select: none;
					&.incorrect {
						color: red;
					}
					&.correct {
						color: green;
					}
					&.active {
						background-color: #d4d3d3;
					}
				}
			}

		}
		@media (min-width: 640px) {
			max-width: none;
		}
	}


</style>