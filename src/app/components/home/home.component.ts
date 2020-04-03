import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

mensajeError: string;
error: boolean = false;
nuevasCanciones: any[] = [];
loading: boolean = true;

  constructor(private spotify: SpotifyService){


    this.spotify.getNewReleases()
    .subscribe((response: any)=>
    {
        console.log(response);
        this.nuevasCanciones = response;
        this.loading = false;
    },
    (errorServicio)=>
      {
         this.loading = false;
         this.error=true;
         console.log(errorServicio);
         this.mensajeError = errorServicio.error.error.message;
      });

  }

}
