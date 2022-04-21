import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( heroe: Heroe ): string {

    if( !heroe.id && !heroe.alt_img ) {
      console.log('No tiene id, no tiene alt_img');
      return 'assets/no-image.png';
    } else if ( heroe.alt_img ) {
      console.log( 'Tiene alt_img' );
      return heroe.alt_img;
    } else {
      console.log('Que tenemos');
      return `assets/heroes/${ heroe.id }.jpg`;
    }

  }

}
