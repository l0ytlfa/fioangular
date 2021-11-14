import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeroService } from '../heroes/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit , AfterViewInit{

  constructor(public heroService: HeroService, private router:Router) { }

  ngOnInit(): void {
    console.log('FIRST');
  }

  ngAfterViewInit(): void {
    
  }

  addItem(){
    this.router.navigateByUrl('/second', { state: { first:1 , second:'Angular' } });
  }
  

}
