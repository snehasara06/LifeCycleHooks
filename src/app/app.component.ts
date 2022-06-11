import { ChangeDetectionStrategy, Component, VERSION } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'LifeCycleHooks';

  name="Angular"+VERSION.major;
  message = "Angular lifecycle Hooks";
  content = "Hai Sneha";

  hideChild=false;
   
  constructor() {
    console.log("%c    Constructor","color:blue");
  }
 
  ngOnChanges() {
    console.log("%c  ngOnChanges","color:blue");
  }
 
  ngOnInit() {
    console.log(" %c   ngOnInit","color:blue");
  }
 
  ngDoCheck() {
    console.log(" %c   DoCheck","color:blue");
  }
 
  ngAfterContentInit() {
    console.log(" %c   ngAfterContentInit","color:blue");
  }
 
  ngAfterContentChecked() {
    console.log(" %c   AfterContentChecked","color:blue");
  }
 
  ngAfterViewInit() {
    console.log(" %c   AfterViewInit","color:blue");
  }
 
  ngAfterViewChecked() {
    console.log(" %c   AfterViewChecked","color:blue");
  }
 
  ngOnDestroy() {
    console.log(" %c   ngOnDestroy","color:blue");
  }
 
}
 
 
