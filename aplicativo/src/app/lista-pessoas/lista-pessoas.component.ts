import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss'],
})
export class ListaPessoasComponent implements OnInit {
  lista:string[] = ["nome1","nome2","nome3"];
  constructor() {

  }

  ngOnInit() {}

}
