import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-destino',
  templateUrl: './lista-destino.component.html',
  styleUrls: ['./lista-destino.component.css']
})
export class ListaDestinoComponent implements OnInit {
 destinos: string[];
  constructor() {
    this.destinos = ['Caracas','Miami','Suiza','Buenos Aires'];
   }

  ngOnInit(): void {
  }

}