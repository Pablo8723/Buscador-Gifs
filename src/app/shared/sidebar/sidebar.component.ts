import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {


  get historia(){
    return this.gifService.historial;
  }
  constructor ( private gifService: GifsService){}

  Buscar( argumento: string){
    this.gifService.buscarGifs( argumento );
  }

}
