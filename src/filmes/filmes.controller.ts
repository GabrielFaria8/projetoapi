import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { filmesEntity } from "./filmes.entity";
import { FilmesArmazenados } from "./filmes.dm";
import {v4  as uuid} from 'uuid'
import { ListaFilmesDTO } from "src/filmes/dto filmes/listaFilmes.dto";
import { criaFilmesDTO } from "src/filmes/dto filmes/filmes.dto";
@Controller('/filmes')
export class FilmesController{    
    constructor(private clsFilmesArmazenados: FilmesArmazenados){
        
    }

    @Get()
    async RetornoUsuarios(){
        const filmesListados = await this.clsFilmesArmazenados.Filmes;
        const listaRetorno = filmesListados.map(
            filmes => new ListaFilmesDTO(
                filmes.id,
                filmes.nome,
                filmes.genero,
                filmes.sinopse,
                filmes.duracao,
                filmes.ano

            )
        );
        
        return listaRetorno;
    }

    @Delete('/:id')
    async removeFilmes(@Param('nome') nome: string){
        const filmeRemovido = await this.clsFilmesArmazenados.removeFilme(nome)

        return{
            filme: filmeRemovido,
            message: 'Filme removido'
        }
    }

    
    @Put('/:nome')
    async atualizaFilmes(@Param('nome') nome: string, @Body() novosDados: ListaFilmesDTO){
        const filmeAtualizado = await this.clsFilmesArmazenados.atualizaFilmes(nome, novosDados)

        return{
            usuario: filmeAtualizado,
            message: 'Filme atualizado'
        }
    }

    @Get(':id/compartilhar')
    compartilharFilme(@Param('id') id: string): string {
        return this.clsFilmesArmazenados.compartilharFilme(id);
    }

    @Post()
    async criaFilme(@Body() dadosFilmes: criaFilmesDTO){
        var filmes = new filmesEntity(uuid(),dadosFilmes.nome,dadosFilmes.genero,dadosFilmes.sinopse,
                                    dadosFilmes.duracao, dadosFilmes.ano)
        
            
        this.clsFilmesArmazenados.AdicionarFilmes(filmes);        
        var retorno={
            id: filmes.id,
            message:'Filme Adicionado'
        }
        
        return retorno
    }
}