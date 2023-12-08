export class ListaFilmesDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly genero: string,
        readonly sinopse: string,
        readonly duracao: string,
        readonly ano: BigInteger
        ){}
}