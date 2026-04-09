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
          <p class="font-sans text-base font-bold text-rose-500 mt-2 tracking-wide">📍 8층 채플홀</p>
        </div>

<!-- 지도 앱 버튼 -->
<div class="flex justify-center gap-4 mt-8 mb-16">
  <a href="https://map.naver.com/v5/search/경기 성남시 분당구 삼평동 674" target="_blank"
    class="flex flex-col items-center gap-3 w-28 py-5 bg-green-500 text-white rounded-2xl shadow-md hover:bg-green-600 transition">
    <div class="w-12 h-12 rounded-xl overflow-hidden">
      <img src="/naver.jpg" class="w-full h-full object-cover" alt="naver"/>
    </div>
    <span class="text-xs font-bold">네이버지도</span>
  </a>
  <a href="https://tmap.life/babbf403" target="_blank"
    class="flex flex-col items-center gap-3 w-28 py-5 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600 transition">
    <div class="w-12 h-12 rounded-xl overflow-hidden">
      <img src="/tmap.jpg" class="w-full h-full object-cover" alt="tmap"/>
    </div>
    <span class="text-xs font-bold">T맵</span>
  </a>
  <a href="https://kko.to/X_dr-kIe1N" target="_blank"
    class="flex flex-col items-center gap-3 w-28 py-5 bg-yellow-400 text-stone-800 rounded-2xl shadow-md hover:bg-yellow-500 transition">
    <div class="w-12 h-12 rounded-xl overflow-hidden">
      <img src="/kakao.jpg" class="w-full h-full object-cover" alt="kakao"/>
    </div>
    <span class="text-xs font-bold">카카오맵</span>
  </a>
</div>

        <hr class="border-stone-300 mb-12"/>

        <!-- 주차 안내 -->
        <div class="mb-12">
          <h3 class="font-sans text-sm tracking-[0.2em] uppercase text-stone-500 mb-6 text-center">🅿️ 주차 안내</h3>

          <!-- 웨딩홀 주차장 -->
          <div class="bg-white rounded-2xl p-6 shadow-sm mb-4">
            <p class="font-serif text-lg font-semibold mb-2">웨딩홀 주차장 <span class="text-sm font-sans text-stone-500">(300대 수용)</span></p>
            <p class="text-xs text-amber-600 mb-1">⚠️ 앞뒤 결혼식 주차차량으로 인해 살짝 혼잡할 수 있어요!</p>
            <p class="text-xs text-stone-500 mb-1">🕐 주차등록시 2시간 무료 (초과시 15분당 1,000원)</p>
            <p class="text-xs text-stone-400 mb-4">경기 성남시 분당구 삼평동 674</p>
            <button
              (click)="copyParkingAddress('wedding')"
              class="w-full py-2 border border-stone-300 text-stone-600 text-sm rounded-full hover:bg-stone-50 transition">
              📋 웨딩홀 주소 복사
            </button>
          </div>

          <!-- 인근 주차장 -->
          <div class="bg-white rounded-2xl p-6 shadow-sm">
            <p class="font-serif text-lg font-semibold mb-2">인근 주차장 <span class="text-sm font-sans text-stone-500">(1,000대 수용)</span></p>
            <p class="text-xs text-stone-600 mb-1">📍 웨딩홀 바로 맞은편 스타벅스 판교HIPEX점 건물</p>
            <p class="text-xs text-stone-600 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;'삼환하이펙스B동'</p>
            <p class="text-xs text-green-600 mb-1">🆓 주차등록필요없음 & 종일 무료</p>
            <p class="text-xs text-stone-400 mb-4">경기 성남시 분당구 삼평동 679</p>
            <button
              (click)="copyParkingAddress('nearby')"
              class="w-full py-2 border border-stone-300 text-stone-600 text-sm rounded-full hover:bg-stone-50 transition">
              📋 종일무료주차장 주소 복사
            </button>
          </div>
        </div>

        <hr class="border-stone-300 mb-12"/>

        <!-- 대전 셔틀버스 -->
<div class="mb-12">
  <h3 class="font-sans text-sm tracking-[0.2em] uppercase text-stone-500 mb-6 text-center">🚌 대전에서 오는 셔틀버스</h3>
  <div class="bg-white rounded-2xl p-6 shadow-sm">
    <p class="text-sm text-stone-700 font-semibold mb-3"> 대전 ↔ 판교웨딩홀 셔틀버스가 있습니다!</p>

    <div class="space-y-4">
      <div class="flex items-start gap-3">
        <span class="text-lg">📍</span>
        <div>
          <p class="text-sm font-semibold text-stone-700">탑승 위치</p>
          <p class="text-sm text-stone-600">대전 서구 용문동 256-50, 선창교회 주차장</p>
          <p class="text-xs text-stone-400 mt-1">용문역 1번 출구에서 나오셔서 200미터 직진</p>
        </div>
      </div>

      <div class="flex items-start gap-3">
        <span class="text-lg">🕧</span>
        <div>
          <p class="text-sm font-semibold text-stone-700">대전 → 판교</p>
          <p class="text-sm text-stone-600">6월 6일 12시 30분 출발</p>
          <p class="text-xs text-stone-400 mt-1">* 휴게소 1회 정차</p>
        </div>
      </div>

      <div class="flex items-start gap-3">
        <span class="text-lg">🕠</span>
        <div>
          <p class="text-sm font-semibold text-stone-700">판교 → 대전</p>
          <p class="text-sm text-stone-600">6월 6일 17시 30분 출발</p>
        </div>
      </div>
    </div>
  </div>
</div>

<hr class="border-stone-300 mb-12"/>
        
        <!-- 대중교통 -->
        <div class="mb-12">
          <h3 class="font-sans text-sm tracking-[0.2em] uppercase text-stone-500 mb-6 text-center">🚇 대중교통</h3>
          <div class="bg-white rounded-2xl p-6 shadow-sm space-y-3">
            <div class="flex items-start gap-3">
              <span class="text-lg">🚇</span>
              <div>
                <p class="text-sm font-semibold text-stone-700">지하철</p>
                <p class="text-sm text-stone-600">신분당선 판교역에서 도보 10분</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-lg">🚌</span>
              <div>
                <p class="text-sm font-semibold text-stone-700">웨딩홀 셔틀버스</p>
                <p class="text-sm text-stone-600">판교역 1번출구 택시승강장에서 탑승</p>
              </div>
            </div>
          </div>
        </div>

        <hr class="border-stone-300 mb-12"/>

        <!-- ATM -->
        <div class="mb-12">
          <h3 class="font-sans text-sm tracking-[0.2em] uppercase text-stone-500 mb-6 text-center">🏧 ATM</h3>
          <div class="bg-white rounded-2xl p-6 shadow-sm text-center">
            <p class="text-sm text-stone-600">본 웨딩홀 L층에 마련되어 있습니다.</p>
          </div>
        </div>

        <hr class="border-stone-300 mb-12"/>

        <!-- 감사 전하기 / 계좌번호 -->
<div class="text-center">
  <h3 class="font-sans text-sm tracking-[0.2em] uppercase text-stone-500 mb-8">마음 전하기</h3>
  <div class="flex flex-col gap-6">

    <!-- 신랑측 박스 -->
    <div class="bg-white rounded-2xl p-6 shadow-sm text-left">
      <p class="text-stone-500 text-xs tracking-widest uppercase mb-4 text-center">신랑측</p>

      <!-- 신랑 -->
      <div class="mb-4 pb-4 border-b border-stone-100">
        <p class="text-xs text-stone-400 mb-1">신랑</p>
        <p class="font-serif text-base mb-1">유승혁</p>
        <p class="text-stone-600 text-sm mb-2">우리은행 1002-050-717720</p>
        <button (click)="copyAccount('groom')"
          class="w-full py-2 border border-stone-300 text-stone-600 text-sm rounded-full hover:bg-stone-50 transition">
          📋 계좌번호 복사
        </button>
      </div>

      <!-- 혼주(부) -->
      <div class="mb-4 pb-4 border-b border-stone-100">
        <p class="text-xs text-stone-400 mb-1">혼주(부)</p>
        <p class="font-serif text-base mb-1">유인형</p>
        <p class="text-stone-400 text-sm mb-2">추후 삽입 예정</p>
      </div>

      <!-- 혼주(모) -->
      <div>
        <p class="text-xs text-stone-400 mb-1">혼주(모)</p>
        <p class="font-serif text-base mb-1">장문자</p>
        <p class="text-stone-600 text-sm mb-2">우리은행 797-099725-02-001</p>
        <button (click)="copyAccount('groomMom')"
          class="w-full py-2 border border-stone-300 text-stone-600 text-sm rounded-full hover:bg-stone-50 transition">
          📋 계좌번호 복사
        </button>
      </div>
    </div>

    <!-- 신부측 박스 -->
    <div class="bg-white rounded-2xl p-6 shadow-sm text-left">
      <p class="text-stone-500 text-xs tracking-widest uppercase mb-4 text-center">신부측</p>

      <!-- 신부 -->
      <div class="mb-4 pb-4 border-b border-stone-100">
        <p class="text-xs text-stone-400 mb-1">신부</p>
        <p class="font-serif text-base mb-1">김선경</p>
        <p class="text-stone-600 text-sm mb-2">신한은행 110-438-886892</p>
        <button (click)="copyAccount('bride')"
          class="w-full py-2 border border-stone-300 text-stone-600 text-sm rounded-full hover:bg-stone-50 transition">
          📋 계좌번호 복사
        </button>
      </div>

      <!-- 혼주(부) -->
      <div class="mb-4 pb-4 border-b border-stone-100">
        <p class="text-xs text-stone-400 mb-1">혼주(부)</p>
        <p class="font-serif text-base mb-1">조관희</p>
        <p class="text-stone-600 text-sm mb-2">하나은행 634-910709-64007</p>
        <button (click)="copyAccount('brideDad')"
          class="w-full py-2 border border-stone-300 text-stone-600 text-sm rounded-full hover:bg-stone-50 transition">
          📋 계좌번호 복사
        </button>
      </div>

      <!-- 혼주(모) -->
      <div>
        <p class="text-xs text-stone-400 mb-1">혼주(모)</p>
        <p class="font-serif text-base mb-1">이민자</p>
        <p class="text-stone-600 text-sm mb-2">하나은행 636-910172-79607</p>
        <button (click)="copyAccount('brideMom')"
          class="w-full py-2 border border-stone-300 text-stone-600 text-sm rounded-full hover:bg-stone-50 transition">
          📋 계좌번호 복사
        </button>
      </div>
    </div>
</div>

      </div>

      <!-- 팝업 토스트 -->
      <div *ngIf="toastMessage"
        class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-stone-800 text-white text-sm px-6 py-3 rounded-full shadow-xl animate-toast whitespace-nowrap">
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

  copyParkingAddress(type: 'wedding' | 'nearby') {
    const address = type === 'wedding' ? '성남시 분당구 삼평동 674' : '성남시 분당구 삼평동 679';
    const label = type === 'wedding' ? '웨딩홀 주소가 복사되었어요!' : '종일무료주차장 주소가 복사되었어요!';
    navigator.clipboard.writeText(address).then(() => {
      this.showToast(label);
    });
  }

copyAccount(who: 'groom' | 'bride' | 'groomMom' | 'brideDad' | 'brideMom') {
  const map: Record<string, [string, string]> = {
    groom:    ['1002-050-717720',  '신랑(유승혁)의 계좌번호가 복사되었어요!'],
    bride:    ['110-438-886892',   '신부(김선경)의 계좌번호가 복사되었어요!'],
    groomMom: ['79709972502001',   '혼주(장문자)의 계좌번호가 복사되었어요!'],
    brideDad: ['63491070964007',   '혼주(조관희)의 계좌번호가 복사되었어요!'],
    brideMom: ['63691017279607',   '혼주(이민자)의 계좌번호가 복사되었어요!'],
  };
  const [number, label] = map[who];
  navigator.clipboard.writeText(number).then(() => {
    this.showToast(label);
  });
}
