import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() nombre:string;//agregé esta variable
  constructor() { 
    //this.nombre = 'nombre por defecto';//agregé esta inciialización luego de probar quitar
  }

  ngOnInit(): void {
  }

}
