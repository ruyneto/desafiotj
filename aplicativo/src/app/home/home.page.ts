import { Component } from '@angular/core';
import { PassarObjetoService} from '../passar-objeto.service';
import { NavController } from '@ionic/angular';
import { IPerson} from '../iperson';
import { RequisitionPersonService } from '../requisition-person.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  service:PassarObjetoService;
  navctrl:NavController;
  lista:IPerson[];
  configService:RequisitionPersonService;
  constructor(nvctrl:NavController,private ser:PassarObjetoService, private req:RequisitionPersonService){
        this.configService = req;
    this.service = ser;
    this.navctrl = nvctrl;
  }
  gotoDescricaoPage(palavra:IPerson) {
     this.service.setDestn(palavra);
     this.navctrl.navigateForward("descricao");
   }
   ngOnInit(){
     this.showConfig()
   }
   showConfig() {

     this.configService.getConfig().subscribe((data: IPerson[]) => {
       console.log(data);
       this.lista = data;
     });
   }
   
}
