import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @Input() appHighlight:string | undefined;

  constructor(private element: ElementRef) { }

  ngOnInit(){
    this.element.nativeElement.setAttribute(this.appHighlight, ''); //<--- this creates the attribute: ng-reflect-app-highlight-params="xxxxx" used for CSS for example
  }

}
