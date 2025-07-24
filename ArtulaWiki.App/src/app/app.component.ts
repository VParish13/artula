import { NgModule, Component } from '@angular/core';

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

  toggleColorThemeMode() {
    const body = document.body;
    const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.classList.remove(`${currentTheme}-theme`);
    body.classList.add(`${newTheme}-theme`);

    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`; //saves cookie 1 year
  }
  
}
