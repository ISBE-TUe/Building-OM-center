import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class Service {
  
 
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

  /** Log a Service message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}