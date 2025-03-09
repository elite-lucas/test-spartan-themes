import { Component, inject } from '@angular/core';
import { BasicThemeComponent, ThemesService } from 'lugraff-spartan-themes';

@Component({
  imports: [BasicThemeComponent],
  selector: 'app-root',
  template: `
    <div class="w-screen h-screen flex justify-center items-center">
      <lib-basic-theme></lib-basic-theme>
    </div>
  `,
})
export class AppComponent {
  readonly #themes = inject(ThemesService);

  constructor() {
    this.#themes.init();
  }
}
