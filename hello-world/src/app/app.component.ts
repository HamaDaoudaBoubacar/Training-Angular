import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title : String = 'La Meilleure Promo LP DIM';

  nom : String = "";

  jeSaisPas() : void{

    console.log('Merci');
    
    this.title = 'LP DIM FI';
  }
  
}
