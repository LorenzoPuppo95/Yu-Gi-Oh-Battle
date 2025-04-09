import { effect, Injectable, numberAttribute, signal } from '@angular/core';
import { CardModel } from '../model/card-model';

@Injectable({
  providedIn: 'root'
})
export class CardserviceService {


  private readonly baseUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=normal%20monster&num=50&offset=25"   //25 per pagina
  monsters = signal<CardModel[]>([]);
  page = signal(1)
  selectedCard = signal<CardModel | undefined>(undefined);
  leftDeck = signal<CardModel[]>([]);
  rightDeck = signal<CardModel[]>([]);


  constructor() {

    this.loadMonsters(this.page());

    effect(() => {
      this.loadMonsters(this.page());
    });
  }


  loadMonsters(page: number) {
    const url = this.baseUrl + this.page;
    fetch(url)
      .then(response => response.json())
      .then((data: { data: CardModel[] }) => this.monsters.set(data.data))
      .catch(err => console.error("Failed to load cards:", err));
  }

  selectCardById(cardId: number) {
    const selectCard = this.monsters().find(monster => monster.id === cardId)
    if (selectCard) {
      this.selectedCard.set(selectCard);
    }
  }

  addToLeftDeck(card: CardModel) {
    if (this.leftDeck().length < 5) {
      this.leftDeck.update(deck => [...deck, card]);
    }
  }
  
  addToRightDeck(card: CardModel) {
    if (this.rightDeck().length < 5) {
      this.rightDeck.update(deck => [...deck, card]);
    }
  }
  
  removeFromDeck(deck: 'left'|'right', cardId: number) {
    if (deck === 'left') {
      this.leftDeck.update(deck => deck.filter(c => c.id !== cardId));
    } else {
      this.rightDeck.update(deck => deck.filter(c => c.id !== cardId));
    }
  }
}
