import { Component } from '@angular/core';
import { GifsSService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  constructor(private service :GifsSService) { }

  query: string="";


  addBusqueda(){
    this.service.buscarGifs()
  }
}
