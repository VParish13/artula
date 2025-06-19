import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/home.config';
import { App } from './app/home.component';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
