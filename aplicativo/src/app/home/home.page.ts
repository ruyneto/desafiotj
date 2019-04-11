import { Component } from '@angular/core';
import { PassarObjetoService} from '../passar-objeto.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lista:string[] = ["nome1","nome2","nome3"];
  service:PassarObjetoService;
  navctrl:NavController;
    constructor(nvctrl:NavController,private ser:PassarObjetoService){
    this.service = ser;
    this.navctrl = nvctrl;
  }
  gotoDescricaoPage(palavra:String) {
     this.service.setDestn(palavra);
     this.navctrl.navigateForward("descricao");
   }
}
