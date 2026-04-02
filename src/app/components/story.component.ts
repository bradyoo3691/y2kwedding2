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

      <!-- Phase5: 가운데 축하 화면 -->
      <div *ngIf="currentPhase() === 5" class="relative w-full max-w-lg h-[500px] z-10 px-4 flex items-center justify-center">
        <div class="flex flex-col items-center justify-center">
          <div class="text-8xl mb-4 animate-couple-pop">🤵👰</div>
          <div class="flex gap-2 animate-hearts">
            <span class="text-3xl animate-heart-1">❤️</span>
            <span class="text-4xl animate-heart-2">💕</span>
            <span class="text-3xl animate-heart-3">❤️</span>
          </div>
          <div class="flex gap-2 mt-2 animate-hearts-2">
            <span class="text-2xl animate-heart-4">💖</span>
            <span class="text-3xl animate-heart-5">❤️</span>
            <span class="text-2xl animate-heart-6">💗</span>
          </div>
          <div class="mt-6 text-center">
            <p class="font-serif text-2xl text-rose-700 italic animate-fade-in-text">승혁 & 선경</p>
            <p class="font-sans text-sm text-rose-400 mt-2 tracking-widest animate-fade-in-text">Forever Together 💍</p>
          </div>
        </div>
      </div>

      <!-- Phase 1~4: 지도 애니메이션 -->
      <div *ngIf="currentPhase() !== 5" class="relative w-full max-w-lg h-[500px] z-10 px-4">
        <svg viewBox="0 0 200 300" class="w-full h-full drop-shadow-xl" preserveAspectRatio="xMidYMid meet">
          <path d="M 60,30 Q 90,15 120,30 Q 150,60 160,100 Q 175,160 150,230 Q 100,250 60,230 Q 40,200 50,160 Q 30,120 40,80 Q 50,50 60,30 Z" class="fill-white stroke-pink-200" stroke-width="2"/>
          <ellipse cx="50" cy="275" rx="12" ry="6" class="fill-white stroke-pink-200" stroke-width="2"/>
          <circle cx="185" cy="90" r="3" class="fill-white stroke-pink-200" stroke-width="2"/>
          <path d="M 75,85 Q 130,120 145,220" fill="none" class="stroke-pink-300" stroke-width="3" stroke-dasharray="4,4"/>
          <path d="M 145,220 L 165,230" fill="none" class="stroke-blue-300" stroke-width="2" stroke-dasharray="2,2"/>
          <g transform="translate(75, 85)">
            <circle cx="0" cy="0" r="5" class="fill-pink-400 stroke-white" stroke-width="2"/>
            <rect x="-20" y="-22" width="40" height="14" rx="4" class="fill-white/90"/>
            <text x="0" y="-12" font-size="8" font-weight="bold" text-anchor="middle" class="fill-pink-600 tracking-widest font-sans">SEOUL</text>
          </g>
          <g transform="translate(145, 220)">
            <circle cx="0" cy="0" r="5" class="fill-blue-400 stroke-white" stroke-width="2"/>
            <rect x="-20" y="10" width="40" height="14" rx="4" class="fill-white/90"/>
            <text x="0" y="20" font-size="8" font-weight="bold" text-anchor="middle" class="fill-blue-600 tracking-widest font-sans">BUSAN</text>
          </g>

          <ng-container *ngIf="started()">
            <g>
              <animateMotion dur="32s" repeatCount="indefinite"
                path="M 75,85 Q 130,120 145,220"
                keyPoints="0;1;1;0;0;1;1;0"
                keyTimes="0;0.25;0.26;0.5;0.51;0.75;0.76;1"
                calcMode="linear"/>
              <g>
                <animateTransform attributeName="transform" type="scale"
                  values="1 1;1 1;-1 1;-1 1;1 1;1 1;-1 1;-1 1;1 1"
                  keyTimes="0;0.24;0.26;0.49;0.51;0.74;0.76;0.99;1"
                  calcMode="discrete" dur="32s" repeatCount="indefinite"/>
                <text x="0" y="5" font-size="20" text-anchor="middle" dominant-baseline="central">🚂</text>
                <text x="0" y="-20" font-size="20" text-anchor="middle" dominant-baseline="central">
                  <animate attributeName="opacity" values="1;1;0;0;0;0;0;0;0" keyTimes="0;0.24;0.25;0.26;0.5;0.51;0.75;0.76;1" calcMode="discrete" dur="32s" repeatCount="indefinite"/>
                  👦🏻
                </text>
                <g>
                  <animate attributeName="opacity" values="0;0;1;1;1;0;0;0;0" keyTimes="0;0.24;0.25;0.26;0.49;0.5;0.75;0.76;1" calcMode="discrete" dur="32s" repeatCount="indefinite"/>
                  <text x="0" y="-20" font-size="20" text-anchor="middle" dominant-baseline="central">👦🏻</text>
                  <ellipse cx="-6" cy="-18" rx="3" ry="2" fill="#ff6b81" opacity="0.9"/>
                  <ellipse cx="6" cy="-18" rx="3" ry="2" fill="#ff6b81" opacity="0.9"/>
                </g>
                <g>
                  <animate attributeName="opacity" values="0;0;0;0;0;1;1;1;0;0" keyTimes="0;0.24;0.25;0.26;0.49;0.5;0.51;0.74;0.75;1" calcMode="discrete" dur="32s" repeatCount="indefinite"/>
                  <text x="0" y="-20" font-size="20" text-anchor="middle" dominant-baseline="central">👦🏻</text>
                  <text x="8" y="-15" font-size="14" text-anchor="middle" dominant-baseline="central">💐</text>
                </g>
                <text x="0" y="-20" font-size="20" text-anchor="middle" dominant-baseline="central">
                  <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;1;1" keyTimes="0;0.24;0.25;0.26;0.49;0.5;0.51;0.74;0.75;1" calcMode="discrete" dur="32s" repeatCount="indefinite"/>
                  👦🏻❤️👧🏻
                </text>
              </g>
            </g>
            <g>
              <animate attributeName="opacity" values="0;0;1;0;0;0;0;0;0" keyTimes="0;0.24;0.25;0.26;0.49;0.5;0.51;0.74;0.75" calcMode="discrete" dur="32s" repeatCount="indefinite"/>
              <animateMotion dur="32s" repeatCount="indefinite"
                path="M 145,220 L 165,230"
                keyPoints="0;0;0;1;0;0;0;0;0"
                keyTimes="0;0.24;0.25;0.255;0.26;0.5;0.51;0.74;0.75"
                calcMode="linear"/>
              <g>
                <text x="0" y="5" font-size="16" text-anchor="middle" dominant-baseline="central">🚙</text>
                <text x="0" y="-16" font-size="16" text-anchor="middle" dominant-baseline="central">👦🏻</text>
              </g>
            </g>
          </ng-container>
        </svg>
      </div>

      <div class="relative mt-8 font-sans text-sm md:text-base leading-relaxed font-medium text-rose-900 text-center px-6 bg-white/70 rounded-3xl shadow-sm backdrop-blur-md border border-white/50 z-10 max-w-lg mx-4 h-24 flex items-center justify-center overflow-hidden w-full">
        <span *ngIf="!started()" class="text-rose-300 text-sm">버튼을 눌러 러브스토리를 시작해보세요 💕</span>
        <ng-container *ngIf="started()">
          <span *ngIf="currentPhase() === 1" class="absolute w-full px-6">🚂 신랑 승혁이(서울오피스)는 직장동료 선경이(부산오피스)가 자꾸 눈에 밟혀 다짜고짜 부산으로 내려가요 💨</span>
          <span *ngIf="currentPhase() === 2" class="absolute w-full px-6">😳 시간을 보낸 승혁이는 확신을 가지고, 우선 전략을 수립하러 서울로 일단 돌아옵니다 🗺️</span>
          <span *ngIf="currentPhase() === 3" class="absolute w-full px-6">💐 몇주뒤 작정한 승혁이는 다시 부산으로 내려갑니다. 꽃다발을 들고. 두근두근 🥰</span>
          <span *ngIf="currentPhase() === 4" class="absolute w-full px-6">🎉 숨막히는 고백 끝에 선경이는 승혁이의 고백을 수락했고, 둘의 사랑은 이루어집니다! ❤️</span>
          <span *ngIf="currentPhase() === 5" class="absolute w-full px-6">💍 그렇게 별내의 예비 신랑&신부가 된 승혁이와 선경이가 여러분을 결혼식에 초대합니다 🎊</span>
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

    .animate-couple-pop {
      animation: couple-pop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    @keyframes couple-pop {
      0% { transform: scale(0); opacity: 0; }
      70% { transform: scale(1.2); opacity: 1; }
      100% { transform: scale(1); opacity: 1; }
    }

    .animate-fade-in-text {
      animation: fade-in-text 1s ease-in 0.5s both;
    }
    @keyframes fade-in-text {
      0% { opacity: 0; transform: translateY(10px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    .animate-heart-1 { animation: heart-fly 1.5s ease-out 0.3s infinite; }
    .animate-heart-2 { animation: heart-fly 1.5s ease-out 0.5s infinite; }
    .animate-heart-3 { animation: heart-fly 1.5s ease-out 0.7s infinite; }
    .animate-heart-4 { animation: heart-fly 1.5s ease-out 0.4s infinite; }
    .animate-heart-5 { animation: heart-fly 1.5s ease-out 0.6s infinite; }
    .animate-heart-6 { animation: heart-fly 1.5s ease-out 0.8s infinite; }

    @keyframes heart-fly {
      0% { transform: translateY(0) scale(1); opacity: 1; }
      50% { transform: translateY(-20px) scale(1.3); opacity: 0.8; }
      100% { transform: translateY(-40px) scale(0.8); opacity: 0; }
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
