import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {


  artistas: any [] = [] ;
  loading: boolean;
  constructor(private spotifyArtista: SpotifyService) { }

  buscarArtista(termino:string){
  this.loading=true;
  this.spotifyArtista.getArtistas(termino)
  .subscribe( (response: any) =>{
    this.artistas = response;
    console.log(response);
    this.loading = false;
  });


  }



}
