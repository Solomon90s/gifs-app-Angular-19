import {
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [GifsListComponent],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css',
})
export default class TrendingPageComponent {
  //* Componente padre
  // gifs = signal(imageUrls);

  //* Inyectamos el servicio
  gifService = inject(GifsService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  onScroll(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop; // posición de scroll actualmente
    const clientHeight = scrollDiv.clientHeight; // cuanto espacio en la pantalla tenemos
    const scrollHeight = scrollDiv.scrollHeight; // scroll máximo
    // console.log({ scrollTotal: scrollTop + clientHeight, scrollHeight });
    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    // console.log({ isAtBottom });
    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }
}
