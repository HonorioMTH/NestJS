import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBSM(): string {
    return 'Aqui estão as BSMs: Responsabilidade pessoal, Mentalidade de crescimento Orientação ao futuro, Persistência'+
     '<br>Comunicação, Orientação ao detalhe, Trabalho em equipe, Gestão de tempo';
  }
  getOBJ(): string {
    return 'Ficar sagaz no NestJS!';
  }
}
