import { Component } from '@angular/core';
import { RoundedImageComponent } from '../rounded-image/rounded-image.component';

@Component({
  selector: 'app-wishes',
  standalone: true,
  imports: [RoundedImageComponent],
  templateUrl: './wishes.component.html',
  styleUrl: './wishes.component.css'
})
export class WishesComponent {
  developerName = 'Ilya @belarus_beer Okunev';
}
