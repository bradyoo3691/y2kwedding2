import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-16 px-0 md:px-8 bg-white min-h-screen">
      <div class="max-w-4xl mx-auto">

        <h2 class="font-serif text-3xl md:text-4xl italic text-center text-stone-800 mb-8">Gallery</h2>

        <!-- 프로필 -->
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

        <!-- 탭 -->
        <div class="flex justify-center border-t border-stone-200">
          <button
            (click)="activeTab.set('웨딩')"
            class="flex-1 md:flex-none flex items-center justify-center gap-2 py-4 px-6 font-bold text-base transition-colors"
            [class]="activeTab() === '웨딩' ? 'text-stone-900 border-t-2 border-stone-900 -mt-[2px]' : 'text-stone-400 hover:text-stone-600'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            <span>웨딩</span>
          </button>
          <button
            (click)="activeTab.set('추곡리')"
            class="flex-1 md:flex-none flex items-center justify-center gap-2 py-4 px-6 font-bold text-base transition-colors"
            [class]="activeTab() === '추곡리' ? 'text-stone-900 border-t-2 border-stone-900 -mt-[2px]' : 'text-stone-400 hover:text-stone-600'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
            <span>추곡리</span>
          </button>
          <button
            (click)="activeTab.set('연애')"
            class="flex-1 md:flex-none flex items-center justify-center gap-2 py-4 px-6 font-bold text-base transition-colors"
            [class]="activeTab() === '연애' ? 'text-stone-900 border-t-2 border-stone-900 -mt-[2px]' : 'text-stone-400 hover:text-stone-600'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            <span>연애</span>
          </button>
        </div>

        <!-- 그리드 -->
        <div class="mt-1 overflow-y-auto" style="max-height: 70vh;">
 <div class="grid grid-cols-3 gap-1 md:gap-2">
  @for (img of currentImages(); track img.id; let i = $index) {
    <div
      class="group relative cursor-pointer"
      style="aspect-ratio: 1/1; overflow: hidden;"
      (click)="openLightbox(i)"
    >
      <img
        [src]="img.url"
        [alt]="activeTab() + ' photo ' + img.id"
        style="width: 100%; height: 100%; object-fit: cover; object-position: center;"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" class="drop-shadow-md"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      </div>
    </div>
  }
</div>

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

      </div>
    </section>

    <!-- Lightbox -->
    @if (lightboxOpen()) {
      <div class="fixed inset-0 z-50 bg-black flex flex-col" (click)="closeLightbox()">
        <div class="flex items-center justify-center py-4 relative flex-shrink-0" (click)="$event.stopPropagation()">
          <button
            (click)="closeLightbox()"
            class="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors px-4 py-2 rounded-full border border-white/20 hover:border-white/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            뒤로가기
          </button>
          <span class="absolute right-4 text-white/50 text-xs">{{ lightboxIndex() + 1 }} / {{ currentImages().length }}</span>
        </div>

        <div class="flex-1 flex items-center justify-center relative overflow-hidden" (click)="$event.stopPropagation()">
          <button
            (click)="prevImage()"
            class="absolute left-2 md:left-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
            [class.opacity-30]="lightboxIndex() === 0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <img
            [src]="currentImages()[lightboxIndex()].url"
            [alt]="'photo ' + lightboxIndex()"
            class="max-h-full max-w-full object-contain select-none"
            style="transition: opacity 0.2s ease;"
          />

          <button
            (click)="nextImage()"
            class="absolute right-2 md:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
            [class.opacity-30]="lightboxIndex() === currentImages().length - 1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        <div class="flex-shrink-0 py-3 px-4 overflow-x-auto" (click)="$event.stopPropagation()">
          <div class="flex gap-2 justify-center">
            @for (img of currentImages(); track img.id; let i = $index) {
              <div
                class="w-12 h-12 flex-shrink-0 rounded overflow-hidden cursor-pointer transition-all duration-200"
                [class]="i === lightboxIndex() ? 'ring-2 ring-white opacity-100' : 'opacity-40 hover:opacity-70'"
                (click)="lightboxIndex.set(i)"
              >
                <img [src]="img.url" class="w-full h-full object-cover"/>
              </div>
            }
          </div>
        </div>
      </div>
    }
  `
})
export class GalleryComponent {
  activeTab = signal<'연애' | '추곡리' | '웨딩'>('웨딩');
  lightboxOpen = signal(false);
  lightboxIndex = signal(0);

  galleryData = {
    '웨딩': [
      { id: 301, url: '/wedding_1.jpeg' },
      { id: 302, url: '/wedding_2.jpeg' },
      { id: 303, url: '/wedding_3.jpeg' },
      { id: 304, url: '/wedding_4.jpeg' },
      { id: 305, url: '/wedding_5.jpeg' },
      { id: 306, url: '/wedding_6.jpeg' },
      { id: 308, url: '/wedding_8.jpeg' },
      { id: 309, url: '/wedding_9.jpeg' },
      { id: 310, url: '/wedding_10.jpeg' },
      { id: 311, url: '/wedding_11.jpeg' },
      { id: 312, url: '/wedding_12.jpeg' },
      { id: 313, url: '/wedding_13.jpeg' },
      { id: 314, url: '/wedding_14.jpeg' },
      { id: 315, url: '/wedding_15.jpeg' },
      { id: 316, url: '/wedding_16.jpeg' },
      { id: 317, url: '/wedding_17.jpeg' },
      { id: 318, url: '/wedding_18.jpeg' },
      { id: 319, url: '/wedding_19.jpeg' },
      { id: 320, url: '/wedding_20.jpeg' },
      { id: 321, url: '/wedding_21.jpeg' },
      { id: 322, url: '/wedding_22.jpeg' },
      { id: 323, url: '/wedding_23.jpeg' },
      { id: 324, url: '/wedding_24.jpeg' },
      { id: 325, url: '/wedding_25.jpeg' },
      { id: 326, url: '/wedding_26.jpeg' },
      { id: 327, url: '/wedding_27.jpeg' },
      { id: 328, url: '/wedding_28.jpeg' },
      { id: 329, url: '/wedding_29.jpeg' },
      { id: 330, url: '/wedding_30.jpeg' },
      { id: 331, url: '/wedding_31.jpeg' },
      { id: 332, url: '/wedding_32.jpeg' },
      { id: 333, url: '/wedding_33.jpeg' },
      { id: 334, url: '/wedding_34.jpeg' },
      { id: 335, url: '/wedding_35.jpeg' },
      { id: 336, url: '/wedding_36.jpeg' },
      { id: 337, url: '/wedding_37.jpeg' },
    ],
    '추곡리': [
      { id: 201, url: '/chu_1.jpeg' },
      { id: 202, url: '/chu_2.jpeg' },
      { id: 203, url: '/chu_3.jpeg' },
      { id: 204, url: '/chu_4.jpeg' },
      { id: 205, url: '/chu_5.jpeg' },
      { id: 206, url: '/chu_6.jpeg' },
      { id: 207, url: '/chu_7.jpeg' },
      { id: 208, url: '/chu_8.jpeg' },
      { id: 209, url: '/chu_9.jpeg' },
      { id: 210, url: '/chu_10.jpeg' },
      { id: 211, url: '/chu_11.jpeg' },
      { id: 212, url: '/chu_12.jpeg' },
      { id: 213, url: '/chu_13.jpeg' },
      { id: 214, url: '/chu_14.jpeg' },
      { id: 215, url: '/chu_15.jpeg' },
      { id: 216, url: '/chu_16.jpeg' },
      { id: 217, url: '/chu_17.jpeg' },
      { id: 218, url: '/chu_18.jpeg' },
      { id: 219, url: '/chu_19.jpeg' },
      { id: 220, url: '/chu_20.jpeg' },
      { id: 221, url: '/chu_21.jpeg' },
    ],
'연애': [
  { id: 100, url: '/love_0.jpg' },
  { id: 101, url: '/love_1.jpg' },
  { id: 103, url: '/love_3.jpg' },
  { id: 104, url: '/love_4.jpg' },
  { id: 105, url: '/love_5.jpg' },
  { id: 106, url: '/love_6.jpg' },
  { id: 107, url: '/love_7.jpg' },
  { id: 108, url: '/love_8.jpg' },
  { id: 109, url: '/love_9.jpg' },
  { id: 110, url: '/love_10.jpg' },
  { id: 111, url: '/love_11.jpg' },
  { id: 112, url: '/love_12.jpg' },
  { id: 113, url: '/love_13.jpg' },
  { id: 114, url: '/love_14.jpg' },
  { id: 115, url: '/love_15.jpg' },
  { id: 116, url: '/love_16.jpg' },
  { id: 117, url: '/love_17.jpg' },
  { id: 118, url: '/love_18.JPG' },
],
  };

  currentImages = computed(() => this.galleryData[this.activeTab()] || []);

  totalPhotos = computed(() =>
    Object.values(this.galleryData).reduce((acc, curr) => acc + curr.length, 0)
  );

  openLightbox(index: number) {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
  }

  closeLightbox() {
    this.lightboxOpen.set(false);
  }

  prevImage() {
    if (this.lightboxIndex() > 0) {
      this.lightboxIndex.update(i => i - 1);
    }
  }

  nextImage() {
    if (this.lightboxIndex() < this.currentImages().length - 1) {
      this.lightboxIndex.update(i => i + 1);
    }
  }
}
