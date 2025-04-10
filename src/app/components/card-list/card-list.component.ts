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

document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.getElementById("list-container") as HTMLElement | null;

  if (scroller) {
    scroller.addEventListener("wheel", (event: WheelEvent) => {
      event.preventDefault();

      const delta = event.deltaY; // Usa lo scroll verticale per muovere orizzontalmente
      let newScrollLeft = scroller.scrollLeft + delta;

      newScrollLeft = Math.max(0, Math.min(newScrollLeft, scroller.scrollWidth - scroller.clientWidth));

      scroller.scrollLeft = newScrollLeft;
    }, { passive: false });
  }
});