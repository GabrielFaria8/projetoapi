import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";


export class criaFilmesDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    nome:string;
    
    @IsString()
    @IsNotEmpty({message: "genero Não pode ser vazio"})
    genero: string;

    @IsString()
    @IsNotEmpty({message: "sinopse Não pode ser vazio"})
    sinopse: string;

    @IsString()
    @IsNotEmpty({message: "duração Não pode ser vazio"})
    duracao: string;

    @IsInt()
    @IsNotEmpty({message: "ano Não pode ser vazio"})
    ano: BigInteger;

   
}