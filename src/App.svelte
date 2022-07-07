<script>
  import store from "./store";
  import * as ActionsCounter from "./store/modules/counter/actions";
  import * as ActionsUser from "./store/modules/user/actions";
</script>

<button on:click={() => store.dispatch(ActionsUser.decrement())}>-</button>
{$store.user.userCount} user store
<button on:click={() => store.dispatch(ActionsUser.increment())}>+</button>
<hr />

<button on:click={() => store.dispatch(ActionsCounter.decrement())}>-</button>
{$store.counter.countValue} count store
<button on:click={() => store.dispatch(ActionsCounter.increment())}>+</button>
<button on:click={() => store.dispatch(ActionsCounter.request())}
  >fetch cats</button
>
<p>{$store.counter.cats.length} fetched cats</p>
<ul>
  {#each $store.counter.cats as item (item.id)}
    <li><img width="200" src={item.url} alt={item.id} /></li>
  {/each}
</ul>

<style>
  :global(body, html) {
    min-height: 100vh;
  }

  :global(body) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
