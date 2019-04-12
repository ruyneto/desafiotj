import { Injectable } from '@angular/core';
import { IPerson} from './iperson';
@Injectable({
  providedIn: 'root'
})
export class PassarObjetoService {
  palavra:IPerson;
  constructor() { }

  public setDestn(destn) {
    this.palavra = destn;
  }

  getDestn() {
    return this.palavra;
  }
}
