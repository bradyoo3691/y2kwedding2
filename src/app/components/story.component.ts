import { Component, ChangeDetectionStrategy, signal, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section #sectionRef class="relative w-full min-h-[80vh] bg-gradient-to-b from-pink-100 via-rose-50 to-pink-100 overflow-hidden flex flex-col items-center justify-center py-20">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-10 left-10 text-4xl opacity-60 animate-float-slow">☁️</div>
        <div class="absolute top-20 right-20 text-5xl opacity-60 animate-float">☁️</div>
        <div class="absolute bottom-40 left-1/4 text-3xl opacity-70 animate-float-fast">💖</div>
        <div class="absolute top-1/3 right-1/4 text-4xl opacity-60 animate-float-slow">💕</div>
        <div class="absolute bottom-20 right-10 text-3xl opacity-50 animate-float">🌸</div>
        <div class="absolute top-1/2 left-10 text-2xl opacity-50 animate-float-fast">✨</div>
      </div>

      <h2 class="relative font-serif text-4xl md:text-5xl italic text-rose-800 drop-shadow-sm z-10 mb-4">Our Story</h2>

      <div *ngIf="!started()" class="relative z-10 mb-6">
        <button (click)="startStory()" class="px-8 py-3 bg-rose-400 text-white font-bold rounded-full shadow-lg hover:bg-rose-500 transition transform hover:scale-105 text-base">
          💑 러브스토리 처음부터 보기
        </button>
      </div>

      <div *ngIf="started()" class="relative z-10 mb-4 flex items-center gap-3">
        <span class="text-rose-400 text-sm font-sans">재생중...</span>
        <button (click)="resetStory()" class="px-4 py-1 border border-rose-300 text-rose-400 text-xs rounded-full hover:bg-rose-50 transition">
          🔄 다시보기
        </button>
      </div>

      <!-- Phase 5 -->
      <div *ngIf="currentPhase() === 5" class="relative w-full max-w-lg h-[500px] z-10 px-4 flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
          <span class="absolute text-2xl animate-heart-pop-1">❤️</span>
          <span class="absolute text-3xl animate-heart-pop-2">💕</span>
          <span class="absolute text-2xl animate-heart-pop-3">💖</span>
          <span class="absolute text-xl animate-heart-pop-4">❤️</span>
          <span class="absolute text-3xl animate-heart-pop-5">💗</span>
          <span class="absolute text-2xl animate-heart-pop-6">💕</span>
          <span class="absolute text-xl animate-heart-pop-7">❤️</span>
          <span class="absolute text-2xl animate-heart-pop-8">💖</span>
          <span class="absolute text-3xl animate-heart-pop-9">💕</span>
          <span class="absolute text-xl animate-heart-pop-10">❤️</span>
        </div>
        <div class="relative flex flex-col items-center animate-frame-entrance">
          <div class="relative animate-frame-shake">
            <svg width="0" height="0">
              <defs>
                <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
                  <path d="M 0.5,0.85 C 0.1,0.6 -0.1,0.3 0.1,0.15 C 0.2,0.05 0.35,0.02 0.5,0.15 C 0.65,0.02 0.8,0.05 0.9,0.15 C 1.1,0.3 0.9,0.6 0.5,0.85 Z"/>
                </clipPath>
              </defs>
            </svg>
            <div class="w-64 h-64 relative">
              <svg viewBox="0 0 200 200" class="absolute inset-0 w-full h-full drop-shadow-2xl">
                <path d="M100,170 C30,130 0,80 20,40 C35,10 65,5 100,35 C135,5 165,10 180,40 C200,80 170,130 100,170 Z"
                  fill="none" stroke="#f43f5e" stroke-width="6" class="animate-heart-border"/>
                <path d="M100,170 C30,130 0,80 20,40 C35,10 65,5 100,35 C135,5 165,10 180,40 C200,80 170,130 100,170 Z"
                  fill="rgba(244,63,94,0.1)"/>
              </svg>
              <img src="/love.png" alt="love" class="absolute inset-0 w-full h-full object-cover"
                style="clip-path: path('M100,170 C30,130 0,80 20,40 C35,10 65,5 100,35 C135,5 165,10 180,40 C200,80 170,130 100,170 Z'); transform: scale(0.95);"/>
            </div>
          </div>
          <div class="mt-4 text-center animate-fade-in-text">
            <p class="font-serif text-2xl text-rose-700 italic">승혁 & 선경</p>
            <p class="font-sans text-xs text-rose-400 mt-1 tracking-widest">Forever Together 💍</p>
          </div>
        </div>
      </div>

      <!-- Phase 1~4: 지도 -->
      <div *ngIf="currentPhase() !== 5 && started()" class="relative w-full max-w-lg h-[500px] z-10 px-4">
        <svg viewBox="0 0 220 320" class="w-full h-full drop-shadow-xl" preserveAspectRatio="xMidYMid meet">
          <!-- 대한민국 지도 (더 사실적인 윤곽) -->
          <defs>
            <filter id="map-shadow">
              <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#f9a8d4" flood-opacity="0.4"/>
            </filter>
          </defs>

          <!-- 본토 -->
          <path d="
            M 95,18 L 105,15 L 118,20 L 128,18 L 135,25
            L 148,30 L 155,40 L 158,52 L 162,65
            L 168,80 L 170,95 L 168,110 L 172,122
            L 170,135 L 165,148 L 162,160 L 158,172
            L 152,182 L 148,192 L 142,202 L 135,212
            L 128,220 L 118,225 L 108,228 L 98,226
            L 88,222 L 78,215 L 70,205 L 62,195
            L 55,183 L 50,170 L 48,158 L 45,145
            L 42,132 L 40,118 L 42,104 L 38,90
            L 40,76 L 45,63 L 50,52 L 58,42
            L 68,33 L 78,24 L 88,19 Z"
            fill="#fff5f7" stroke="#fbb6ce" stroke-width="2" filter="url(#map-shadow)"/>

          <!-- 제주도 -->
          <ellipse cx="88" cy="268" rx="18" ry="9" fill="#fff5f7" stroke="#fbb6ce" stroke-width="1.5"/>

          <!-- 울릉도 -->
          <circle cx="185" cy="88" r="5" fill="#fff5f7" stroke="#fbb6ce" stroke-width="1.5"/>

          <!-- 서울~부산 점선 경로 -->
          <path d="M 98,75 Q 135,130 148,205" fill="none" stroke="#f9a8d4" stroke-width="2.5" stroke-dasharray="5,4"/>

          <!-- 서울 마커 -->
          <g transform="translate(98, 75)">
            <circle cx="0" cy="0" r="6" fill="#f43f5e" stroke="white" stroke-width="2"/>
            <rect x="-22" y="-26" width="44" height="16" rx="4" fill="white" opacity="0.95"/>
            <text x="0" y="-15" font-size="8" font-weight="bold" text-anchor="middle" fill="#f43f5e" font-family="sans-serif">SEOUL</text>
          </g>

          <!-- 부산 마커 -->
          <g transform="translate(148, 205)">
            <circle cx="0" cy="0" r="6" fill="#3b82f6" stroke="white" stroke-width="2"/>
            <rect x="-22" y="10" width="44" height="16" rx="4" fill="white" opacity="0.95"/>
            <text x="0" y="21" font-size="8" font-weight="bold" text-anchor="middle" fill="#3b82f6" font-family="sans-serif">BUSAN</text>
          </g>

          <!-- Phase1: brady 서울→부산, perrier 부산 대기 -->
          <g *ngIf="currentPhase() === 1">
            <image href="/perrier_face.png" x="133" y="190" width="24" height="24"/>
            <image href="/brady_face.png" x="86" y="60" width="24" height="24" class="animate-move-down"/>
          </g>

          <!-- Phase2: brady 부산→서울(부끄), perrier 부산 대기 -->
          <g *ngIf="currentPhase() === 2">
            <image href="/perrier_face.png" x="133" y="190" width="24" height="24"/>
            <image href="/brady_face.png" x="137" y="190" width="24" height="24" class="animate-move-up"/>
            <text x="163" y="202" font-size="13" dominant-baseline="central" class="animate-move-up">😳</text>
          </g>

          <!-- Phase3: brady 서울→부산(부끄), perrier 부산 대기 -->
          <g *ngIf="currentPhase() === 3">
            <image href="/perrier_face.png" x="133" y="190" width="24" height="24"/>
            <image href="/brady_face.png" x="86" y="60" width="24" height="24" class="animate-move-down"/>
            <text x="112" y="72" font-size="13" dominant-baseline="central" class="animate-move-down">😳</text>
          </g>

          <!-- Phase4: brady2 ❤️ perrier 💐 같이 서울로 -->
          <g *ngIf="currentPhase() === 4">
            <image href="/brady_face2.png" x="125" y="188" width="24" height="24" class="animate-move-up"/>
            <text x="151" y="200" font-size="13" dominant-baseline="central" class="animate-move-up">❤️</text>
            <image href="/perrier_face.png" x="158" y="188" width="24" height="24" class="animate-move-up"/>
            <text x="184" y="200" font-size="13" dominant-baseline="central" class="animate-move-up">💐</text>
          </g>
        </svg>
      </div>

      <!-- 시작 전 지도 -->
      <div *ngIf="!started()" class="relative w-full max-w-lg h-[500px] z-10 px-4">
        <svg viewBox="0 0 220 320" class="w-full h-full drop-shadow-xl" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="map-shadow2">
              <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#f9a8d4" flood-opacity="0.4"/>
            </filter>
          </defs>
          <path d="
            M 95,18 L 105,15 L 118,20 L 128,18 L 135,25
            L 148,30 L 155,40 L 158,52 L 162,65
            L 168,80 L 170,95 L 168,110 L 172,122
            L 170,135 L 165,148 L 162,160 L 158,172
            L 152,182 L 148,192 L 142,202 L 135,212
            L 128,220 L 118,225 L 108,228 L 98,226
            L 88,222 L 78,215 L 70,205 L 62,195
            L 55,183 L 50,170 L 48,158 L 45,145
            L 42,132 L 40,118 L 42,104 L 38,90
            L 40,76 L 45,63 L 50,52 L 58,42
            L 68,33 L 78,24 L 88,19 Z"
            fill="#fff5f7" stroke="#fbb6ce" stroke-width="2" filter="url(#map-shadow2)"/>
          <ellipse cx="88" cy="268" rx="18" ry="9" fill="#fff5f7" stroke="#fbb6ce" stroke-width="1.5"/>
          <circle cx="185" cy="88" r="5" fill="#fff5f7" stroke="#fbb6ce" stroke-width="1.5"/>
          <path d="M 98,75 Q 135,130 148,205" fill="none" stroke="#f9a8d4" stroke-width="2.5" stroke-dasharray="5,4"/>
          <g transform="translate(98, 75)">
            <circle cx="0" cy="0" r="6" fill="#f43f5e" stroke="white" stroke-width="2"/>
            <rect x="-22" y="-26" width="44" height="16" rx="4" fill="white" opacity="0.95"/>
            <text x="0" y="-15" font-size="8" font-weight="bold" text-anchor="middle" fill="#f43f5e" font-family="sans-serif">SEOUL</text>
          </g>
          <g transform="translate(148, 205)">
            <circle cx="0" cy="0" r="6" fill="#3b82f6" stroke="white" stroke-width="2"/>
            <rect x="-22" y="10" width="44" height="16" rx="4" fill="white" opacity="0.95"/>
            <text x="0" y="21" font-size="8" font-weight="bold" text-anchor="middle" fill="#3b82f6" font-family="sans-serif">BUSAN</text>
          </g>
          <!-- 시작 전: brady 서울, perrier 부산 대기 -->
          <image href="/brady_face.png" x="86" y="60" width="24" height="24"/>
          <image href="/perrier_face.png" x="133" y="190" width="24" height="24"/>
        </svg>
      </div>

      <!-- 텍스트 박스 -->
      <div class="relative mt-1 font-sans text-sm md:text-base leading-relaxed font-medium text-rose-900 text-center px-6 bg-white/70 rounded-3xl shadow-sm backdrop-blur-md border border-white/50 z-10 max-w-lg mx-4 h-24 flex items-center justify-center overflow-hidden w-full">
        <span *ngIf="!started()" class="text-rose-300 text-sm">버튼을 눌러 러브스토리를 시작해보세요 💕</span>
        <ng-container *ngIf="started()">
          <span *ngIf="currentPhase() === 1" class="absolute w-full px-6" [innerHTML]="'🚂 신랑 승혁이(서울오피스)는 직장동료 선경이(부산오피스)가 자꾸 눈에 밟혀<br>다짜고짜 부산으로 내려가요 💨'"></span>
          <span *ngIf="currentPhase() === 2" class="absolute w-full px-6" [innerHTML]="'😳 시간을 보낸 승혁이는 확신을 가지고,<br>우선 전략을 수립하러 서울로 일단 돌아옵니다 🗺️'"></span>
          <span *ngIf="currentPhase() === 3" class="absolute w-full px-6" [innerHTML]="'💐 몇주뒤 작정한 승혁이는 다시 부산으로 내려갑니다.<br>꽃다발을 들고. 두근두근 🥰'"></span>
          <span *ngIf="currentPhase() === 4" class="absolute w-full px-6" [innerHTML]="'🎉 숨막히는 고백 끝에 선경이는 승혁이의 고백을 수락했고,<br>둘의 사랑은 이루어집니다! ❤️ 야호'"></span>
          <span *ngIf="currentPhase() === 5" class="absolute w-full px-6" [innerHTML]="'💍 그렇게 예비 신랑&amp;신부가 된 승혁이와 선경이가<br>이제는 여러분을 둘의 사랑스러운 결혼식에 초대합니다 🎊'"></span>
        </ng-container>
      </div>
    </section>
  `,
  styles: [`
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-float-slow { animation: float 8s ease-in-out infinite; }
    .animate-float-fast { animation: float 4s ease-in-out infinite; }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }

    .animate-move-down {
      animation: move-down 8s linear forwards;
    }
    @keyframes move-down {
      0% { transform: translate(0, 0); }
      100% { transform: translate(62px, 130px); }
    }

    .animate-move-up {
      animation: move-up 8s linear forwards;
    }
    @keyframes move-up {
      0% { transform: translate(0, 0); }
      100% { transform: translate(-62px, -130px); }
    }

    .animate-frame-entrance {
      animation: frame-entrance 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    @keyframes frame-entrance {
      0% { transform: scale(0) rotate(-10deg); opacity: 0; }
      70% { transform: scale(1.1) rotate(3deg); opacity: 1; }
      100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }

    .animate-frame-shake {
      animation: frame-shake 2s ease-in-out 1s infinite;
    }
    @keyframes frame-shake {
      0%, 100% { transform: rotate(0deg); }
      20% { transform: rotate(-3deg); }
      40% { transform: rotate(3deg); }
      60% { transform: rotate(-2deg); }
      80% { transform: rotate(2deg); }
    }

    .animate-heart-border {
      animation: heart-pulse 1s ease-in-out infinite;
    }
    @keyframes heart-pulse {
      0%, 100% { stroke-width: 6; opacity: 1; }
      50% { stroke-width: 10; opacity: 0.7; }
    }

    .animate-fade-in-text {
      animation: fade-in-text 1s ease-in 0.8s both;
    }
    @keyframes fade-in-text {
      0% { opacity: 0; transform: translateY(10px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    .animate-heart-pop-1  { top: 60%; left: 50%; animation: heart-pop 2s ease-out 0.0s infinite; }
    .animate-heart-pop-2  { top: 65%; left: 30%; animation: heart-pop 2s ease-out 0.2s infinite; }
    .animate-heart-pop-3  { top: 65%; left: 70%; animation: heart-pop 2s ease-out 0.4s infinite; }
    .animate-heart-pop-4  { top: 70%; left: 20%; animation: heart-pop 2s ease-out 0.6s infinite; }
    .animate-heart-pop-5  { top: 70%; left: 80%; animation: heart-pop 2s ease-out 0.8s infinite; }
    .animate-heart-pop-6  { top: 55%; left: 15%; animation: heart-pop 2s ease-out 1.0s infinite; }
    .animate-heart-pop-7  { top: 55%; left: 85%; animation: heart-pop 2s ease-out 1.2s infinite; }
    .animate-heart-pop-8  { top: 75%; left: 40%; animation: heart-pop 2s ease-out 1.4s infinite; }
    .animate-heart-pop-9  { top: 75%; left: 60%; animation: heart-pop 2s ease-out 1.6s infinite; }
    .animate-heart-pop-10 { top: 50%; left: 50%; animation: heart-pop 2s ease-out 1.8s infinite; }

    @keyframes heart-pop {
      0%   { transform: translate(0, 0) scale(0.5); opacity: 0; }
      20%  { opacity: 1; }
      100% { transform: translate(var(--tx, 0px), -120px) scale(1.2); opacity: 0; }
    }
  `]
})
export class StoryComponent implements AfterViewInit, OnDestroy {
  started = signal(false);
  currentPhase = signal(1);
  private timers: any[] = [];

  @ViewChild('sectionRef') sectionRef!: ElementRef;

  ngAfterViewInit() {}

  startStory() {
    this.started.set(true);
    this.currentPhase.set(1);
    this.runPhases();
  }

  resetStory() {
    this.timers.forEach(t => clearTimeout(t));
    this.timers = [];
    this.started.set(false);
    this.currentPhase.set(1);
  }

  runPhases() {
    this.timers.push(setTimeout(() => this.currentPhase.set(2), 8000));
    this.timers.push(setTimeout(() => this.currentPhase.set(3), 16000));
    this.timers.push(setTimeout(() => this.currentPhase.set(4), 24000));
    this.timers.push(setTimeout(() => this.currentPhase.set(5), 32000));
  }

  ngOnDestroy() {
    this.timers.forEach(t => clearTimeout(t));
  }
}
