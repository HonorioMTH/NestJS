import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemService } from "src/postagem/service/postagem.service";
import { TemaController } from "./controller/tema.controller";
import { TemaService } from "./service/tema.service";
import { Tema } from "./entities/tema.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],    //nome da tabela entre colchetes
    providers: [TemaService],       //service
    controllers: [TemaController],    //controller
    exports: [TypeOrmModule],

})


export class TemaModule { }

