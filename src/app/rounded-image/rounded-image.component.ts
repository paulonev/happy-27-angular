import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-rounded-image',
  templateUrl: './rounded-image.component.html',
  styleUrls: ['./rounded-image.component.css']
})
export class RoundedImageComponent {
  @Input() imageSrc: string | undefined;
}