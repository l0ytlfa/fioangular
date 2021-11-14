import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HeroService } from './heroes/hero.service';
import { MyComponent } from './mycomp/mycomp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(public heroService: HeroService){
    let hr:any = heroService.getHeroes();
    let refVal = heroService.mySharedVAlue;
  }


}
