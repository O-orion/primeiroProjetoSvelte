<script lang="ts">

  import Form from "./components/Form.svelte";
import Titulo from "./components/Titulo.svelte";
  import Usuario from "./components/Usuario.svelte";
  import type IUsuario from "./interfaces/IUsuario";

  let usuario: IUsuario  | null = null;
  function definirUsuario(event: CustomEvent<IUsuario>) {
  console.log(usuario)
  usuario = event.detail
  }

  /*let usuario: IUsuario = {
    avatar_url: 'https://github.com/O-orion.png',
    login: 'Lucas Viana',
    nome: 'Lucas Viana Torres',
    perfil_url: 'https://github.com/O-orion',
    repositorios_publicos: 50,
    seguidores: 0
  } */

</script>

<div class="app">
  <header>
    <Titulo />
    <div class="busca-usuario">
      <!-- <Form bind:usuario={usuario}></Form> -->
      <Form on:alterarUsuario={definirUsuario}></Form>
    </div>
  </header>

  {#if usuario}
    <Usuario usuario={usuario} ></Usuario>
  {/if}
</div>

<style>
  .app {
    max-height: 100vh;
  }

  header {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .busca-usuario {
    position: relative;
    width: 70%;
  }

  

  
</style>
