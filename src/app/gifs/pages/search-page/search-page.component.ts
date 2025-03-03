import { Component, inject, signal } from '@angular/core';
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifsListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export default class SearchPageComponent {
  readonly #gifsService = inject(GifsService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string): void {
    this.#gifsService.searchGifs(query).subscribe((response): void => {
      this.gifs.set(response);
    });
  }
}
