import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishesComponent } from './wishes/wishes.component';
import { CopyrightComponent } from './copyright/copyright.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WishesComponent, CopyrightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Birthday Wishes App';
}
