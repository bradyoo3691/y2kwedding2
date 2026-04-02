import { Component, ChangeDetectionStrategy, signal, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- BGM 팝업 -->
    <div *ngIf="showPopup()" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div class="bg-white rounded-2xl p-8 text-center shadow-2xl mx-6">
        <p class="text-lg font-serif mb-6 text-stone-700">🎵 BGM을 들으시겠습니까?</p>
        <div class="flex gap-4 justify-center">
          <button 
            (click)="enableSound()"
            class="px-6 py-2 bg-stone-800 text-white rounded-full hover:bg-stone-600 transition">
            예
          </button>
          <button 
            (click)="disableSound()"
            class="px-6 py-2 border border-stone-400 text-stone-600 rounded-full hover:bg-stone-100 transition">
            아니오
          </button>
        </div>
      </div>
    </div>

    <section class="relative w-full h-[100svh] p-0 md:p-6 lg:p-8 flex items-center justify-center bg-stone-50">
      <div class="relative w-full h-full md:rounded-3xl overflow-hidden shadow-2xl">
        <div class="absolute inset-0 w-full h-full bg-stone-200">
          <video 
            #videoRef
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
  `]
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('videoRef') videoRef!: ElementRef<HTMLVideoElement>;
  
  showPopup = signal(true);

  ngAfterViewInit() {}

  enableSound() {
    this.showPopup.set(false);
    const video = this.videoRef.nativeElement;
    video.muted = false;
    video.play();
  }

  disableSound() {
    this.showPopup.set(false);
    const video = this.videoRef.nativeElement;
    video.muted = true;
    video.play();
  }
}
