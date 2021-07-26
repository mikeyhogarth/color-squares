<script>
  import { pixels, maxX, maxY } from "./store"
  import RangeSelector from "./Tools/RangeSelector.svelte";
  import Pallete from "./Tools/Pallette.svelte";
  
</script>

<div class="toolpanel">
  <fieldset>
    <legend>Colours</legend>
      <Pallete />
    </fieldset>

    <fieldset>
      <legend>Dimensions</legend>
      <RangeSelector bind:value={$maxX} postFix="Squares Wide" min=10 max=25 />
      <RangeSelector bind:value={$maxY} postFix="Squares High" min=10 max=25 />
    </fieldset>

    <div class="otherTools toolbox">
      <button class="clearButton" on:click={() => pixels.clear()}>Clear</button>
    </div>
</div>

<style>
.toolpanel {
  width: 25em;
  min-width: 25em;
  margin-right: 1em;
}

legend {
  font-size: 1.5em;
  font-weight: bold;
}

fieldset {
  margin-bottom: 1.5em;
}

.clearButton {
  background-color: red;
  color: white;
  border: 0;
  border-radius: .1em;
  font-size: 1.5em;
  font-weight: bold;
  padding: .5em;
  cursor: pointer;
}

</style>