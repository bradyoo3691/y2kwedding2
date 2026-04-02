import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-venue',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-24 md:py-32 px-6 bg-stone-100 text-stone-800">
      <div class="max-w-2xl mx-auto">
        <h2 class="font-serif text-4xl md:text-5xl italic text-center mb-20">The Venue</h2>

        <!-- WHEN -->
        <div class="text-center mb-12">
          <h3 class="font-sans text-sm tracking-[0.2em] uppercase text-stone-500 mb-4">When</h3>
          <p class="font-serif text-3xl">2026년 6월 6일</p>
          <p class="font-sans text-lg text-stone-600 mt-2">at 15:30 PM</p>
        </div>

        <!-- WHERE -->
        <div class="text-center mb-6">
          <h3 class="font-sans text-sm tracking-[0.2em] uppercase text-stone-500 mb-4">Where</h3>
          <p class="font-serif text-3xl mb-3">W스퀘어컨벤션</p>
          <p class="font-sans text-base text-stone-600">도로명: 경기 성남시 분당구 판교역로226번길 16</p>
          <p class="font-sans text-base text-stone-600 mt-1">지번: 경기 성남시 분당구 삼평동 674</p>
          <p class="font-sans text-base text-stone-600 mt-1">8층 채플홀</p>

          <!-- 주소 복사 버튼 -->
          <button
            (click)="copyAddress()"
            class="mt-4 inline-flex items-center gap-2 px-5 py-2 border border-stone-400 text-stone-600 text-sm rounded-full hover:bg-stone-200 transition">
            📋 주소 복사
          </button>
        </div>

        <!-- 지도 앱 버튼 -->
        <div class="flex justify-center gap-4 mt-8 mb-16">
          <a href="https://map.naver.com/v5/search/경기 성남시 분당구 삼평동 674" target="_blank"
            class="flex flex-col items-center gap-3 w-28 py-5 bg-green-500 text-white rounded-2xl shadow-md hover:bg-green-600 transition">
            <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
              <span class="text-green-500 font-black text-xl">N</span>
            </div>
            <span class="text-xs font-bold">네이버지도</span>
          </a>
          <a href="https://tmap.life/61Wh4" target="_blank"
            class="flex flex-col items-center gap-3 w-28 py-5 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600 transition">
            <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
              <span class="text-blue-500 font-black text-xl">T</span>
            </div>
            <span class="text-xs font-bold">T맵</span>
          </a>
          <a href="https://kko.to/X_dr-kIe1N" target="_blank"
            class="flex flex-col items-center gap-3 w-28 py-5 bg-yellow-400 text-stone-800 rounded-2xl shadow-md hover:bg-yellow-500 transition">
            <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
              <span class="text-yellow-500 font-black text-xl">K</span>
            </div>
            <span class="text-xs font-bold">카카오내비</span>
          </a>
        </div>

        <hr class="border-stone-300 mb-16"/>

        <!-- 감사 전하기 / 계좌번호 -->
        <div class="text-center">
          <h3 class="font-sans text-sm tracking-[0.2em] uppercase text-stone-500 mb-8">감사 전하기</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <!-- 신랑측 -->
            <div class="bg-white rounded-2xl p-6 shadow-sm">
              <p class="text-stone-500 text-xs tracking-widest uppercase mb-2">신랑측</p>
              <p class="font-serif text-lg mb-1">유승혁</p>
              <p class="text-stone-600 text-sm mb-4">우리은행 1002-050-717720</p>
              <button
                (click)="copyAccount('우리은행 1002-050-717720 유승혁', 'groom')"
                class="w-full py-2 border border-stone-300 text-stone-600 text-sm rounded-full hover:bg-stone-50 transition">
                📋 계좌번호 복사
              </button>
            </div>

            <!-- 신부측 -->
            <div class="bg-white rounded-2xl p-6 shadow-sm">
              <p class="text-stone-500 text-xs tracking-widest uppercase mb-2">신부측</p>
              <p class="font-serif text-lg mb-1">김선경</p>
              <p class="text-stone-600 text-sm mb-4">신한은행 110-438-886892</p>
              <button
                (click)="copyAccount('신한은행 110-438-886892 김선경', 'bride')"
                class="w-full py-2 border border-stone-300 text-stone-600 text-sm rounded-full hover:bg-stone-50 transition">
                📋 계좌번호 복사
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- 팝업 토스트 -->
      <div *ngIf="toastMessage"
        class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-stone-800 text-white text-sm px-6 py-3 rounded-full shadow-xl animate-toast">
        ✅ {{ toastMessage }}
      </div>

    </section>
  `,
  styles: [`
    .animate-toast {
      animation: toast-in 0.3s ease-out;
    }
    @keyframes toast-in {
      0% { opacity: 0; transform: translate(-50%, 20px); }
      100% { opacity: 1; transform: translate(-50%, 0); }
    }
  `]
})
export class VenueComponent {
  toastMessage = '';
  private toastTimer: any;

  showToast(message: string) {
    this.toastMessage = message;
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toastMessage = '';
    }, 3000);
  }

  copyAddress() {
    navigator.clipboard.writeText('경기 성남시 분당구 판교역로226번길 16 W스퀘어컨벤션 8층 채플홀').then(() => {
      this.showToast('주소가 복사되었어요!');
    });
  }

  copyAccount(text: string, who: 'groom' | 'bride') {
    navigator.clipboard.writeText(text).then(() => {
      if (who === 'groom') {
        this.showToast('신랑(유승혁)의 계좌번호가 복사되었어요!');
      } else {
        this.showToast('신부(김선경)의 계좌번호가 복사되었어요!');
      }
    });
  }
}
