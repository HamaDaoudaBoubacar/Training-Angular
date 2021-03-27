import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  private myNumber: number;

  @Input() nom: string;

  constructor() { }
  @Input()
  set myNewNumber(number: number) {
    this.myNumber = number;
  }

  get myNewNumber() {
    return this.myNumber;
  }

  ngOnChanges(changes: SimpleChanges) {
    //debugger;
    const newNumberChange: SimpleChange = changes.myNewNumber;
    console.log('ancienne valeur - (ng on changes)', newNumberChange.previousValue);
    console.log('valeur actuelle- (ng on changes)', newNumberChange.currentValue);
    this.myNewNumber = newNumberChange.currentValue
  }

  ngOnInit(): void {
    console.log('ngOnInit valeur', this.myNewNumber);
  }

  ngDoCheck() {
    console.log(this.nom);
  }

  ngAfterContentInit() {
    console.log('test');
  }

  ngAfterContentChecked() {
    console.log('executer apres test');
  }

  ngAfterViewInit() {
    console.log('executer apres ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    console.log('executer apres ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('Component destroy')
  }
}
