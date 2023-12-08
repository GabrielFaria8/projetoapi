import { Injectable } from "@nestjs/common";
import { NOMEM } from "dns";
import { filmesEntity } from "./filmes.entity";

@Injectable()
export class FilmesArmazenados{
    #filmes: filmesEntity[] = [];  

    AdicionarFilmes(filmes: filmesEntity){
        this.#filmes.push(filmes);
    }

    atualizaFilmes(nome: string, dadosAtualizacao: Partial<filmesEntity>){
        const filmes = this.buscaPorID(nome);

        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor]) => {
                if(chave === 'id'){
                    return
                }
                filmes[chave] = valor;
            }
        )

        return filmes;
    }

    private buscaPorID(id: string){
        const possivelFilme = this.#filmes.find(
            filmeSalvo => filmeSalvo.id === id
        )

        if (!possivelFilme){
            throw new Error('Filme nao encontrado')
        }
        
        return possivelFilme;
    }

    compartilharFilme(id: string): string {
        const filme = this.buscaPorID(id);
        return filme.compartilhar();
    }
    async removeFilme(id: string){
        const filme = this.buscaPorID(id);

        this.#filmes = this.#filmes.filter(
            filmeSalvo => filmeSalvo.id !== id
        )

        return filme;
    }


    get Filmes(){        
        return this.#filmes;
    }
}