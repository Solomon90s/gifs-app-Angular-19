import { Component, input } from '@angular/core';
import { ImageURLS } from 'src/app/gifs/interfaces/images.interface';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.component.html',
  styleUrl: './gifs-list-item.component.css',
})
export class GifsListItemComponent {
  //TODO: imageUrl: string: input
  gifs = input.required<ImageURLS[]>();
}
