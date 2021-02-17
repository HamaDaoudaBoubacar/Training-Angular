import { Component, OnInit } from '@angular/core';
import { Toto3Service } from './toto3.service';

@Component({
  providers: [Toto3Service],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  private number: number = 735398;
  name : string = "bob";
  isVisible : boolean = true;

  switchVisibility(){
    this.isVisible = !this.isVisible;
  }
  updateValue(){
    this.name ="Boubacar";
  }

  get counter(){
    return this.number;
  }

  set counter(value){
    this.number = value;
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }


  title : String = 'La Meilleure Promo LP DIM';

  nom : String = "";

/*
  constructor(private _totoService: Toto3Service){
    this.etatActuelDeLaProp = _totoService.get();
  }

  ngOnInit(){

  }
  */
  jeSaisPas() : void{

    console.log('Merci');
    
    this.title = 'LP DIM FI';
  }
  
  etatActuelDeLaProp:String;

}
