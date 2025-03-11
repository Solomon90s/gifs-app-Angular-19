import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gifs-history',
  imports: [GifsListComponent, CommonModule],
  templateUrl: './gifs-history.component.html',
  styleUrl: './gifs-history.component.css',
})
export default class GifsHistoryComponent {
  gifsService = inject(GifsService);
  //* Recibimos el query
  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params): any => params['query']))
  );

  gifsByKey = computed((): Gif[] =>
    this.gifsService.getHistoryGifs(this.query())
  );
}
