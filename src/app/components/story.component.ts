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
              
              <!-- Boy alone -->
              <text x="0" y="-15" font-size="12" text-anchor="middle" dominant-baseline="central">
                <animate attributeName="opacity" values="1; 0; 0" keyTimes="0; 0.1666; 1" calcMode="discrete" dur="24s" repeatCount="indefinite"/>
                👨🏻
              </text>
              
              <!-- Boy blushing -->
              <text x="0" y="-15" font-size="12" text-anchor="middle" dominant-baseline="central">
                <animate attributeName="opacity" values="0; 1; 0; 0" keyTimes="0; 0.25; 0.4166; 1" calcMode="discrete" dur="24s" repeatCount="indefinite"/>
                👨🏻😳
              </text>

              <!-- Boy with bouquet -->
              <text x="0" y="-15" font-size="12" text-anchor="middle" dominant-baseline="central">
                <animate attributeName="opacity" values="0; 1; 0; 0" keyTimes="0; 0.4166; 0.5833; 1" calcMode="discrete" dur="24s" repeatCount="indefinite"/>
                👨🏻💐
              </text>
              
              <!-- Couple returning to Seoul -->
              <text x="0" y="-15" font-size="12" text-anchor="middle" dominant-baseline="central">
                <animate attributeName="opacity" values="0; 1; 1" keyTimes="0; 0.6666; 1" calcMode="discrete" dur="24s" repeatCount="indefinite"/>
                👨🏻❤️👩🏻
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
              
              <!-- Boy alone -->
              <text x="0" y="-12" font-size="10" text-anchor="middle" dominant-baseline="central">
                <animate attributeName="opacity" values="0; 1; 0; 0" keyTimes="0; 0.1666; 0.25; 1" calcMode="discrete" dur="24s" repeatCount="indefinite"/>
                👨🏻
              </text>
              
              <!-- Boy with bouquet -->
              <text x="0" y="-12" font-size="10" text-anchor="middle" dominant-baseline="central">
                <animate attributeName="opacity" values="0; 1; 0; 0" keyTimes="0; 0.5833; 0.6666; 1" calcMode="discrete" dur="24s" repeatCount="indefinite"/>
                👨🏻💐
              </text>
            </g>
          </g>
        </svg>
      </div>
      
      <div class="relative mt-8 font-sans text-sm md:text-base leading-relaxed font-medium text-rose-900 text-center px-6 bg-white/70 py-6 rounded-3xl shadow-sm backdrop-blur-md border border-white/50 z-10 max-w-lg mx-4">
        <span class="block mb-2">남자가 서울에서 기차를 타고 부산을 가서, 쏘카를 타고 여자를 만났어요 🚙</span>
        <span class="block mb-2">볼이 발그레 빨개진 남자는 서울로 혼자 기차를 타고 올라왔죠 😳</span>
        <span class="block mb-2">그리고 남자는 꽃다발을 들고 다시 기차를 타고 부산을 내려가서 쏘카를 탔어요 💐</span>
        <span class="block">마침내 여자와 사랑에 빠져 함께 서울로 올라옵니다 ❤️</span>
      </div>
    </section>
  `,
  styles: [`
    /* Background animations */
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-float-slow { animation: float 8s ease-in-out infinite; }
    .animate-float-fast { animation: float 4s ease-in-out infinite; }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
  `]
})
export class StoryComponent {}
