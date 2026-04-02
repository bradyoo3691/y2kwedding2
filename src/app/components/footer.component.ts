import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="py-16 bg-stone-900 text-stone-400 text-center">
      <p class="font-serif italic text-3xl mb-6 text-stone-200">Brady & Perrier</p>
      <p class="font-sans text-xs tracking-[0.2em] uppercase">Thank you for celebrating with us</p>
    </footer>
  `
})
export class FooterComponent {}
