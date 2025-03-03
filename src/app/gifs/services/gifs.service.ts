import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyItem, GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  readonly #http = inject(HttpClient);

  //* En esta señal almacenamos el estado de la señal
  trendingGifs = signal<Gif[]>([]);

  trendingGifsLoading = signal(true);

  //* Para almacenar el historial de búsqueda
  searchHistory = signal<Record<string, Gif[]>>({});
  searchHistoryKeys = computed((): string[] =>
    Object.keys(this.searchHistory())
  );

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs(): void {
    //* Petición http
    this.#http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        },
      })
      .subscribe((response): void => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log({ gifs });
      });
  }

  searchGifs(query: string): Observable<Gif[]> {
    //* Petición http
    return this.#http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          q: query,
        },
      })
      .pipe(
        map(({ data }): GiphyItem[] => data),
        map((items): Gif[] => GifMapper.mapGiphyItemsToGifArray(items)),
        //* Historial
        tap((items): void => {
          this.searchHistory.update((history) => ({
            ...history,
            [query.toLowerCase()]: items,
          }));
        })
      );
  }
}
