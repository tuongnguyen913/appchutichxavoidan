import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-report-success',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-gradient-to-b from-surface-container-low to-background min-h-screen flex flex-col antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <header class="sticky top-0 w-full z-40 bg-surface-container-lowest shadow-sm flex justify-between items-center px-4 h-16 shrink-0">
        <div class="flex items-center gap-3">
          <img alt="Ảnh đại diện người dân" class="w-10 h-10 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs0BdhqMDv5WONywuY0XuDkzDarosuyq6_-oX0NEK7IoRgt6l-Ldw4EvyEEYpo-eo7SaKHFIHIDY0VGUznBUIMncKnp3byZAsHY7RZ_7KWxSeB-ryymDRChfIK35AEMx21ayBUk_2Jj25jsOHtlCh3326u90-9oihN8Z7iqUXgooqqTtoEh-y2QFx32F5fg_R46dVVEoU9RUbNWNWVWeGfUZv0T8Ndvr5CoVkrQn2QrElc6u4BOMJeQGunO9CEsBdCzBg6ySG5kQA"/>
          <span class="font-h3 text-h3 font-bold text-on-surface tracking-tight">Chủ tịch xã với Dân</span>
        </div>
        <button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant active:opacity-80">
          <span class="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <main class="w-full max-w-md mx-auto px-container-margin py-8 flex flex-col items-center flex-1">
        <div class="relative w-24 h-24 mb-6 shrink-0">
          <div class="absolute inset-0 bg-secondary-container rounded-full opacity-20 scale-110"></div>
          <div class="absolute inset-0 bg-secondary-container rounded-full flex items-center justify-center shadow-sm">
            <span class="material-symbols-outlined text-on-secondary-container icon-fill" style="font-size: 48px;">
              check_circle
            </span>
          </div>
        </div>

        <div class="text-center mb-section-gap">
          <h1 class="font-h1 text-h1 text-on-background mb-1">Phản ánh đã được gửi!</h1>
          <p class="font-body-md text-body-md text-on-surface-variant mb-6">Cảm ơn bạn đã đóng góp xây dựng cộng đồng.</p>
          <div class="flex flex-col items-center gap-2">
            <h2 class="font-h2 text-h2 text-on-surface text-center">Đường liên thôn bị hỏng nặng</h2>
            <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-highest rounded-full border border-outline-variant">
              <span class="font-label-sm text-label-sm text-on-surface-variant">Mã số:</span>
              <span class="font-label-md text-label-md text-primary tracking-wide">PA-2025-00142</span>
            </div>
          </div>
        </div>

        <div class="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-card-padding shadow-sm mb-section-gap flex flex-col gap-4">
          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center shrink-0 mt-0.5">
              <span class="material-symbols-outlined text-on-surface-variant text-[18px]">construction</span>
            </div>
            <div class="flex-1">
              <p class="font-label-sm text-label-sm text-outline mb-0.5 uppercase tracking-wider">Lĩnh vực</p>
              <p class="font-body-md text-body-md text-on-surface font-medium">Hạ tầng</p>
            </div>
          </div>
          <div class="h-[1px] w-full bg-outline-variant/30"></div>

          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center shrink-0 mt-0.5">
              <span class="material-symbols-outlined text-on-surface-variant text-[18px]">timer</span>
            </div>
            <div class="flex-1">
              <p class="font-label-sm text-label-sm text-outline mb-0.5 uppercase tracking-wider">Thời gian dự kiến</p>
              <p class="font-body-md text-body-md text-on-surface font-medium">Trong vòng 48h</p>
            </div>
          </div>
          <div class="h-[1px] w-full bg-outline-variant/30"></div>

          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center shrink-0 mt-0.5">
              <span class="material-symbols-outlined text-on-surface-variant text-[18px]">account_balance</span>
            </div>
            <div class="flex-1">
              <p class="font-label-sm text-label-sm text-outline mb-0.5 uppercase tracking-wider">Cơ quan tiếp nhận</p>
              <p class="font-body-md text-body-md text-on-surface font-medium">UBND Phường 1</p>
            </div>
          </div>
        </div>

        <div class="w-full flex flex-col gap-3 mt-auto">
          <button [routerLink]="['/home']" class="w-full h-12 bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-sm">
            Về trang chủ
          </button>
          <button [routerLink]="['/reports']" class="w-full h-12 bg-transparent border-2 border-primary text-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-primary-fixed transition-colors">
            Theo dõi phản ánh
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </main>
    </div>
  `
})
export class ReportSuccessComponent {}
