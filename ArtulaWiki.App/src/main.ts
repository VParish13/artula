import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/Home/home.component';

bootstrapApplication(HomeComponent)
  .catch((err) => console.error(err));
