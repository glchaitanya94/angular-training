import { Component } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { BudgetPipe } from '../../pipes/budget.pipe';
import { DurationPipe } from '../../pipes/duration.pipe';
import { RouterLink } from '@angular/router';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, BudgetPipe, DurationPipe, RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})

export class MovieListComponent {
  constructor(private MovieService: MovieService){}

  ngOnInit(){
    this.MovieService.getMovieList()
      .subscribe(data => {
      this.movies = data
      this.filteredMovies = data
    })
  }

  heroesUrl:string = '/movies';
  movies:Movie[] = [];
  filteredMovies: Movie[] = [];
  title:string = '';
  year:string = '';

  filterMoviesByTitleYear(t:string,y:string){    
      this.filteredMovies = [];    
      if(t == ''  && y == ''){
        this.filteredMovies = this.movies
      }
      for(var item of this.movies){
        if(t != ''){
          if(item.title.toLowerCase().includes(t.toLowerCase())){
            this.filteredMovies.push(item)
          }
        }
        else if(y!= ''){
          if(y.length<4 || y.length>4){
            if(this.filteredMovies.length == 0){
              this.filteredMovies = this.movies
            }
          }
          else if(y.length == 4){
          if(item.release_date.toLowerCase().substring(0,4).includes(y)){
            this.filteredMovies.push(item)
          }
        }
        }
      }
      if(t!='' && y.length ==4){
        this.filteredMovies = [];
        for(var item of this.movies){
          if(item.title.toLowerCase().includes(t.toLowerCase()) && item.release_date.toLowerCase().substring(0,4).includes(y)){
            this.filteredMovies[this.filteredMovies.length] = item;
          }
        }
      }
  }
}