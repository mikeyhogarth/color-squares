<script>
  import { currentColor, currentBorder, red } from "../store"

  const colors = [
    red,
    "#F09030",
    "#FFDF00",
    "#4CBB17",
    "#00B7EB",
    "indigo",
    "violet",
    "magenta",
    "LightGray",
    "DarkGray",
    "Gray",
    "#FCD667",
    "#82EEFD",
    "#FFFF9F",
    "#50C878",
    "#9867C5",
    "#D75FA4"
  ]

</script>

<button 
    style={`
      background-color: white;
      border: 5px solid ${$currentColor == "white" && $currentBorder == null ? "black" : "silver"};
      `}
    class="circle palletteItem" on:click={() =>{ $currentColor = "white"; $currentBorder = null}}>
</button>

{#each colors as color}
  <button 
  class="circle palletteItem" 
  style={`background-color: ${color}; border: 5px solid ${color === $currentColor ? "black" : "white"};`}
    on:click={() => { $currentColor = color; $currentBorder=null}}>
  </button>
{/each}

<br />
<div class="circle palletteItem" style={`width: 40px;height: 40px;border: 5px solid ${"white" === $currentColor && red == $currentBorder ? "black" : "white"};`}>
<button 
    style={`
      background-color: white;
      border: 10px solid ${red};
      width: 40px;
      height: 40px;
      
      `}
    class="circle palletteItem" 
    on:click={() => { $currentColor = "white"; $currentBorder = red }}>
</button>
</div>


<style>

.circle {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: inline-block;
}

.palletteItem {
  margin-right: .5em; 
}
</style>