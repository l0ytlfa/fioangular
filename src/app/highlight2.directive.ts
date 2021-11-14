import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight2]'      //<--- in DOM element became:  ng-reflect-app-highlight2="highlight"
})
export class Highlight2Directive implements OnInit{

  @Input() appHighlight2:string | undefined;

  constructor(private element: ElementRef) { }

  ngOnInit(){
    this.element.nativeElement.setAttribute(this.appHighlight2, ''); //<--- this creates the attribute: ng-reflect-app-highlight-params="xxxxx" used for CSS for example
  }

}
