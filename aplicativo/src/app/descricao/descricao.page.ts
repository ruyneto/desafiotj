import { Component, OnInit } from '@angular/core';
import { PassarObjetoService} from '../passar-objeto.service';
import { NavController } from '@ionic/angular';
import { IPerson} from '../iperson';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.page.html',
  styleUrls: ['./descricao.page.scss'],
})
export class DescricaoPage implements OnInit {
  pessoa:IPerson;
  nvctrl:NavController;
  constructor(
      private masterDetailService: PassarObjetoService,nvc:NavController) {
        if(this.masterDetailService.getDestn() === undefined){
          this.goBack();
        }
    this.pessoa = this.masterDetailService.getDestn();
    this.nvctrl = nvc;
  }

  ngOnInit() {
  }

  goBack(){
    this.nvctrl.navigateBack('home');
  }
}
