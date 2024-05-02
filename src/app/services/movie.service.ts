import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { MovieDetails } from '../model/movie-Details';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http:HttpClient) { }

  private url = '/movies';

  getMovieList():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.url);
  }

  getMovieDetailsList(movieId: string):Observable<MovieDetails>{
    return this.http.get<MovieDetails>(this.url + '/' +movieId);
  } 

}
