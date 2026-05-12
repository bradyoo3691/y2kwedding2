import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-parents',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-12 bg-white flex flex-col items-center">

      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-px bg-stone-300"></div>
        <span class="text-xs tracking-[0.25em] text-stone-400 font-sans uppercase">The Wedding</span>
        <div class="w-10 h-px bg-stone-300"></div>
      </div>

      <div class="relative border border-stone-200 rounded-xl px-10 py-8 text-center" style="min-width:280px; max-width:320px;">

        <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-stone-300 text-xl">✿</span>

        <!-- 신랑 -->
        <div class="mb-6">
          <p class="font-sans text-xs tracking-[0.2em] text-stone-400 mb-2 uppercase">신 랑</p>
          <div class="flex items-center justify-center gap-2">
            <div class="text-right leading-relaxed">
              <p class="text-sm font-semibold text-stone-600" style="font-family:'Noto Serif KR',serif;">유인형 · 장문자의 장남</p>
              <p class="text-2xl font-bold text-stone-800 tracking-widest" style="font-family:'Noto Serif KR',serif;">승혁</p>
            </div>
            <span class="text-3xl">🤵</span>
          </div>
        </div>

        <div class="w-10 h-px bg-stone-200 mx-auto mb-6"></div>

        <!-- 신부 -->
        <div>
          <p class="font-sans text-xs tracking-[0.2em] text-stone-400 mb-2 uppercase">신 부</p>
          <div class="flex items-center justify-center gap-2">
            <span class="text-3xl">👰</span>
            <div class="text-left leading-relaxed">
              <p class="text-sm font-semibold text-stone-600" style="font-family:'Noto Serif KR',serif;">조관희 · 이민자의 장녀</p>
              <p class="text-2xl font-bold text-stone-800 tracking-widest" style="font-family:'Noto Serif KR',serif;">선경</p>
            </div>
          </div>
        </div>

        <span class="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-3 text-stone-300 text-xl">✿</span>

      </div>

    </section>
  `
})
export class ParentsComponent {}
