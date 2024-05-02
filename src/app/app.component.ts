import { Component, ElementRef, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
import { BudgetPipe } from './pipes/budget.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'harry-potter-movies';

  constructor(
    private http: HttpClient,
    private elementRef: ElementRef
    ){}

    ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument
          .body.style.backgroundColor = 'white';
      this.elementRef.nativeElement.ownerDocument
          .body.style.color = '#000';        
    }
}
