import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BudgetPipe } from '../../pipes/budget.pipe';
import { DurationPipe } from '../../pipes/duration.pipe';
import { MovieDetails } from '../../model/movie-Details';
import { MovieService } from '../../services/movie.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [NgIf, BudgetPipe, DurationPipe, RouterLink],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})

export class MovieDetailsComponent {
  constructor(
    private MovieService: MovieService,
    private route: ActivatedRoute,
    ){
    }

  heroesUrl:string = '/movies';
  movieDetails: MovieDetails | undefined;

  ngOnInit(){
    const movieId = this.route.snapshot.paramMap.get('id') || '';
    this.MovieService.getMovieDetailsList(movieId)
    .subscribe(data => {
      this.movieDetails = data;
    })
  }

}