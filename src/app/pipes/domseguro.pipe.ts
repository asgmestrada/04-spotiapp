import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

constructor(private domsSanitaizar: DomSanitizer){}

    transform(value: string): any
    {
    const url: string = 'https://open.spotify.com/embed?uri=';
    return this.domsSanitaizar.bypassSecurityTrustResourceUrl(url + value);
    }

}
