import { Component } from '@angular/core';
import { GifsListComponent } from "../../components/gifs-list/gifs-list.component";
import { GifsListItemComponent } from "../../components/gifs-list/gifs-list-item/gifs-list-item.component";

@Component({
  selector: 'app-trending-page',
  imports: [GifsListComponent, GifsListItemComponent],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css',
})
export default class TrendingPageComponent {}
