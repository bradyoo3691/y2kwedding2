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

        <!-- 그리드 (스크롤 가능) -->
        <div class="mt-1 overflow-y-auto" style="max-height: 70vh;">
          <div class="grid grid-cols-3 gap-1 md:gap-2">
            @for (img of currentImages(); track img.id; let i = $index) {
              <div
                class="group relative overflow-hidden aspect-square bg-stone-100 cursor-pointer"
                (click)="openLightbox(i)"
              >
                <img
                  [src]="img.url"
                  [alt]="activeTab() + ' photo ' + img.id"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
      <div
        class="fixed inset-0 z-50 bg-black flex flex-col"
        (click)="closeLightbox()"
      >
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
      { id: 301, url: '/웨딩_1.jpg' },
      { id: 302, url: '/웨딩_2.jpg' },
      { id: 303, url: '/웨딩_3.jpg' },
      { id: 304, url: '/웨딩_4.jpg' },
      { id: 305, url: '/웨딩_5.jpg' },
      { id: 306, url: '/웨딩_6.jpg' },
      { id: 307, url: '/웨딩_7.jpg' },
      { id: 308, url: '/웨딩_8.jpg' },
      { id: 309, url: '/웨딩_9.jpg' },
      { id: 310, url: '/웨딩_10.jpg' },
      { id: 311, url: '/웨딩_11.jpg' },
      { id: 312, url: '/웨딩_12.jpg' },
      { id: 313, url: '/웨딩_13.jpg' },
      { id: 314, url: '/웨딩_14.jpg' },
      { id: 315, url: '/웨딩_15.jpg' },
      { id: 316, url: '/웨딩_16.jpg' },
      { id: 317, url: '/웨딩_17.jpg' },
      { id: 318, url: '/웨딩_18.jpg' },
      { id: 319, url: '/웨딩_19.jpg' },
      { id: 320, url: '/웨딩_20.jpg' },
      { id: 321, url: '/웨딩_21.jpg' },
      { id: 322, url: '/웨딩_22.jpg' },
      { id: 323, url: '/웨딩_23.jpg' },
      { id: 324, url: '/웨딩_24.jpg' },
      { id: 325, url: '/웨딩_25.jpg' },
      { id: 326, url: '/웨딩_26.jpg' },
      { id: 327, url: '/웨딩_27.jpg' },
      { id: 328, url: '/웨딩_28.jpg' },
      { id: 329, url: '/웨딩_29.jpg' },
      { id: 330, url: '/웨딩_30.jpg' },
      { id: 331, url: '/웨딩_31.jpg' },
      { id: 332, url: '/웨딩_32.jpg' },
      { id: 333, url: '/웨딩_33.jpg' },
      { id: 334, url: '/웨딩_34.jpg' },
      { id: 335, url: '/웨딩_35.jpg' },
      { id: 336, url: '/웨딩_36.jpg' },
      { id: 337, url: '/웨딩_37.jpg' },
    ],
    '추곡리': [
      { id: 201, url: '/추곡리_1.jpg' },
      { id: 202, url: '/추곡리_2.jpg' },
      { id: 203, url: '/추곡리_3.jpg' },
      { id: 204, url: '/추곡리_4.jpg' },
      { id: 205, url: '/추곡리_5.jpg' },
      { id: 206, url: '/추곡리_6.jpg' },
      { id: 207, url: '/추곡리_7.jpg' },
      { id: 208, url: '/추곡리_8.jpg' },
      { id: 209, url: '/추곡리_9.jpg' },
      { id: 210, url: '/추곡리_10.jpg' },
      { id: 211, url: '/추곡리_11.jpg' },
      { id: 212, url: '/추곡리_12.jpg' },
      { id: 213, url: '/추곡리_13.jpg' },
      { id: 214, url: '/추곡리_14.jpg' },
      { id: 215, url: '/추곡리_15.jpg' },
      { id: 216, url: '/추곡리_16.jpg' },
      { id: 217, url: '/추곡리_17.jpg' },
      { id: 218, url: '/추곡리_18.jpg' },
      { id: 219, url: '/추곡리_19.jpg' },
      { id: 220, url: '/추곡리_20.jpg' },
      { id: 221, url: '/추곡리_21.jpg' },
    ],
  '연애': [
  { id: 100, url: '/연애_000.png' },
  { id: 101, url: '/연애_00.png' },
  { id: 102, url: '/연애_1.jpg' },
  { id: 103, url: '/연애_2.jpg' },
  { id: 104, url: '/연애_3.jpg' },
  { id: 105, url: '/연애_4.jpg' },
  { id: 106, url: '/연애_5.jpg' },
  { id: 107, url: '/연애_6.jpg' },
  { id: 108, url: '/연애_7.jpg' },
  { id: 109, url: '/연애_8.jpg' },
  { id: 110, url: '/연애_9.png' },
  { id: 111, url: '/연애_10.jpg' },
  { id: 112, url: '/연애_11.jpg' },
  { id: 113, url: '/연애_12.jpg' },
  { id: 114, url: '/연애_13.png' },
  { id: 115, url: '/연애_14.jpg' },
  { id: 116, url: '/연애_15.jpg' },
  { id: 117, url: '/연애_16.jpg' },
  { id: 118, url: '/연애_17.jpg' },
  { id: 119, url: '/연애_18.jpg' },
  { id: 120, url: '/연애_19.jpg' },
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
