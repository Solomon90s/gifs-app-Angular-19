import { Component, input } from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.component.html',
  styleUrl: './gifs-list-item.component.css',
})
export class GifsListItemComponent {
  //TODO: imageUrl: string: input
  imageUrl = input.required<string>();
}
