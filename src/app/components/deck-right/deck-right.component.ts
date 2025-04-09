import { Component, inject } from '@angular/core';
import { CardserviceService } from '../../services/cardservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deck-right',
  imports: [CommonModule],
  templateUrl: './deck-right.component.html',
  styleUrl: './deck-right.component.scss'
})
export class DeckRightComponent {
  cardServ = inject(CardserviceService);

  removeCard(cardId: number) {
    this.cardServ.removeFromDeck('right', cardId);
  }
}
