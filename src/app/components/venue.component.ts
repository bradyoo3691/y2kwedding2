import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-venue',
  standalone: true,
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
          <p *ngIf="copied" class="text-rose-400 text-xs mt-2">✅ 주소가 복사되었습니다!</p>
        </div>

        <!-- 지도 앱 버튼 -->
        <div class="flex justify-center gap-4 mt-8 mb-16 flex-wrap">
          <a href="https://map.naver.com/v5/search/W스퀘어컨벤션" target="_blank"
            class="flex flex-col items-center gap-2 px-6 py-4 bg-green-500 text-white rounded-2xl shadow-md hover:bg-green-600 transition min-w-[90px]">
            <img src="https://play-lh.googleusercontent.com/T5x3LBKRB4GOUx4wCREhFBDFLh5Ye_s80jJdOFhOgxfnBxbyLJFxHVyqRVqAEuKKA" class="w-10 h-10 rounded-xl" alt="naver"/>
            <span class="text-xs font-bold">네이버지도</span>
          </a>
          <a href="tmap://search?name=W스퀘어컨벤션" target="_blank"
            class="flex flex-col items-center gap-2 px-6 py-4 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600 transition min-w-[90px]">
            <img src="https://play-lh.googleusercontent.com/1tFnEgZ6JsLQHx6LTDaJKGyCjkAFv_OHEYN71JO8pLPpWdBhIiAuHSwxA9hH5FXBSA" class="w-10 h-10 rounded-xl" alt="tmap"/>
            <span class="text-xs font-bold">T맵</span>
          </a>
          <a href="kakaomap://look?p=37.4005,127.1085" target="_blank"
            class="flex flex-col items-center gap-2 px-6 py-4 bg-yellow-400 text-stone-800 rounded-2xl shadow-md hover:bg-yellow-500 transition min-w-[90px]">
            <img src="https://play-lh.googleusercontent.com/7Xa7ZEYhCMrpCgDcEJsXqaHXBKqm0rLiuoBiGNfAUNJbwSmcN7x7NE6FGqBv8vBQ" class="w-10 h-10 rounded-xl" alt="kakao"/>
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
                (click)="copyAccount('우리은행 1002-050-717720 유승혁')"
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
                (click)="copyAccount('신한은행 110-438-886892 김선경')"
                class="w-full py-2 border border-stone-300 text-stone-600 text-sm rounded-full hover:bg-stone-50 transition">
                📋 계좌번호 복사
              </button>
            </div>
          </div>
          <p *ngIf="accountCopied" class="text-rose-400 text-xs mt-4">✅ 계좌번호가 복사되었습니다!</p>
        </div>

      </div>
    </section>
  `
})
export class VenueComponent {
  copied = false;
  accountCopied = false;

  copyAddress() {
    navigator.clipboard.writeText('경기 성남시 분당구 판교역로226번길 16 W스퀘어컨벤션 8층 채플홀').then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 3000);
    });
  }

  copyAccount(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.accountCopied = true;
      setTimeout(() => this.accountCopied = false, 3000);
    });
  }
}
