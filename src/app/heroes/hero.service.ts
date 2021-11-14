import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
  ) {
    this.mySharedVAlue = 123;
    this.mySharedValueString = 'test initial status'
   }

  public mySharedVAlue: number
  public mySharedValueString: string

  public people: any[] = [
    {
      "name": "model name"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ]

  getHeroes() { return [12,5]; }
}
