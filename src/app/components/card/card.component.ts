import { Component, inject, input, numberAttribute } from '@angular/core';

import { CardserviceService } from '../../services/cardservice.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  cardId = input<number>(-1, { alias: 'cardId' });
  image_url = input('', { alias: 'image_url' }); 
  name = input<string>('');
  
  
  cardServ = inject(CardserviceService);
  



  selectcard() {
    this.cardServ.selectCardById(this.cardId());
  }
  addToLeft() {
    const card = this.cardServ.monsters().find(m => m.id === this.cardId());
    if (card) {
      console.log('Adding card:', card.name); // Debug
      this.cardServ.addToLeftDeck(card);
    }
  }
  
  addToRight() {
    const card = this.cardServ.monsters().find(m => m.id === this.cardId());
    if (card) this.cardServ.addToRightDeck(card);
  }

} 

