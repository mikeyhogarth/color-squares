<script>
  export let postFix;
  export let value;
  export let min = 10;
  export let max = 25;

  function increment() {
    if(value < max) {
      value += 1
    }
  }

  function decrement() {
    if(value > min) {
      value -= 1
    }
  }

</script>

<div class="rangeSelector">
  <button on:click={decrement} class="rangeButton circle">-</button>
  <button on:click={increment} class="rangeButton circle">+</button>
  <span class="numberInput">
    {value} {postFix}
  </span>
</div>

<style>
  button {
    cursor: pointer;
  }

.rangeSelector {
  margin-top: .5em;
  margin-bottom: .5em;
}
.rangeButton {
  background-color: blue;
  color: white;
  font-size: 1.5em;
  border: 0;
  width: 3em;
  height:3em;
}
.numberInput {
  font-size: 1.5em;
}

</style>