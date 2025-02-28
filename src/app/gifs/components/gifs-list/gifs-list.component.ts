import { Component, input } from '@angular/core';
import { GifsListItemComponent } from './gifs-list-item/gifs-list-item.component';
import { ImageURLS } from '../../interfaces/images.interface';

@Component({
  selector: 'gifs-list',
  imports: [GifsListItemComponent],
  templateUrl: './gifs-list.component.html',
  styleUrl: './gifs-list.component.css',
})
export class GifsListComponent {
  //TODO: input string[]
  gifs = input.required<ImageURLS[]>();
}
