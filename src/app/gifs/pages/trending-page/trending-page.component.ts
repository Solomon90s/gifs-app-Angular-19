import { Component, signal } from '@angular/core';
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';
import { ImageURLS } from '../../interfaces/images.interface';

const imageUrls: string[] = [];

@Component({
  selector: 'app-trending-page',
  imports: [GifsListComponent],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css',
})
export default class TrendingPageComponent {
  gifs = signal<ImageURLS[]>([
    { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg' },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
    },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
    },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
    },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
    },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
    },
    {
      url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
    },
  ]);
}
