<script type="module" lang="ts">
	interface Quotes {
		text?: string;
		author?: number;
	}
	import API from "../services/api";
	import { onMount } from 'svelte';
	let timer = {
		start: false,
		interval: null,
		minutes: 1,
		seconds: 0,
		init: true
	}
	let inputUser: string;
	let wordLists: any[] = [];
	let containerPosition = {
		offsetTop: 0,
		currentPositionTop: 0
	}
	const currentWord = {
		index: 0,
		offsetTop: 0
	}

	onMount(async () => {
		wordLists = await getWordLists();
	})
	const getWordLists = async () => {
		const response = await API.get()
		const getSartingPoint = Math.floor(Math.random() * 1592);
		const sentences = response.data.slice(getSartingPoint, getSartingPoint + 50)
		const displayWords = [];

		for (let i = 0; i < sentences.length; i++) {
			const words = sentences[i].text.split(' ');
			for (let j = 0; j < words.length; j++) {
				if (displayWords.length === 250) return displayWords;
				displayWords.push({
					text: words[j]
				})
			}
		}
	};

	const checkGameProgress = () => {
		return timer.start;
	}

	const startTimer = () => {
		timer.interval = setInterval(() => {
			if (timer.seconds !== 0) {
				timer.seconds--;
			} else if (timer.minutes !== 0) {
				timer.minutes--;
				if (timer.minutes === 0) {
					timer.seconds = 59;
				}
			} else {
				timer.start = false;
				wordLists = [];
				inputUser = '';
			}
		}, 1000)
	}

	const startGame = () => {
		if (!timer.start){ 
			timer.start = true;
			timer.init = false;
			startTimer();
		};
	}
	
	const userPressKey = ({ keyCode }) => {
		const inGame = checkGameProgress();
		if (!inGame) {
			startGame();
		}
		const typedWord = inputUser || '';
		const word = wordLists[currentWord.index].text;
		wordLists[currentWord.index].incorrect = false;

		if (keyCode === 32) {
			procedNextWord(typedWord, word)
		} else {
			checkCurrentActiveWord(typedWord, word)
		}
	}

	const checkCurrentActiveWord = (typedWord:string, word:string) => {
		for (let i = 0; i < typedWord.trim().length; i++) {
			if(word[i] !== typedWord[i]) {
				wordLists[currentWord.index].incorrect = true;
				break;
			}
		}
	}
	const procedNextWord = (typedWord:string, word:string) => {
		const splittedInput = typedWord.split(' ');
		updateLatestWordStatus(word, splittedInput[0]);
		initFirstWord(splittedInput[1]);
		moveDisplayWordPosition()
	}
	
	const initFirstWord = (initWord?:string) => {
		inputUser = initWord || '';
	}

	const moveDisplayWordPosition = () => {
		currentWord.index++;
		// inside HTMLElementTagNameMap interface there is HTMLSpanElement
		// then we can use offsetTop property
		const activeElement = document.querySelectorAll<HTMLSpanElement>('.word')[currentWord.index];
		if (activeElement && activeElement.offsetTop > currentWord.offsetTop) {
			containerPosition.offsetTop += 52;
			currentWord.offsetTop = activeElement.offsetTop;
		}
	}

	const updateLatestWordStatus = (activeWord: string, lastWord: string) => {
		if(activeWord.trim() !== lastWord.trim()) {
				wordLists[currentWord.index].incorrect = true;
			}
	}

	const restart = async () => {
		wordLists = await getWordLists();
		initFirstWord()
		currentWord.index = 0;
		containerPosition.offsetTop = 0;
		currentWord.offsetTop = 0;
		timer = {
			start: false,
			minutes: 1,
			interval: null,
			seconds: 0,
			init: true
		}
	}

	const getClassWordBasedOnInput = (i: number, word: any) => {
		if (currentWord.index === i) {
			if (word.incorrect) return 'active incorrect';
			return 'active'
		}
		if (i < currentWord.index) {
			if (word.incorrect) return 'incorrect';
			return 'correct';
		}
		return ''
	}

	const adjustDispayNumber = (number: number) => {
		return number.toString().length === 1 ? '0' + number : number;
	}

</script>

<main>
	<div class="container">
		<div class="word-container" style="bottom:{containerPosition.offsetTop}px">
			{#each wordLists as word, i}
				<span class="word {getClassWordBasedOnInput(i, word)}">{word.text}</span>
			{/each}
		</div>
	</div>
	<div class="flex">
		<input type='text' bind:value="{inputUser}" on:keyup={userPressKey} disabled={!timer.init && !timer.start}>
		<div class="timer">
			<span class="{timer.start ? 'timer-animation' : ''}">
				{adjustDispayNumber(timer.minutes)}:{adjustDispayNumber(timer.seconds)}
			</span>
		</div>
		<button class="restart" on:click={restart}>Restart</button>
	</div>
</main>

<style lang="scss">
	.flex {
		display: flex;
		justify-content: center;
	}

	.timer {
		border: 1px solid #079e73;
		margin: 0 .5rem;
		height: 35px;
		line-height: 30px;
		padding: 0 1rem;
		font-weight: bold;
		.timer-animation {
			animation: blinking 2s infinite;
			@keyframes blinking {
				0% {opacity: 1;}
				50% {opacity: 0;}
				100% {opacity: 1;}
			}
		}
	}
	button {
		&.restart {
			background-color: #079e73;
			border: 1px solid #18765b;
			cursor: pointer;
			color: white;
			transition: background-color 250ms;
			&:hover {
				background-color: #1ea780;
			}
		}
	}
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		.container {
			height: 110px;
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