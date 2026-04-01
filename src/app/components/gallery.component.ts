import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-24 px-4 md:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="font-serif text-4xl md:text-5xl italic text-center text-stone-800 mb-16">Gallery</h2>
        
        <!-- Responsive Grid / Masonry-like -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          @for (img of images; track img.id) {
            <div class="group relative overflow-hidden rounded-xl aspect-[3/4] bg-stone-100 shadow-sm">
              <img 
                [src]="img.url" 
                [alt]="'Wedding photo ' + img.id"
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerpolicy="no-referrer"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class GalleryComponent {
  images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop' },
    { id: 3, url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop' },
    { id: 4, url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1000&auto=format&fit=crop' },
    { id: 5, url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop' },
    { id: 6, url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop' },
  ];
}
