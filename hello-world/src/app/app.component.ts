import { Component } from '@angular/core';
import { Toto3Service } from './toto3.service';

@Component({
  providers: [Toto3Service],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title : String = 'La Meilleure Promo LP DIM';

  nom : String = "";

  isVisible : boolean = false;

  jeSaisPas() : void{

    console.log('Merci');
    
    this.title = 'LP DIM FI';
  }
  
  etatActuelDeLaProp:String;
  constructor(private _totoService: Toto3Service){
    this.etatActuelDeLaProp = _totoService.get();
  }
}
