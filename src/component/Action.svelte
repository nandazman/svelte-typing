<script lang="ts">
  import type { CurrentWord, ContainerPosition, KeyStroke } from '../model/index';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let currentWord: CurrentWord;
  export let wordLists: any[];
  export let containerPosition: ContainerPosition;
	export let keystrokes: KeyStroke;

  let inputUser: string;
  let game = {
		start: false,
		init: true,
		finish: false
	}
	let timer = {
		interval: null,
		minutes: 1,
		seconds: 0
	}

  const adjustDispayNumber = (number: number) => {
		return number.toString().length === 1 ? '0' + number : number;
  }

  const checkCurrentActiveWord = (typedWord:string, word:string) => {
		for (let i = 0; i < typedWord.trim().length; i++) {
			if(word[i] !== typedWord[i]) {
				keystrokes.incorrect++;
				wordLists[currentWord.index].incorrect = true;
				break;
			}
		}
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
				finishGame();
			}
		}, 1000)
	}

	const finishGame = () => {
		clearInterval(timer.interval);
		dispatch('showResult', true);
		game.start = false;
		game.finish = true;
		inputUser = '';
	}
  const startGame = () => {
		if (!game.start){ 
			game.start = true;
			game.init = false;
			startTimer();
		};
	}

  const checkGameProgress = () => {
		return game.start;
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
			keystrokes.total++;
			checkCurrentActiveWord(typedWord, word)
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
		clearInterval(timer.interval);
		dispatch('showResult', false);
		dispatch('getWordLists');
		initFirstWord()
		currentWord.index = 0;
		containerPosition.offsetTop = 0;
		currentWord.offsetTop = 0;
		timer = {
			minutes: 1,
			interval: null,
			seconds: 0
		}
		game = {
			start: false,
			init: true,
			finish: false
		}
	}
</script>

<div class="flex">
  <input type='text' bind:value="{inputUser}" on:keyup={userPressKey} disabled={!game.init && !game.start}>
  <div class="timer">
    <span class="{game.start ? 'timer-animation' : ''}">
      {adjustDispayNumber(timer.minutes)}:{adjustDispayNumber(timer.seconds)}
    </span>
  </div>
  <button class="restart" on:click={restart}>Restart</button>
</div>

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
</style>