import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-venue',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-24 md:py-32 px-6 bg-stone-100 text-stone-800">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-serif text-4xl md:text-5xl italic text-center mb-20">The Venue</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="space-y-12 text-center md:text-left order-2 md:order-1">
            <div>
              <h3 class="font-sans text-sm tracking-[0.2em] uppercase text-stone-500 mb-4">When</h3>
              <p class="font-serif text-3xl">Saturday, October 24, 2026</p>
              <p class="font-sans text-lg text-stone-600 mt-2">At 12:30 PM</p>
            </div>
            
            <div>
              <h3 class="font-sans text-sm tracking-[0.2em] uppercase text-stone-500 mb-4">Where</h3>
              <p class="font-serif text-3xl">The Grand Seoul Hotel</p>
              <p class="font-sans text-lg text-stone-600 mt-2">서울 중구 동호로 249</p>
              <p class="font-sans text-lg text-stone-600">다이너스티 홀 (Dynasty Hall)</p>
            </div>
            
            <div class="pt-6">
              <a href="https://maps.google.com" target="_blank" class="inline-block border border-stone-800 text-stone-800 px-10 py-4 font-sans text-sm tracking-[0.2em] uppercase hover:bg-stone-800 hover:text-white transition-colors duration-500">
                View Map
              </a>
            </div>
          </div>
          
          <div class="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop" 
              alt="Venue"
              class="w-full h-full object-cover"
              referrerpolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  `
})
export class VenueComponent {}
