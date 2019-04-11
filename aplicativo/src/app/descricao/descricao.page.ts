import { Component, OnInit } from '@angular/core';
import { PassarObjetoService} from '../passar-objeto.service';
@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.page.html',
  styleUrls: ['./descricao.page.scss'],
})
export class DescricaoPage implements OnInit {
    palavra:string;
  constructor(
private masterDetailService: PassarObjetoService
  ) {
    this.palavra = this.masterDetailService.getDestn();
    console.log(this.palavra);
  }

  ngOnInit() {
  }

}
