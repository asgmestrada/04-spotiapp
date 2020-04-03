import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {

  topTracks: any = [];
  loading: boolean = true;
  artista:  any = {};

  constructor(private activatedRoute : ActivatedRoute,
              private spotifyService : SpotifyService
              )
  {
   //Recibir los parametros por la URL
   this.activatedRoute.params.subscribe(params =>{
     this.getArtista(params['id']);
     this.getTopTracks(params['id']);
   console.log(params);
   });
  }

getArtista(idArtista: string)
{
  this.spotifyService.getArtista( idArtista )
  .subscribe( response =>{
    this.artista = response;
    console.log( response );
    this.loading = false;
  });
}

getTopTracks(idArtista: string)
{
this.spotifyService.getTopTracks(idArtista)
.subscribe(response => {
this.topTracks = response;
console.log(response);
});
}

}
