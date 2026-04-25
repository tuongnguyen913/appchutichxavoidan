import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="w-full h-[100dvh] relative flex flex-col justify-between overflow-hidden sm:rounded-[40px] sm:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] bg-surface-container-lowest max-w-[414px] mx-auto">
      <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div class="absolute top-[-10%] left-[-20%] w-[140%] h-[60%] bg-gradient-to-b from-surface-container to-transparent opacity-60 rounded-b-full blur-3xl"></div>
      </div>
      <div class="absolute inset-0 z-0 opacity-10 mix-blend-multiply" style="background-image: radial-gradient(#c3c5d7 1px, transparent 1px); background-size: 24px 24px;"></div>
      
      <div class="relative z-10 flex-1 flex flex-col items-center justify-center px-8 mt-12">
        <div class="relative mb-10 flex items-center justify-center">
          <div class="absolute inset-0 bg-primary-container opacity-20 rounded-[2.5rem] blur-2xl transform scale-110"></div>
          <div class="relative bg-surface-container-lowest/80 backdrop-blur-md w-32 h-32 rounded-[2rem] shadow-[0_8px_32px_rgba(26,86,219,0.12)] border border-surface-container flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <div class="relative">
              <span class="material-symbols-outlined text-primary-container icon-fill" style="font-size: 56px;">domain</span>
              <div class="absolute -bottom-1 -right-2 bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center border-4 border-surface-container-lowest shadow-sm">
                <span class="material-symbols-outlined icon-fill" style="font-size: 20px;">maps_ugc</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center space-y-4 w-full">
          <h1 class="font-h1 text-h1 text-on-surface tracking-tight leading-tight">
            Chủ tịch xã<br/>
            <span class="text-primary-container">với Dân</span>
          </h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-[280px] mx-auto mt-4">
            Chính quyền gần dân –<br/>
            Phục vụ 24/7
          </p>
        </div>
      </div>
      <div class="relative z-10 px-6 pb-12 pt-8 flex flex-col items-center bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest to-transparent">
        <div aria-label="Onboarding Progress" class="flex gap-2 mb-10">
          <div class="w-8 h-1.5 rounded-full bg-primary-container shadow-sm"></div>
          <div class="w-2 h-1.5 rounded-full bg-surface-variant"></div>
          <div class="w-2 h-1.5 rounded-full bg-surface-variant"></div>
        </div>
        <button [routerLink]="['/login']" class="w-full bg-primary-container text-white font-label-md text-label-md py-[18px] rounded-xl shadow-[0_4px_12px_rgba(26,86,219,0.25)] flex items-center justify-center gap-2 hover:bg-primary transition-colors active:scale-[0.98]">
          <span>Bắt đầu</span>
          <span class="material-symbols-outlined" style="font-size: 20px;">arrow_forward</span>
        </button>
      </div>
    </main>
  `
})
export class OnboardingComponent {}
