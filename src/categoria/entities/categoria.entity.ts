import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({name: "tb_categoria"})
export class Categoria{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;


    @IsNotEmpty()
    @Column({length:100, nullable: false})
    @ApiProperty()
    nome: string;


    @ApiProperty({ type: () => Produto})
    @OneToMany(() => Produto, (Produto) => Produto.categoria)
    produto: Produto[]

}

