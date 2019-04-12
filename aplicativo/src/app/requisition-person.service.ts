import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IPerson} from './iperson';

@Injectable({
  providedIn: 'root'
})
export class RequisitionPersonService {
  configUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  getConfig() {
    return this.http.get<IPerson[]>(this.configUrl);
  }
}
