import { Component, inject, signal } from '@angular/core';
import { MenuOptions } from '../../../interfaces/menu-options.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from 'src/app/gifs/services/gifs.service';
import { Gif } from 'src/app/gifs/interfaces/gif.interface';

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.css',
})
export class SideMenuOptionsComponent {
  public readonly gifsService = inject(GifsService);

  menuOptions: MenuOptions[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar gifs',
      route: '/dashboard/search',
    },
  ];
}
