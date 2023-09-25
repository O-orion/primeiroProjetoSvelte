import type { IRepositorios } from "../interfaces/IRepositorios";
import type IUsuario from "../interfaces/IUsuario";

export default function montarUsuario(dadosUser: any, dadosRepo: any): IUsuario {
    const repoRecente = dadosRepo.map((repo) => {
        return  {
            nome: repo.name,
            url: repo.url
        } as IRepositorios;
    })

    return {
            avatar_url: dadosUser.avatar_url,
            login: dadosUser.login,
            nome: dadosUser.name,
            perfil_url: dadosUser.html_url,
            repositorios_publicos: dadosUser.public_repos,
            seguidores: dadosUser.followers,
            repositorios: repoRecente
    }
}