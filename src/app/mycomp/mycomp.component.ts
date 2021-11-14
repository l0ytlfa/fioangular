import { AfterViewInit, Component, Directive, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';


@Component({
  selector: 'my-comp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css'],
  styles:['[highlight]{background: green; color: white;}']
})



export class MyComponent implements AfterViewInit ,OnInit{    //<--- via interface define event AfterViewInit
  
  @ViewChild('ipt1') inputel:ElementRef | undefined;  //<--- auto link with DOM element via #
  @ViewChildren('child', {read: ElementRef}) childComp:QueryList<ElementRef> |undefined

  @Input()  value!: string;
  @Output() valueChange = new EventEmitter<string>();
  @Input()  items!: Array<any>;
  @Output() itemsChange = new EventEmitter<Array<any>>();

  ipt1Ref: ElementRef |undefined

  constructor( private myselfRef: ElementRef , private renderer: Renderer2 ){       //<--- "private" directive automatically store in private attribute
    //--> costructor of component
  }

  //--> interface implementations
  ngAfterViewInit(){
    this.ipt1Ref = this.inputel!.nativeElement;       //<--- @ViewChild available at init event
  } 

  ngOnInit(){
   
  }
  
  notifyChange(){
    this.valueChange.emit(this.value);
  }


  onChange(event:any){
             
    debugger;

    this.value = event.target.value;
    this.valueChange.emit(this.value);

    this.items.push({
      "name": "Farina"
    });

    this.itemsChange.emit(this.items)
  }

  addItem(){
    //this.items.push({
    //  "name": "Farina"
    //});

    debugger;

    this.itemsChange.emit(this.items)
  }

  convFunc(item: any){
    return '>>'+item.name;
  }

}
