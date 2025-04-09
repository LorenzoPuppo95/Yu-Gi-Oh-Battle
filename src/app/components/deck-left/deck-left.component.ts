import { Component, inject } from '@angular/core';
import { CardserviceService } from '../../services/cardservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deck-left',
  imports: [CommonModule],
  templateUrl: './deck-left.component.html',
  styleUrl: './deck-left.component.scss'
})
export class DeckLeftComponent {
  cardServ = inject(CardserviceService);

  removeCard(cardId: number) {
    this.cardServ.removeFromDeck('left', cardId);
  }
}
