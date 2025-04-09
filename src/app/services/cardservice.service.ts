import { Injectable, signal } from '@angular/core';
import { CardModel } from '../model/card-model';

@Injectable({
  providedIn: 'root'
})
export class CardserviceService {

  
  private readonly baseUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=normal%20monster&num=50"   //prendiamo solo i primi 50 mostri
  monsters = signal<CardModel[]>([]);
  constructor() {
    this.loadMonsters();
  }

  async loadMonsters() {
    const response = await fetch(`${this.baseUrl}`);
    const data = await response.json();
    console.log(data);
    this.monsters.set(data.content.map((monster: any) => ({
      ...monster,
      // Assicura che images sia sempre un array
      images: monster.images || []
     
      
    })));
  }
}
