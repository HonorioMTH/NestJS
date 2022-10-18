import { IsNotEmpty, MaxLength } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_produtos"})
export class Produto{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length:100, nullable: false})
    nome: string

    @Column("decimal", { precision: 5, scale: 2 })
    preco: number


    @ManyToOne(() => Categoria, (Categoria) => Categoria.produto, {
        onDelete: "CASCADE"
})

categoria: Categoria

}