<script>


  import { maxX, maxY, pixels, currentColor, currentBorder} from './store.js';

  const inset = 6;
  const dim = 50;
  
  function handleDrag(e, ix, iy) {
    if(e.type === 'touchmove' || e.buttons & 1) {
      pixels.addColor(ix, iy, $currentColor, $currentBorder)
    }
  }


</script>

<svg class="grid" width={dim*$maxX} height={dim*$maxY} xmlns="http://www.w3.org/2000/svg">

  {#each Array($maxX) as __dirname, ix}
    {#each Array($maxY) as __dirname, iy}
      <rect 
        x={(dim*ix)} 
        y={(dim*iy)} 
        width={dim} 
        height={dim} 
        stroke="#000" 
        stroke-width="0.5"
        on:click={() => pixels.addColor(ix, iy, $currentColor, $currentBorder)}
        on:touchstart={() => pixels.addColor(ix, iy, $currentColor, $currentBorder)}
        on:mousemove={(e) => handleDrag(e, ix, iy)}
        fill={$pixels[`${ix},${iy}`]?.color || "white"} 
        />
        
        {#if $pixels[`${ix},${iy}`]?.border !== "white"}
          <path d={`M ${dim*ix + inset/2} ${dim*iy + inset/2} h ${dim - inset} v ${dim - inset} h ${-dim + inset} Z`} 
          fill="none" stroke={$pixels[`${ix},${iy}`]?.border} stroke-width={inset}/>
        }
        {/if}
    {/each}
  {/each}
</svg>

<style>
.grid {
  touch-action: none;
  -ms-touch-action: none;
}
</style>
