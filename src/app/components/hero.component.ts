import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative w-full h-[100svh] p-0 md:p-6 lg:p-8 flex items-center justify-center bg-stone-50">
      <div class="relative w-full h-full md:rounded-3xl overflow-hidden shadow-2xl">
        <!-- Video Background -->
        <div class="absolute inset-0 w-full h-full bg-stone-200">
          <!-- We use a cinematic image with a slow zoom if video isn't available. 
               You can replace this <img> with a <video autoplay loop muted playsinline> tag -->
        <video 
  autoplay 
  loop 
  muted 
  playsinline
  class="w-full h-full object-cover"
>
  <source src="/mochung.mp4" type="video/mp4">
</video>
          <div class="absolute inset-0 bg-black/30"></div>
        </div>

        <!-- Content overlay -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
          <p class="font-sans text-xs md:text-sm tracking-[0.4em] uppercase mb-6 opacity-90">We are getting married</p>
          <h1 class="font-serif text-7xl md:text-8xl lg:text-9xl mb-8 font-light drop-shadow-lg">
            <span class="block italic">Brady</span>
            <span class="block text-4xl md:text-5xl my-4 opacity-80">&amp;</span>
            <span class="block italic">Perrier</span>
          </h1>
          <p class="font-sans text-base md:text-lg tracking-[0.3em] mt-8 opacity-90">
            JUNE 06, 2026
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes slow-zoom {
      0% { transform: scale(1); }
      100% { transform: scale(1.15); }
    }
    .animate-slow-zoom {
      animation: slow-zoom 30s ease-in-out infinite alternate;
    }
  `]
})
export class HeroComponent {}
