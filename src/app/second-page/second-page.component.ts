import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute ,private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {

    console.log('SECOND');
    
    console.log('STATE > '+JSON.stringify(history.state))
    this.activatedroute.data.subscribe(data => {      
      console.log('DATA: '+JSON.stringify(data));
    })

  }

  goBack(){
    this.router.navigateByUrl('/');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  goRequest(){
    this.httpClient.get<Config>('https://gorest.co.in/public/v1/users').pipe(
      catchError(this.handleError)
    ).subscribe((data:Config)=>{
      //---> here use the defined Interface "Config" BUT BUT all the data are coming back from call
      debugger;
    });

  }

}

interface Config {
  metadata: object;
}
