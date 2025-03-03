import { Gif } from '../interfaces/gif.interface';
import { GiphyItem } from '../interfaces/giphy.interfaces';

export class GifMapper {
  //* Un gif
  static mapGiphyItemToGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

  //* Array de gifs
  static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
    return items.map(this.mapGiphyItemToGif);
  }
}
