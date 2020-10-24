<script lang="ts">
  import type { CurrentWord, ContainerPosition } from '../model/index';

  export let currentWord: CurrentWord;
  export let wordLists: any[];
  export let containerPosition: ContainerPosition;
  
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
</script>
<div class="container">
  <div class="word-container" style="bottom:{containerPosition.offsetTop}px">
    {#each wordLists as word, i}
      <span class="word {getClassWordBasedOnInput(i, word)}">{word.text}</span>
    {/each}
  </div>
</div>

<style lang="scss">
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
</style>