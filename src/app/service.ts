import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class Service {
  
  private heroesUrl = 'http://localhost:7200/repositories/02?query=ask%20%7B%3Chttps://www.ugent.be/myAwesomeFirstBIMProject%23building_00dd6c87-6a6e-f482-7490-e6613659708a%3E%20?p%20?o%7D';  // URL to web api
  private heroesUrl1 = 'http://localhost:7200/repositories/02?query=construct%20%7B%3Chttps://w3id.org/product/BuildingElements%23Slab%3E%20?p%20?o%7D%20where%20%7B?s%20?p%20?o%7D';

  private heroesUrl2 = 'http://localhost:7200/repositories/02?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttps%3A%2F%2Fwww.ugent.be%2FmyAwesomeFirstBIMProject%23space_15c75cfb-4a4e-404f-812a-77c1d3c20375%3E%20%3Fp%20%3Fo%7D';

  private heroesUrl3 ='http://localhost:7200/repositories/03?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttp%3A%2F%2Flinkedbuildingdata.net%2Fifc%2Fresources20200408_172328%2Fspace_1533%3E%20%3Fp%20%3Fo%7D%0A%0A%0A';
  private dbUrl = 'http://localhost:7200/repositories/02?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttps%3A%2F%2Fwww.ugent.be%2FmyAwesomeFirstBIMProject%23buildingelementproxy_11aa13e4-f1bd-498e-bbda-cd90469ff87b%3E%20%3Fp%20%3Fo%7D';

  private Urlbuild = 'http://localhost:7200/repositories/02?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttps%3A%2F%2Fwww.ugent.be%2FmyAwesomeFirstBIMProject%23building_90b511b9-b7c0-465c-8e11-4a4033650f21%3E%20%3Fp%20%3Fo%7D';
 private Urlstoreya = 'http://localhost:7200/repositories/02?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttps%3A%2F%2Fwww.ugent.be%2FmyAwesomeFirstBIMProject%23storey_90b511b9-b7c0-465c-8e11-4a40cc9af266%3E%20%3Fp%20%3Fo%7D';
 private Urlstoreyb = 'http://localhost:7200/repositories/02?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttps%3A%2F%2Fwww.ugent.be%2FmyAwesomeFirstBIMProject%23storey_90b511b9-b7c0-465c-8e11-4a40cc9af1e7%3E%20%3Fp%20%3Fo%7D';
 private Urllight1 = 'http://localhost:7200/repositories/02?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttps%3A%2F%2Fwww.ugent.be%2FmyAwesomeFirstBIMProject%23lightfixture_11aa13e4-f1bd-498e-bbda-cd90469ff87d%3E%20%3Fp%20%3Fo%7D'; 
 private Urllight2 = 'http://localhost:7200/repositories/02?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttps%3A%2F%2Fwww.ugent.be%2FmyAwesomeFirstBIMProject%23lightfixture_11aa13e4-f1bd-498e-bbda-cd90469ff87a%3E%20%3Fp%20%3Fo%7D';
 private Urllight3 = 'http://localhost:7200/repositories/02?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttps%3A%2F%2Fwww.ugent.be%2FmyAwesomeFirstBIMProject%23lightfixture_11aa13e4-f1bd-498e-bbda-cd90469ff87c%3E%20%3Fp%20%3Fo%7D';
 private Urlsensor = 'http://localhost:7200/repositories/02?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttps%3A%2F%2Fwww.ugent.be%2FmyAwesomeFirstBIMProject%23buildingelementproxy_11aa13e4-f1bd-498e-bbda-cd90469ff87b%3E%20%3Fp%20%3Fo%7D';

 private Urlbuild1 = 'http://localhost:7200/repositories/05?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttp%3A%2F%2Flinkedbuildingdata.net%2Fifc%2Fresources20200408_172328%2Fbuilding_134%3E%20%3Fp%20%3Fo%7D';
 private Urlstorey8 = 'http://localhost:7200/repositories/05?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttp%3A%2F%2Flinkedbuildingdata.net%2Fifc%2Fresources20200408_172328%2Fstorey_147%3E%20%3Fp%20%3Fo%7D';
 private Urlstorey9 = 'http://localhost:7200/repositories/05?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttp%3A%2F%2Flinkedbuildingdata.net%2Fifc%2Fresources20200408_172328%2Fstorey_153%3E%20%3Fp%20%3Fo%7D';
 private Urllight11 = 'http://localhost:7200/repositories/05?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttp%3A%2F%2Flinkedbuildingdata.net%2Fifc%2Fresources20200408_172328%2FlightFixture_250342%3E%20%3Fp%20%3Fo%7D'; 
 private Urllight21 = 'http://localhost:7200/repositories/05?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttp%3A%2F%2Flinkedbuildingdata.net%2Fifc%2Fresources20200408_172328%2FlightFixture_250266%3E%20%3Fp%20%3Fo%7D';
 private Urllight31 = 'http://localhost:7200/repositories/05?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttp%3A%2F%2Flinkedbuildingdata.net%2Fifc%2Fresources20200408_172328%2FlightFixture_250418%3E%20%3Fp%20%3Fo%7D';
 private Urlsensor1 = 'http://localhost:7200/repositories/05?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttp%3A%2F%2Flinkedbuildingdata.net%2Fifc%2Fresources20200408_172328%2Fsensor_250195%3E%20%3Fp%20%3Fo%7D';
 private UrlSpace = 'http://localhost:7200/repositories/05?query=select%20%3Fo%20%3Fp%20where%20%7B%3Chttp%3A%2F%2Flinkedbuildingdata.net%2Fifc%2Fresources20200408_172328%2Fspace_9832%3E%20%3Fp%20%3Fo%7D';



 httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 
    'Accept': 'application/sparql-results+xml' }),    
    responseType: 'text'
  };

  constructor(
    private http: HttpClient,    
    private messageService: MessageService
    ) { }

  /** GET data from the server */
  getBuild (): Observable<string> {
    return this.http.get(this.Urlbuild1, {responseType: 'text'})
      .pipe(
        tap(_ => this.log('fetched data')),
        catchError(this.handleError<string>('getData', ""))
      );
  }

  getDefaultData (): Observable<string> {
    return this.http.get(this.Urlbuild1, {responseType: 'text'})
      .pipe(
        tap(_ => this.log('fetched data')),
        catchError(this.handleError<string>('getData', ""))
      );
  }

  getData (): Observable<string> {
    return this.http.get(this.UrlSpace, {responseType: 'text'})
      .pipe(
        tap(_ => this.log('fetched data')),
        catchError(this.handleError<string>('getData', ""))
      );
  }

  getStoreya (): Observable<string> {
    return this.http.get(this.Urlstorey9, {responseType: 'text'})
      .pipe(
        tap(_ => this.log('fetched data')),
        catchError(this.handleError<string>('getData', ""))
      );
  }

  getStoreyb (): Observable<string> {
    return this.http.get(this.Urlstorey8, {responseType: 'text'})
      .pipe(
        tap(_ => this.log('fetched data')),
        catchError(this.handleError<string>('getData', ""))
      );
  }

  getlight1 (): Observable<string> {
    return this.http.get(this.Urllight11, {responseType: 'text'})
      .pipe(
        tap(_ => this.log('fetched data')),
        catchError(this.handleError<string>('getData', ""))
      );
  }

  getlight2 (): Observable<string> {
    return this.http.get(this.Urllight21, {responseType: 'text'})
      .pipe(
        tap(_ => this.log('fetched data')),
        catchError(this.handleError<string>('getData', ""))
      );
  }

  getlight3 (): Observable<string> {
    return this.http.get(this.Urllight31, {responseType: 'text'})
      .pipe(
        tap(_ => this.log('fetched data')),
        catchError(this.handleError<string>('getData', ""))
      );
  }

  getsensor (): Observable<string> {
    return this.http.get(this.Urlsensor1, {responseType: 'text'})
      .pipe(
        tap(_ => this.log('fetched data')),
        catchError(this.handleError<string>('getData', ""))
      );
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}