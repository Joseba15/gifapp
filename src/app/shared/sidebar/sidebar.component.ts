import { Component } from '@angular/core';
import { GifsSService } from '../../gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private gsservice : GifsSService) { }

        
  get history() :string[]{

    return this.gsservice.historial; 
  }
  
  

}
