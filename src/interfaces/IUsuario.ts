import type { IRepositorios } from "./IRepositorios";

export default interface IUsuario {
    login: string,
    avatar_url: string,
    perfil_url: string,
    repositorios_publicos: number,
    seguidores: number,
    nome: string,
    repositorios: IRepositorios[]
}