import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BudgetPipe } from '../../pipes/budget.pipe';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [BudgetPipe, DurationPipe, RouterLink],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})

export class MovieDetailsComponent {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
    ){
      console.log("iniside moviedetails")
    }

  heroesUrl:string = '/movies';
  movieDetails: MovieDetails[] = [];
  movieId:string = '';

  ngOnInit(){
    console.log("inside ng oninit")
    this.movieId = this.route.snapshot.paramMap.get('id') || '';
    console.log("movie id is ", this.movieId);
    this.getMovieDetailsList(this.movieId);
  }

  getMovieDetailsList(movieId: string){
    return this.http.get<MovieDetails[]>(this.heroesUrl + '/' +movieId).pipe()
    .subscribe({
      next: (data) => {
    console.log(data);
    this.movieDetails = data;
      },
    });
  }
}

export interface MovieDetails{
  id: string;
  title: string;
  duration: string;
  budget: string;
  release_date: string;
  box_office: string;
  cinematographers: string[];
  poster: string;
  producers: string[];
  summary: string;
}