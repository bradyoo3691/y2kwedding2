import { Component, ChangeDetectionStrategy, signal, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- BGM 팝업 -->
    <div *ngIf="showPopup()" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div class="bg-white rounded-2xl p-10 text-center shadow-2xl mx-6">
        <p class="text-xl font-serif mb-2 text-stone-700">🎵 BGM을 함께 들으시겠습니까?</p>
        <p class="text-sm text-stone-400 mb-8">멋진 음악과 함께 선경이와 승혁이의 댄스를 감상하세요!</p>
        <div class="flex flex-col gap-3 items-center">
          <button
            (click)="enableSound()"
            class="w-48 px-8 py-3 bg-rose-400 text-white text-lg font-bold rounded-full shadow-lg hover:bg-rose-500 transition transform hover:scale-105">
            🎶 네 (추천)
          </button>
          <button
            (click)="disableSound()"
            class="w-48 px-8 py-2 border border-stone-300 text-stone-400 text-sm rounded-full hover:bg-stone-50 transition">
            아니오
          </button>
        </div>
      </div>
    </div>

    <section class="relative w-full p-0 md:p-6 lg:p-8 flex items-center justify-center bg-stone-50" style="height: calc(var(--vh, 1vh) * 100)">
      <div class="relative w-full h-full md:rounded-3xl overflow-hidden shadow-2xl">
        <div class="absolute inset-0 w-full h-full bg-stone-900">
          <iframe
            id="vimeo-player"
            [src]="vimeoUrl()"
            class="absolute inset-0 w-full h-full"
            style="border: none; transform: scale(1.5); transform-origin: center center;"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div class="absolute inset-0 bg-black/30 pointer-events-none"></div>
        </div>

        <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
          <div *ngIf="!moved()" class="flex flex-col items-center animate-fade-in">
            <p class="font-sans text-xs md:text-sm tracking-[0.4em] uppercase opacity-90 mb-6">
              We are getting married
            </p>
            <h1 class="font-serif text-7xl md:text-8xl lg:text-9xl mb-6 font-light drop-shadow-lg">
              <span class="block italic">Brady</span>
              <span class="block text-4xl md:text-5xl my-3 opacity-80">&amp;</span>
              <span class="block italic">Perrier</span>
            </h1>
            <div class="flex flex-col items-center gap-2 opacity-90 mt-4">
              <p class="font-sans text-base md:text-lg tracking-[0.25em]">2026.06.06 15:30</p>
              <p class="font-sans text-sm md:text-base tracking-[0.2em] opacity-80">at W스퀘어컨벤션 판교</p>
            </div>
          </div>

          <div *ngIf="moved()" class="flex flex-col items-center animate-shrink-up">
            <p class="font-sans text-xs md:text-sm tracking-[0.4em] uppercase opacity-90">
              We are getting married
            </p>
            <p class="font-sans text-xs md:text-sm tracking-[0.4em] uppercase opacity-90 mt-1">
              Brady &amp; Perrier
            </p>
            <p class="font-sans text-xs md:text-sm tracking-[0.3em] opacity-80 mt-1">
              2026.06.06 15:30 · W스퀘어컨벤션 판교
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .animate-fade-in {
      animation: fade-in 0.5s ease-out forwards;
    }
    @keyframes fade-in {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    .animate-shrink-up {
      animation: shrink-up 2.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
    @keyframes shrink-up {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(-250px); }
    }
  `]
})
export class HeroComponent implements AfterViewInit, OnInit {
  showPopup = signal(true);
  moved = signal(false);
  vimeoUrl = signal<SafeResourceUrl>('');

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.vimeoUrl.set(
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1183580062?autoplay=1&loop=1&autopause=0&muted=1&background=1&controls=0'
      )
    );
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.moved.set(true);
    }, 8500);
  }

enableSound() {
  this.showPopup.set(false);
  this.vimeoUrl.set(
    this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://player.vimeo.com/video/1183580062?autoplay=1&loop=1&autopause=0&muted=0&controls=0'
    )
  );
}

  disableSound() {
    this.showPopup.set(false);
  }
}
