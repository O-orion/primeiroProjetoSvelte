function buscarUsuario(nomeDeUsuario: string) {
    return fetch(`https://api.github.com/users/${nomeDeUsuario}`)
}

function buscaRepositorio(nomeDeUsuario: string) {
    return fetch(`https://api.github.com/users/${nomeDeUsuario}/repos?sort=created&per_page=5`)
}

export { buscarUsuario, buscaRepositorio }