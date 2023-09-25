
<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type IUsuario from "../interfaces/IUsuario";

    const dispatch = createEventDispatcher()
    let valorInput = "";
   // export let usuario: IUsuario | null

    async function submeter() {
        
        const respostaUsuario = await fetch(`https://api.github.com/users/${valorInput}`);
        const dadosUser = await respostaUsuario.json() // transformando resposta em um json.

        // Dispera um evento, contem as informações do segundo parâmetro.
        dispatch('alterarUsuario', {
        avatar_url: dadosUser.avatar_url,
        login: dadosUser.login,
        nome: dadosUser.name,
        perfil_url: dadosUser.html_url,
        repositorios_publicos: dadosUser.public_repos,
        seguidores: dadosUser.followers,
        }
        )
       
  }
</script>


<form on:submit|preventDefault={submeter}>
      <input type="text" class="input" bind:value={valorInput} />
      <div class="botao-container">
        <button type="submit" class="botao">Buscar</button>
      </div>
</form>

<style>
.input {
    padding: 15px 25px;
    width: calc(100% - 8.75rem);
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #2e80fa;
    box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
    outline: 0;
  }

.input::placeholder {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 300;
    font-size: 19.5px;
    line-height: 26px;
    color: #6e8cba;
  }

.botao-container {
    position: absolute;
    width: 9.625rem;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
  }

.botao {
    padding: 15px 24px;
    border-radius: 8px;
    border: none;
    background: #2e80fa;
    line-height: 26px;
    color: #fff;
    font-size: 22px;
    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    gap: 13px;
  }

.botao:hover {
    background: #4590ff;
  }
</style>
