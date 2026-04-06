import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-16 px-0 md:px-8 bg-white min-h-screen">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <h2 class="font-serif text-3xl md:text-4xl italic text-center text-stone-800 mb-8">Gallery</h2>
        
        <!-- Instagram-style Profile Info -->
        <div class="flex items-center justify-center gap-6 mb-10 px-4">
          <div class="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border border-stone-200 p-1">
            <img src="/profile.jpg" alt="Profile" class="w-full h-full object-cover rounded-full">
          </div>
          <div class="flex flex-col">
            <h3 class="text-xl font-medium text-stone-800">Our Memories</h3>
            <p class="text-sm text-stone-500">함께한 소중한 순간들 ✨</p>
            <div class="flex gap-4 mt-2 text-sm">
              <div><span class="font-semibold">{{ totalPhotos() }}</span> posts</div>
            </div>
          </div>
        </div>

        <!-- Instagram-style Tabs -->
        <div class="flex justify-center border-t border-stone-200">
          <button 
            (click)="activeTab.set('웨딩')"
            class="flex-1 md:flex-none flex items-center justify-center gap-2 py-4 px-6 text-sm font-medium transition-colors"
            [class]="activeTab() === '웨딩' ? 'text-stone-900 border-t border-stone-900 -mt-[1px]' : 'text-stone-400 hover:text-stone-600'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            <span>웨딩</span>
          </button>
          <button 
            (click)="activeTab.set('추곡리')"
            class="flex-1 md:flex-none flex items-center justify-center gap-2 py-4 px-6 text-sm font-medium transition-colors"
            [class]="activeTab() === '추곡리' ? 'text-stone-900 border-t border-stone-900 -mt-[1px]' : 'text-stone-400 hover:text-stone-600'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
            <span>추곡리</span>
          </button>
          <button 
            (click)="activeTab.set('연애')"
            class="flex-1 md:flex-none flex items-center justify-center gap-2 py-4 px-6 text-sm font-medium transition-colors"
            [class]="activeTab() === '연애' ? 'text-stone-900 border-t border-stone-900 -mt-[1px]' : 'text-stone-400 hover:text-stone-600'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            <span>연애</span>
          </button>
        </div>
        
        <!-- Instagram-style Grid -->
        <div class="grid grid-cols-3 gap-1 md:gap-4 mt-1">
          @for (img of currentImages(); track img.id) {
            <div class="group relative overflow-hidden aspect-square bg-stone-100 cursor-pointer">
              <img 
                [src]="img.url" 
                [alt]="activeTab() + ' photo ' + img.id"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerpolicy="no-referrer"
                loading="lazy"
              />
              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" class="drop-shadow-md"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
            </div>
          }
        </div>
        
        <!-- Empty State -->
        @if (currentImages().length === 0) {
          <div class="py-20 text-center text-stone-500 flex flex-col items-center">
            <div class="w-16 h-16 rounded-full border-2 border-stone-300 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-stone-400"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            </div>
            <p class="text-lg font-medium text-stone-900">No Photos Yet</p>
            <p class="text-sm mt-1">사진이 곧 업데이트 될 예정입니다.</p>
          </div>
        }
      </div>
    </section>
  `
})
export class GalleryComponent {
  activeTab = signal<'연애' | '추곡리' | '웨딩'>('연애');

  // Placeholder images for each category
  galleryData = {
    '연애': [
      { id: 101, url: '/연애_0.jpg' },
      { id: 102, url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1000&auto=format&fit=crop' },
      { id: 103, url: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=1000&auto=format&fit=crop' },
      { id: 104, url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000&auto=format&fit=crop' },
      { id: 105, url: 'https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?q=80&w=1000&auto=format&fit=crop' },
      { id: 106, url: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=1000&auto=format&fit=crop' },
      { id: 107, url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1000&auto=format&fit=crop' },
      { id: 108, url: 'https://images.unsplash.com/photo-1501901609772-df0848060b33?q=80&w=1000&auto=format&fit=crop' },
      { id: 109, url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop' },
    ],
    '추곡리': [
      { id: 201, url: '/추곡리16.jpg' },
      { id: 202, url: 'https://images.unsplash.com/photo-1470071131384-001b85755536?q=80&w=1000&auto=format&fit=crop' },
      { id: 203, url: 'https://images.unsplash.com/photo-1444464666168-49b626f86278?q=80&w=1000&auto=format&fit=crop' },
      { id: 204, url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop' },
      { id: 205, url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop' },
      { id: 206, url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1000&auto=format&fit=crop' },
    ],
    '웨딩': [
      { id: 301, url: '/연애_wedding.png' },
      { id: 302, url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop' },
      { id: 303, url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop' },
      { id: 304, url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1000&auto=format&fit=crop' },
      { id: 305, url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop' },
      { id: 306, url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop' },
      { id: 307, url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop' },
      { id: 308, url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop' },
      { id: 309, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop' },
    ]
  };

  currentImages = computed(() => {
    return this.galleryData[this.activeTab()] || [];
  });

  totalPhotos = computed(() => {
    return Object.values(this.galleryData).reduce((acc, curr) => acc + curr.length, 0);
  });
}
