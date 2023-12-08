export class filmesEntity{
    id: string;
    nome: string;
    genero: string;
    sinopse: string;
    duracao: string;
    ano: BigInteger;

    constructor(id:string, nome:string, genero: string, sinopse: string, duracao: string, ano: BigInteger){
        this.id = id
        this.nome = nome
        this.genero = genero
        this.sinopse = sinopse
        this.duracao = duracao
        this.ano = ano;
    }

    compartilhar(): any{
        return{
            mensagem: `Estou assistindo ao filme ${this.nome} que conta a historia de uma ${this.sinopse}, que foi lançado no ano ${this.ano} e tem duração
            de ${this.duracao} minutos.Assista também!!`
        };
    }
}