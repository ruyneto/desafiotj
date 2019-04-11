import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassarObjetoService {
  palavra:string;
  constructor() { }

  public setDestn(destn) {
    this.palavra = destn;
  }

  getDestn() {
    return this.palavra;
  }
}
