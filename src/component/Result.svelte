<script lang="ts">
  import type { KeyStroke, CurrentWord } from '../model/index';
  export let currentWord: CurrentWord;
  export let keystrokes: KeyStroke;
  export let wordLists: any[];

  let wpm: number;
  let correctWords: number;
  let incorrectWords: number;
  let accuracy: number;
  const calculateSummary = () => {
    // since only one minute, all typed word until game finish is a wpm as well
    wpm = calculateWPM();
    correctWords = countCorrectWord();
    incorrectWords = countIncorrectWord(wpm, correctWords);
    accuracy = calculateAccuracy(keystrokes.total, keystrokes.incorrect);
  }

  const calculateWPM = () => {
    const typedWords = getTypedWord();
    const totalWords = typedWords.length;
    return totalWords;
  }

  const countCorrectWord = () => {
    const typedWords = getTypedWord();
    let total = 0;
    typedWords.forEach((item) => {
      if (!item.incorrect) {
        total++;
      }
    })
    return total;
  }

  const countIncorrectWord = (totalWords: number, correctWords: number) => {
    return wpm - correctWords;
  }

  const calculateAccuracy = (totalKeystroke: number, incorrectKey: number) => {
    return Math.floor((totalKeystroke - incorrectKey) / totalKeystroke * 100);
  }

  const getTypedWord = () => {
    return wordLists.slice(0, currentWord.index);
  }

  calculateSummary();
</script>
<div class="result">
  <div class="result__summary">
    {wpm} WPM
  </div>
  <table class="result__detail">
    <tr class="detail__text">
      <td>Keystrokes</td>
      <td>:</td>
      <td><span class="correct">{keystrokes.total - keystrokes.incorrect}</span> | <span class="incorrect">{keystrokes.incorrect}</span></td>
    </tr>
    <tr class="detail__text">
      <td>Accuracy</td>
      <td>:</td>
      <td>{accuracy}%</td>
    </tr>
    <tr class="detail__text">
      <td>Correct word(s)</td>
      <td>:</td>
      <td><span class="correct">{correctWords}</span></td>
    </tr>
    <tr class="detail__text">
      <td>Wrong word(s)</td>
      <td>:</td>
      <td><span class="incorrect">{incorrectWords}</span></td>
    </tr>
  </table>
</div>

<style lang="scss">
  .result {
    display: flex;
    justify-content: center;
    .result__summary {
      font-weight: bold;
      font-size: 3rem;
      color: #079e73;
      padding: 1rem;
    }
    .result__detail {
      display: flex;
      flex-direction: column;
      .detail__text {
        margin-top: 0;
        margin-bottom: .5rem;
        text-align: left;
        td:first-child {
          width: 130px;
        }
        .correct {
          color: #079e73;
        }
        .incorrect {
          color: #d20f0f;
        }
      }
    }
  }
</style>