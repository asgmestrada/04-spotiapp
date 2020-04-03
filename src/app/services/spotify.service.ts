import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Observables
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

getQuery(query: string)
{
const URI_CONSTANT: string = `https://api.spotify.com/v1/${query}`;
const headers = new HttpHeaders
({
  'Authorization': 'Bearer BQCe0ioFWnCUk1OvoEsDxgBFrexZYz2NUeSok1HsXICrOFRFbHhpWsVRmCMaqWMOx8RH8T5lSwHJWbABQUM'
});
  return this.httpClient.get(URI_CONSTANT,{ headers });
}

constructor(private httpClient: HttpClient)
{
 console.log('Service Spotify Listo para usarse');
}

getNewReleases()
{
  return this.getQuery('browse/new-releases')
  .pipe(map(response => response['albums'].items));
}

getArtistas(termino: string)
{
  return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
  .pipe(map(response => response['artists'].items));    //Transforma la informacion a como la necesito
}

getArtista(idArtista: string)
{
  return this.getQuery(`artists/${idArtista}`);
}


getTopTracks(idArtista: string)
{
  return this.getQuery(`artists/${idArtista}/top-tracks?country=mx`)
  .pipe(map(response => response['tracks']));
}


}
