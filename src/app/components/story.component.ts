import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-story',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative w-full min-h-[80vh] bg-gradient-to-b from-pink-100 via-rose-50 to-pink-100 overflow-hidden flex flex-col items-center justify-center py-20">
      <!-- Cute floating background elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-10 left-10 text-4xl opacity-60 animate-float-slow">☁️</div>
        <div class="absolute top-20 right-20 text-5xl opacity-60 animate-float">☁️</div>
        <div class="absolute bottom-40 left-1/4 text-3xl opacity-70 animate-float-fast">💖</div>
        <div class="absolute top-1/3 right-1/4 text-4xl opacity-60 animate-float-slow">💕</div>
        <div class="absolute bottom-20 right-10 text-3xl opacity-50 animate-float">🌸</div>
        <div class="absolute top-1/2 left-10 text-2xl opacity-50 animate-float-fast">✨</div>
      </div>

      <h2 class="relative font-serif text-4xl md:text-5xl italic text-rose-800 drop-shadow-sm z-10 mb-8">Our Story</h2>
      
      <div class="relative w-full max-w-lg h-[500px] z-10 px-4">
        <svg viewBox="0 0 200 300" class="w-full h-full drop-shadow-xl" preserveAspectRatio="xMidYMid meet">
          <!-- Map of South Korea -->
          <path d="M 60,30 Q 90,15 120,30 Q 150,60 160,100 Q 175,160 150,230 Q 100,250 60,230 Q 40,200 50,160 Q 30,120 40,80 Q 50,50 60,30 Z" class="fill-white stroke-pink-200" stroke-width="2"/>
          <ellipse cx="50" cy="275" rx="12" ry="6" class="fill-white stroke-pink-200" stroke-width="2"/>
          <circle cx="185" cy="90" r="3" class="fill-white stroke-pink-200" stroke-width="2"/>

          <!-- Train Track -->
          <path id="train-route" d="M 75,85 Q 130,120 145,220" fill="none" class="stroke-pink-300" stroke-width="3" stroke-dasharray="4,4"/>
          
          <!-- Car Route -->
          <path id="car-route" d="M 145,220 L 165,230" fill="none" class="stroke-blue-300" stroke-width="2" stroke-dasharray="2,2"/>

          <!-- Seoul Marker -->
          <g transform="translate(75, 85)">
            <circle cx="0" cy="0" r="5" class="fill-pink-400 stroke-white" stroke-width="2"/>
            <rect x="-20" y="-22" width="40" height="14" rx="4" class="fill-white/90"/>
            <text x="0" y="-12" font-size="8" font-weight="bold" text-anchor="middle" class="fill-pink-600 tracking-widest font-sans">SEOUL</text>
          </g>
          
          <!-- Busan Marker -->
          <g transform="translate(145, 220)">
            <circle cx="0" cy="0" r="5" class="fill-blue-400 stroke-white" stroke-width="2"/>
            <rect x="-20" y="10" width="40" height="14" rx="4" class="fill-white/90"/>
            <text x="0" y="20" font-size="8" font-weight="bold" text-anchor="middle" class="fill-blue-600 tracking-widest font-sans">BUSAN</text>
          </g>

          <!-- Train Group -->
          <g>
            <animate attributeName="opacity" values="1; 0; 1; 0; 1; 1" keyTimes="0; 0.1666; 0.25; 0.5833; 0.6666; 1" calcMode="discrete" dur="24s" repeatCount="indefinite"/>
            <animateMotion dur="24s" repeatCount="indefinite" path="M 75,85 Q 130,120 145,220" keyPoints="0; 1; 1; 0; 1; 1; 0; 0" keyTimes="0; 0.1666; 0.25; 0.4166; 0.5833; 0.6666; 0.8333; 1" calcMode="linear" />
            
            <g>
              <animateTransform attributeName="transform" type="scale" values="1 1; -1 1; 1 1; -1 1; 1 1; 1 1" keyTimes="0; 0.25; 0.4166; 0.6666; 0.8333; 1" calcMode="discrete" dur="24s" repeatCount="indefinite" />
              
              <text x="0" y="5" font-size="20" text-anchor="middle" dominant-baseline="central">🚂</text>
              
              <!-- Boy alone (0 - 0.1666) -->
              <text x="0" y="-20" font-size="20" text-anchor="middle" dominant-baseline="central">
                <animate attributeName="opacity" values="1; 0; 0" keyTimes="0; 0.1666; 1" calcMode="discrete" dur="24s" repeatCount="indefinite"/>
                👦🏻
              </text>
              
              <!-- Boy blushing (0.25 - 0.4166) -->
              <g>
                <animate attributeName="opacity" values="0; 1; 0; 0" keyTimes="0; 0.25; 0.4166; 1" calcMode="discrete" dur="24s" repeatCount="indefinite"/>
                <text x="0" y="-20" font-size="20" text-anchor="middle" dominant-baseline="central">👦🏻</text>
                <ellipse cx="-6" cy="-18" rx="3" ry="2" fill="#ff6b81" opacity="0.9"/>
                <ellipse cx="6" cy="-18" rx="3" ry="2" fill="#ff6b81" opacity="0.9"/>
              </g>

              <!-- Boy with bouquet (0.4166 - 0.5833) -->
              <g>
                <animate attributeName="opacity" values="0; 1; 0; 0" keyTimes="0; 0.4166; 0.5833; 1" calcMode="discrete" dur="24s" repeatCount="indefinite"/>
                <text x="0" y="-20" font-size="20" text-anchor="middle" dominant-baseline="central">👦🏻</text>
                <text x="8" y="-15" font-size="14" text-anchor="middle" dominant-baseline="central">💐</text>
              </g>
              
              <!-- Couple returning to Seoul (0.6666 - 1) -->
              <text x="0" y="-20" font-size="20" text-anchor="middle" dominant-baseline="central">
                <animate attributeName="opacity" values="0; 1; 1" keyTimes="0; 0.6666; 1" calcMode="discrete" dur="24s" repeatCount="indefinite"/>
                👦🏻❤️👧🏻
              </text>
            </g>
          </g>

          <!-- Car Group -->
          <g>
            <animate attributeName="opacity" values="0; 1; 0; 1; 0; 0" keyTimes="0; 0.1666; 0.25; 0.5833; 0.6666; 1" calcMode="discrete" dur="24s" repeatCount="indefinite"/>
            <animateMotion dur="24s" repeatCount="indefinite" path="M 145,220 L 165,230" keyPoints="0; 0; 1; 0; 0; 0; 1; 0; 0" keyTimes="0; 0.1666; 0.2083; 0.25; 0.4166; 0.5833; 0.625; 0.6666; 1" calcMode="linear" />
            
            <g>
              <animateTransform attributeName="transform" type="scale" values="1 1; -1 1; 1 1; -1 1; 1 1; 1 1" keyTimes="0; 0.2083; 0.25; 0.625; 0.6666; 1" calcMode="discrete" dur="24s" repeatCount="indefinite" />
              
              <text x="0" y="5" font-size="16" text-anchor="middle" dominant-baseline="central">🚙</text>
              
              <!-- Boy alone (0.1666 - 0.25) -->
              <text x="0" y="-16" font-size="16" text-anchor="middle" dominant-baseline="central">
                <animate attributeName="opacity" values="0; 1; 0; 0" keyTimes="0; 0.1666; 0.25; 1" calcMode="discrete" dur="24s" repeatCount="indefinite"/>
                👦🏻
              </text>
              
              <!-- Boy with bouquet (0.5833 - 0.6666) -->
              <g>
                <animate attributeName="opacity" values="0; 1; 0; 0" keyTimes="0; 0.5833; 0.6666; 1" calcMode="discrete" dur="24s" repeatCount="indefinite"/>
                <text x="0" y="-16" font-size="16" text-anchor="middle" dominant-baseline="central">👦🏻</text>
                <text x="6" y="-12" font-size="12" text-anchor="middle" dominant-baseline="central">💐</text>
              </g>
            </g>
          </g>
        </svg>
      </div>
      
      <div class="relative mt-8 font-sans text-sm md:text-base leading-relaxed font-medium text-rose-900 text-center px-6 bg-white/70 rounded-3xl shadow-sm backdrop-blur-md border border-white/50 z-10 max-w-lg mx-4 h-24 flex items-center justify-center overflow-hidden w-full">
        <span class="absolute w-full px-6 opacity-0 animate-story-text-1">🚂 신랑 승혁이(서울사무실 근무)는 직장동료 선경이가 자꾸 눈에 밟혀 부산으로 기차를 타고 다짜고짜 내려가요 💨</span>
        <span class="absolute w-full px-6 opacity-0 animate-story-text-2">😳 승혁이는 바로 확신을 가지고, 전략을 짜러 서울로 일단 올라옵니다 🗺️</span>
        <span class="absolute w-full px-6 opacity-0 animate-story-text-3">💐 승혁이는 작정하고 꽃다발을 들고 부산에 있는 선경이(부산사무실 근무)를 향해 갑니다 두근두근 🥰</span>
        <span class="absolute w-full px-6 opacity-0 animate-story-text-4">🎉 선경이는 승혁이의 고백을 수락했고, 둘의 사랑은 이루어집니다! ❤️</span>
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

    .animate-story-text-1 { animation: story-text-1 24s infinite; }
    .animate-story-text-2 { animation: story-text-2 24s infinite; }
    .animate-story-text-3 { animation: story-text-3 24s infinite; }
    .animate-story-text-4 { animation: story-text-4 24s infinite; }

    @keyframes story-text-1 {
      0%, 23% { opacity: 1; transform: translateY(0); }
      25%, 100% { opacity: 0; transform: translateY(10px); }
    }
    @keyframes story-text-2 {
      0%, 23% { opacity: 0; transform: translateY(-10px); }
      25%, 40% { opacity: 1; transform: translateY(0); }
      42%, 100% { opacity: 0; transform: translateY(10px); }
    }
    @keyframes story-text-3 {
      0%, 40% { opacity: 0; transform: translateY(-10px); }
      42%, 65% { opacity: 1; transform: translateY(0); }
      67%, 100% { opacity: 0; transform: translateY(10px); }
    }
    @keyframes story-text-4 {
      0%, 65% { opacity: 0; transform: translateY(-10px); }
      67%, 98% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(10px); }
    }
  `]
})
export class StoryComponent {}
