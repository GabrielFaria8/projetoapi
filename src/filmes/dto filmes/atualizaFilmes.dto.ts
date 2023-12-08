import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class AlteraUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @IsOptional()
    nome:string;
    
    @IsString()
    @IsOptional()
    genero: string;

    @IsString()
    @IsOptional()
    sinopse: string;

    @IsString()
    @IsOptional()
    duracao: string;

    @IsInt()
    @IsOptional()
    ano: BigInteger;


}