import { Injectable } from '@angular/core';
// import { environment } from '../environments/environment'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Book } from './model/book';
import { DVD } from './model/dvd';
import { Reader } from './model/reader';
import { catchError } from 'rxjs/operators';

// const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:Http) { }

  public getAllBooks() : Observable<Book[]> {
    return this.http
    .get( '/api/books')
    .pipe(map(response=> {
      const books = response.json();
      return books.map((book) => new Book(book))
    }))
    .pipe(catchError(this.handleError));    
  }

  public getAllODBooks() : Observable<Book[]> {
    return this.http
    .get( '/api/overDraftedBooks')
    .pipe(map(response=> {
      const books = response.json();
      return books.map((book) => new Book(book))
    }))
    .pipe(catchError(this.handleError));    
  }

  public getAllDVDs() : Observable<DVD[]> {
    return this.http
    .get( '/api/dvds')
    .pipe(map(response=> {
      const dvds = response.json();
      return dvds.map((dvd) => new DVD(dvd))
    }))
    .pipe(catchError(this.handleError));    
  }

  public getAllODDVDs() : Observable<DVD[]> {
    return this.http
    .get( '/api/odDVDS')
    .pipe(map(response=> {
      const dvds = response.json();
      return dvds.map((dvd) => new DVD(dvd))
    }))
    .pipe(catchError(this.handleError));    
  }

  public getAllReaders() : Observable<Reader[]> {
    return this.http
    .get( '/api/readers')
    .pipe(map(response=> {
      const readers = response.json();
      return readers.map((reader) => new Reader(reader))
    }))
    .pipe(catchError(this.handleError));    
  }

  private handleError(error: Response | any){
    console.error('ApiService::Error',error );
    return Observable.throw(error);
  }
}
