import { Component } from '@angular/core';
import { GifsSService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  constructor(private   gifsService :GifsSService) { }

  query: string="";


  addBusqueda(){
    this.gifsService.buscarGifs(this.query);
    this.query='';
  }
}
