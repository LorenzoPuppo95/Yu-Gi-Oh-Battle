import { Component, inject } from '@angular/core';
import { CardserviceService } from '../../services/cardservice.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-list',
  imports: [CommonModule, CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  cardServ = inject(CardserviceService);


  getMoreCards() {
    this.cardServ.page.update(actualPage => actualPage + 1);
  }
}
