import { Module } from "@nestjs/common";
import { FilmesController } from "./filmes.controller";
import { FilmesArmazenados } from "./filmes.dm";


@Module({
    controllers:[FilmesController],
    providers: [FilmesArmazenados]
})

export class FilmesModule{
    
}