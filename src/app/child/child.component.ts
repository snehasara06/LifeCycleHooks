import { Component, OnInit,Input,ChangeDetectionStrategy } from '@angular/core';
import { Person} from '../person';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default,
})
export class ChildComponent implements OnInit {

  @Input() message:string=''
  
  personName:Person=new Person(); 
 
  constructor() {
      console.log("%c Constructor","color:green");
    }
   
    ngOnChanges() {
      console.log("%c ngOnChanges","color:green");
    }
   
    ngOnInit() {
      console.log("%c ngOnInit","color:green");
    }
   
    ngDoCheck() {
      console.log("%c DoCheck","color:green");
    }
   
    ngAfterContentInit() {
      console.log("%c ngAfterContentInit","color:green");
    }
   
    ngAfterContentChecked() {
      console.log("%c AfterContentChecked","color:green");
    }
   
    ngAfterViewInit() {
      console.log("%c AfterViewInit","color:green");
    }
   
    ngAfterViewChecked() {
      console.log("%c AfterViewChecked ","color:green");
    }
   
    ngOnDestroy() {
      console.log(" %cngOnDestroy","color:green");
    }
   
  }

