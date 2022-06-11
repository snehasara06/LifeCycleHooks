import { Component, OnInit,ChangeDetectionStrategy,Input } from '@angular/core';
import { Person } from '../person';
@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default,
})
export class GrandChildComponent implements OnInit {

  @Input() personName:Person=new Person();
  
  constructor() {
    console.log("%c  Constructor","color:red");
  }
 
  ngOnChanges() {
    console.log("%c  ngOnChanges","color:red");
  }
 
  ngOnInit() {
    console.log("%c  ngOnInit","color:red");
  }
 
 
  ngDoCheck() {
    console.log("%c  DoCheck","color:red");
  }
 
  ngAfterContentInit() {
    console.log("%c  ngAfterContentInit","color:red");
  }
 
  ngAfterContentChecked() {
    console.log("%c  AfterContentChecked","color:red");
  }
 
  ngAfterViewInit() {
    console.log("%c  AfterViewInit","color:red");
  }
 
  ngAfterViewChecked() {
    console.log("%c  AfterViewChecked","color:red");
  }
 
  ngOnDestroy() {
    console.log("%c  ngOnDestroy","color:red");
  }
 
 
 
}
