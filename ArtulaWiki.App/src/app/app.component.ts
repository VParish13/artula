import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'artula-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  categorySidebarOpen = false;

  toggleCategorySidebar() {
    this.categorySidebarOpen = !this.categorySidebarOpen;
  }

  
}
