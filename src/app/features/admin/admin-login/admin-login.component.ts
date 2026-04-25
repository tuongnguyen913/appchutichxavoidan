import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col md:items-center md:justify-center md:bg-surface-container">
      <div class="w-full max-w-md mx-auto flex flex-col min-h-screen md:min-h-0 md:bg-surface-container-lowest md:shadow-2xl md:rounded-2xl overflow-hidden relative">
        <div class="bg-primary pt-6 pb-20 px-6 relative z-0 flex flex-col items-center text-center">
          <div class="w-full flex justify-start mb-6 relative z-10">
            <a [routerLink]="['/']" class="flex items-center gap-1 text-on-primary/80 hover:text-on-primary font-label-md text-label-md transition-colors cursor-pointer">
              <span class="material-symbols-outlined text-[18px]">arrow_back</span>
              Về trang người dân
            </a>
          </div>
          <div class="h-16 w-16 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-lg mb-4">
            <span class="material-symbols-outlined text-primary text-[32px] icon-fill">local_police</span>
          </div>
          <h1 class="font-h2 text-h2 text-on-primary mb-3">Chủ tịch xã với Dân</h1>
          <div class="bg-primary-fixed-dim text-on-primary-fixed-variant font-label-sm text-label-sm px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-2 shadow-sm border border-primary-fixed">
            <span class="material-symbols-outlined text-[14px]">account_balance</span>
            Cổng Chủ tịch & Cán bộ
          </div>
          <p class="font-body-sm text-body-sm text-on-primary/90 max-w-[280px]">
            Dành riêng cho Chủ tịch và cán bộ được phân quyền
          </p>
          <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at 50% 0%, #ffffff 1px, transparent 1px); background-size: 24px 24px;"></div>
        </div>

        <div class="bg-surface-container-lowest rounded-t-3xl md:rounded-none px-6 pt-8 pb-10 -mt-8 relative z-10 flex-grow flex flex-col shadow-[0_-8px_24px_rgba(0,0,0,0.1)] md:shadow-none">
          <form class="flex flex-col gap-5">
            <div>
              <label class="block font-label-md text-label-md text-on-surface mb-1.5">Tên đăng nhập / Mã cán bộ</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="material-symbols-outlined text-outline">badge</span>
                </div>
                <input class="block w-full pl-10 pr-3 py-3 border border-outline-variant rounded-lg bg-surface focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-body-md text-on-surface placeholder-outline transition-shadow" placeholder="Nhập mã cán bộ..." type="text">
              </div>
            </div>
            <div>
              <label class="block font-label-md text-label-md text-on-surface mb-1.5">Mật khẩu</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="material-symbols-outlined text-outline">lock</span>
                </div>
                <input class="block w-full pl-10 pr-10 py-3 border border-outline-variant rounded-lg bg-surface focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-body-md text-on-surface placeholder-outline transition-shadow" placeholder="••••••••" type="password">
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                  <span class="material-symbols-outlined text-outline hover:text-on-surface">visibility</span>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between mt-1 mb-2">
              <div class="flex items-center">
                <input class="h-4 w-4 text-primary focus:ring-primary border-outline-variant rounded bg-surface" type="checkbox">
                <label class="ml-2 block font-body-sm text-body-sm text-on-surface-variant">Ghi nhớ đăng nhập</label>
              </div>
              <div class="font-label-sm text-label-sm text-primary hover:text-primary-container cursor-pointer transition-colors">
                Quên mật khẩu?
              </div>
            </div>
            <button [routerLink]="['/admin/dashboard']" class="w-full bg-primary text-on-primary font-label-md text-label-md py-3.5 rounded-xl shadow-sm hover:bg-primary-container active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="button">
              Đăng nhập hệ thống
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <div class="relative flex items-center py-2">
              <div class="flex-grow border-t border-outline-variant"></div>
              <span class="flex-shrink-0 mx-4 font-body-sm text-body-sm text-outline">hoặc</span>
              <div class="flex-grow border-t border-outline-variant"></div>
            </div>
            <button class="w-full border border-secondary text-secondary bg-surface-container-lowest font-label-md text-label-md py-3.5 rounded-xl hover:bg-surface-container-low active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="button">
              <span class="material-symbols-outlined text-[20px]">fingerprint</span>
              Đăng nhập VNeID
            </button>
          </form>
        </div>
      </div>
    </div>
  `
})
export class AdminLoginComponent {}
