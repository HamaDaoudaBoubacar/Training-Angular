import { Injectable } from '@angular/core';

@Injectable()
export class Toto3Service {

  constructor() { }
  get():string{
    return "Hello World";
  }
}
