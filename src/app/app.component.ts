import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { CardListComponent } from "./components/card-list/card-list.component";
import { DeckLeftComponent } from "./components/deck-left/deck-left.component";
import { DeckRightComponent } from "./components/deck-right/deck-right.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, CardListComponent, DeckLeftComponent, DeckRightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'yu-gi-oh-battle';
}
