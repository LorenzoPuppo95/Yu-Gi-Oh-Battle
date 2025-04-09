import { Component } from '@angular/core';
import { CardListComponent } from "../card-list/card-list.component";
import { DeckLeftComponent } from "../deck-left/deck-left.component";
import { DeckRightComponent } from "../deck-right/deck-right.component";

@Component({
  selector: 'app-home',
  imports: [CardListComponent, DeckLeftComponent, DeckRightComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
