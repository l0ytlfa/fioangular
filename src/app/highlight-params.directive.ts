import { AfterViewInit, Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightParams]'      //<--- in DOM element became:  ng-reflect-app-highlight2="highlight"
})
export class HighlightParamsDirective implements OnInit, AfterViewInit{

  @Input() appHighlightParams:string | undefined;
  @Input() params: any|undefined;

  constructor(private element: ElementRef) { }

  ngOnInit(){
    this.element.nativeElement.setAttribute(this.appHighlightParams, '');  //<--- this creates the attribute: ng-reflect-app-highlight-params="xxxxx" used for CSS for example
    //this.element.nativeElement.setAttribute('style', 'color: white; background: red');  //<-- example direct manipulation of element
  }

  ngAfterViewInit(): void {
    console.log(`Values: ${this.params.firstParam}, ${this.params.seconParam}`);   
    //---> access to params variable <span [appHighlightParams]="'highlight'" [params]='{firstParam: 1, seconParam: 2, thirdParam: 3}'>
 }

}
