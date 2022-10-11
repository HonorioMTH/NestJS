import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getBlog(): string {
    return 'Esse é seu BlogPessoal!';
  }
}
