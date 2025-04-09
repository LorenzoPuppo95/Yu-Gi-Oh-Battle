import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CardserviceService } from './app/services/cardservice.service';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  // const service = CardserviceService
  // service.loadMonsters();