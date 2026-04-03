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

      <!-- Phase 1~4: 지도 + 자막 -->
      <div *ngIf="currentPhase() !== 5 && started()" class="relative w-full max-w-lg z-10 px-4 flex flex-col items-center">
        <svg viewBox="0 0 220 290" class="w-full drop-shadow-xl" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="map-shadow">
              <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#f9a8d4" flood-opacity="0.4"/>
            </filter>
          </defs>

          <!-- 대한민국 본토 -->
          <path d="
            M 100,12 L 108,10 L 118,13 L 126,12 L 134,16
            L 143,22 L 150,30 L 155,40 L 158,50
            L 162,62 L 165,75 L 166,88 L 164,100
            L 168,112 L 166,124 L 162,136 L 158,148
            L 154,158 L 150,167 L 145,175 L 140,182
            L 134,188 L 127,193 L 120,196 L 113,197
            L 106,196 L 99,193 L 92,188 L 85,182
            L 78,174 L 72,165 L 67,155 L 63,144
            L 59,133 L 57,121 L 56,109 L 58,97
            L 54,85 L 56,73 L 60,62 L 65,52
            L 72,43 L 80,35 L 88,27 L 95,19 Z"
            fill="#fff5f7" stroke="#fbb6ce" stroke-width="2" filter="url(#map-shadow)"/>

          <path d="M 60,62 Q 52,70 56,78 Q 48,86 54,95 Q 46,104 56,112 Q 50,120 57,128"
            fill="none" stroke="#fbb6ce" stroke-width="1" opacity="0.5"/>
          <path d="M 162,62 Q 168,72 165,82 Q 170,92 166,102 Q 171,112 168,122"
            fill="none" stroke="#fbb6ce" stroke-width="1" opacity="0.5"/>
          <path d="M 67,155 Q 75,162 80,158 Q 88,165 95,160 Q 102,166 110,161 Q 118,167 125,162 Q 132,168 140,162 Q 145,168 150,167"
            fill="none" stroke="#fbb6ce" stroke-width="1" opacity="0.5"/>

          <!-- 제주도 -->
          <ellipse cx="95" cy="252" rx="20" ry="10" fill="#fff5f7" stroke="#fbb6ce" stroke-width="1.5"/>
          <text x="95" y="254" font-size="6" text-anchor="middle" fill="#fbb6ce" font-family="sans-serif">제주</text>

          <!-- 울릉도 -->
          <circle cx="188" cy="82" r="5" fill="#fff5f7" stroke="#fbb6ce" stroke-width="1.5"/>
          <text x="188" y="84" font-size="5" text-anchor="middle" fill="#fbb6ce" font-family="sans-serif">울릉</text>

          <!-- 서울~부산 점선 -->
          <path d="M 105,82 Q 138,128 148,188" fill="none" stroke="#f9a8d4" stroke-width="2.5" stroke-dasharray="5,4"/>

          <!-- 서울 마커 -->
          <g transform="translate(105, 82)">
            <circle cx="0" cy="0" r="6" fill="#f43f5e" stroke="white" stroke-width="2"/>
            <rect x="-22" y="-26" width="44" height="16" rx="4" fill="white" opacity="0.95"/>
            <text x="0" y="-15" font-size="8" font-weight="bold" text-anchor="middle" fill="#f43f5e" font-family="sans-serif">SEOUL</text>
          </g>

          <!-- 부산 마커 -->
          <g transform="translate(148, 188)">
            <circle cx="0" cy="0" r="6" fill="#3b82f6" stroke="white" stroke-width="2"/>
            <rect x="-22" y="10" width="44" height="16" rx="4" fill="white" opacity="0.95"/>
            <text x="0" y="21" font-size="8" font-weight="bold" text-anchor="middle" fill="#3b82f6" font-family="sans-serif">BUSAN</text>
          </g>

          <!-- Phase1: brady(60x60) 서울→부산, perrier(36x36) 부산 대기 -->
          <g *ngIf="currentPhase() === 1">
            <image href="/perrier_face.png" x="136" y="179" width="36" height="36"/>
            <image href="/brady_face.png" x="87" y="55" width="60" height="60" class="animate-move-down"/>
          </g>

          <!-- Phase2: bashful_brady(60x60) 부산→서울, perrier(36x36) 부산 대기 -->
          <g *ngIf="currentPhase() === 2">
            <image href="/perrier_face.png" x="136" y="179" width="36" height="36"/>
            <image href="/bashful_brady.png" x="130" y="163" width="60" height="60" class="animate-move-up"/>
          </g>

          <!-- Phase3: bashful_brady(60x60) 서울→부산, perrier(36x36) 부산 대기 -->
          <g *ngIf="currentPhase() === 3">
            <image href="/perrier_face.png" x="136" y="179" width="36" height="36"/>
            <image href="/bashful_brady.png" x="87" y="55" width="60" height="60" class="animate-move-down"/>
          </g>

          <!-- Phase4: brady2(60x60) ❤️ perrier(36x36) 💐 같이 서울로 -->
          <g *ngIf="currentPhase() === 4">
            <image href="/brady_face2.png" x="110" y="163" width="60" height="60" class="animate-move-up"/>
            <text x="172" y="193" font-size="16" dominant-baseline="central" class="animate-move-up">❤️</text>
            <image href="/perrier_face.png" x="178" y="175" width="36" height="36" class="animate-move-up"/>
            <text x="216" y="193" font-size="16" dominant-baseline="central" class="animate-move-up">💐</text>
          </g>
        </svg>

        <!-- 자막 박스 -->
        <div class="font-sans text-sm md:text-base leading-relaxed font-medium text-rose-900 text-center px-6 bg-white/70 rounded-3xl shadow-sm backdrop-blur-md border border-white/50 w-full h-24 flex items-center justify-center overflow-hidden mt-1">
          <ng-container *ngIf="started()">
            <span *ngIf="currentPhase() === 1" class="absolute w-full px-6" [innerHTML]="'🚂 신랑 승혁이(서울오피스)는 직장동료 선경이(부산오피스)가 자꾸 눈에 밟혀<br>다짜고짜 부산으로 내려가요 💨'"></span>
            <span *ngIf="currentPhase() === 2" class="absolute w-full px-6" [innerHTML]="'😳 시간을 보낸 승혁이는 확신을 가지고,<br>우선 전략을 수립하러 서울로 일단 돌아옵니다 🗺️'"></span>
            <span *ngIf="currentPhase() === 3" class="absolute w-full px-6" [innerHTML]="'💐 몇주뒤 작정한 승혁이는 다시 부산으로 내려갑니다.<br>꽃다발을 들고. 두근두근 🥰'"></span>
            <span *ngIf="currentPhase() === 4" class="absolute w-full px-6" [innerHTML]="'🎉 숨막히는 고백 끝에 선경이는 승혁이의 고백을 수락했고,<br>둘의 사랑은 이루어집니다! ❤️ 야호'"></span>
            <span *ngIf="currentPhase() === 5" class="absolute w-full px-6" [innerHTML]="'💍 그렇게 예비 신랑&amp;신부가 된 승혁이와 선경이가<br>이제는 여러분을 둘의 사랑스러운 결혼식에 초대합니다 🎊'"></span>
          </ng-container>
        </div>
      </div>

      <!-- 시작 전 지도 -->
      <div *ngIf="!started()" class="relative w-full max-w-lg z-10 px-4 flex flex-col items-center">
        <svg viewBox="0 0 220 290" class="w-full drop-shadow-xl" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="map-shadow2">
              <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#f9a8d4" flood-opacity="0.4"/>
            </filter>
          </defs>
          <path d="
            M 100,12 L 108,10 L 118,13 L 126,12 L 134,16
            L 143,22 L 150,30 L 155,40 L 158,50
            L 162,62 L 165,75 L 166,88 L 164,100
            L 168,112 L 166,124 L 162,136 L 158,148
            L 154,158 L 150,167 L 145,175 L 140,182
            L 134,188 L 127,193 L 120,196 L 113,197
            L 106,196 L 99,193 L 92,188 L 85,182
            L 78,174 L 72,165 L 67,155 L 63,144
            L 59,133 L 57,121 L 56,109 L 58,97
            L 54,85 L 56,73 L 60,62 L 65,52
            L 72,43 L 80,35 L 88,27 L 95,19 Z"
            fill="#fff5f7" stroke="#fbb6ce" stroke-width="2" filter="url(#map-shadow2)"/>
          <path d="M 60,62 Q 52,70 56,78 Q 48,86 54,95 Q 46,104 56,112 Q 50,120 57,128"
            fill="none" stroke="#fbb6ce" stroke-width="1" opacity="0.5"/>
          <path d="M 162,62 Q 168,72 165,82 Q 170,92 166,102 Q 171,112 168,122"
            fill="none" stroke="#fbb6ce" stroke-width="1" opacity="0.5"/>
          <path d="M 67,155 Q 75,162 80,158 Q 88,165 95,160 Q 102,166 110,161 Q 118,167 125,162 Q 132,168 140,162 Q 145,168 150,167"
            fill="none" stroke="#fbb6ce" stroke-width="1" opacity="0.5"/>
          <ellipse cx="95" cy="252" rx="20" ry="10" fill="#fff5f7" stroke="#fbb6ce" stroke-width="1.5"/>
          <text x="95" y="254" font-size="6" text-anchor="middle" fill="#fbb6ce" font-family="sans-serif">제주</text>
          <circle cx="188" cy="82" r="5" fill="#fff5f7" stroke="#fbb6ce" stroke-width="1.5"/>
          <text x="188" y="84" font-size="5" text-anchor="middle" fill="#fbb6ce" font-family="sans-serif">울릉</text>
          <path d="M 105,82 Q 138,128 148,188" fill="none" stroke="#f9a8d4" stroke-width="2.5" stroke-dasharray="5,4"/>
          <g transform="translate(105, 82)">
            <circle cx="0" cy="0" r="6" fill="#f43f5e" stroke="white" stroke-width="2"/>
            <rect x="-22" y="-26" width="44" height="16" rx="4" fill="white" opacity="0.95"/>
            <text x="0" y="-15" font-size="8" font-weight="bold" text-anchor="middle" fill="#f43f5e" font-family="sans-serif">SEOUL</text>
          </g>
          <g transform="translate(148, 188)">
            <circle cx="0" cy="0" r="6" fill="#3b82f6" stroke="white" stroke-width="2"/>
            <rect x="-22" y="10" width="44" height="16" rx="4" fill="white" opacity="0.95"/>
            <text x="0" y="21" font-size="8" font-weight="bold" text-anchor="middle" fill="#3b82f6" font-family="sans-serif">BUSAN</text>
          </g>
          <image href="/brady_face.png" x="87" y="55" width="60" height="60"/>
          <image href="/perrier_face.png" x="136" y="179" width="36" height="36"/>
        </svg>

        <div class="font-sans text-sm md:text-base leading-relaxed font-medium text-rose-900 text-center px-6 bg-white/70 rounded-3xl shadow-sm backdrop-blur-md border border-white/50 w-full h-24 flex items-center justify-center mt-1">
          <span class="text-rose-300 text-sm">버튼을 눌러 러브스토리를 시작해보세요 💕</span>
        </div>
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
      100% { transform: translate(55px, 106px); }
    }

    .animate-move-up {
      animation: move-up 8s linear forwards;
    }
    @keyframes move-up {
      0% { transform: translate(0, 0); }
      100% { transform: translate(-55px, -106px); }
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
