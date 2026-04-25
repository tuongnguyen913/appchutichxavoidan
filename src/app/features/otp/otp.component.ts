import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col min-h-screen bg-surface-container-lowest">
      <header class="fixed top-0 left-0 w-full z-50 flex items-center px-4 h-16 bg-surface-container-lowest border-b border-surface-container-high shadow-sm">
        <div class="flex items-center gap-4 w-full">
          <button [routerLink]="['/login']" aria-label="Back" class="p-2 -ml-2 hover:bg-surface-container-low transition-colors active:scale-95 duration-200 rounded-full">
            <span class="material-symbols-outlined text-primary-container">arrow_back</span>
          </button>
          <h1 class="font-h3 text-h3 font-semibold text-on-surface">Xác thực OTP</h1>
        </div>
      </header>

      <main class="flex-grow pt-24 px-6 pb-32 flex flex-col max-w-md mx-auto w-full">
        <div class="mb-10 text-center">
          <div class="w-20 h-20 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span class="material-symbols-outlined text-primary-container text-4xl">verified_user</span>
          </div>
          <h2 class="font-h2 text-h2 text-on-surface mb-3">Nhập mã xác thực</h2>
          <p class="font-body-md text-body-md text-outline">
            Mã xác thực 6 chữ số đã được gửi đến <span class="font-semibold text-on-surface">+84 987 654 321</span>
          </p>
        </div>

        <div class="grid grid-cols-6 gap-2 mb-10">
          <input class="w-full aspect-square text-center font-h2 text-h2 border-2 border-outline-variant rounded-xl focus:border-primary-container outline-none focus:ring-0 bg-surface-container-low transition-all" maxlength="1" type="text" value="4"/>
          <input class="w-full aspect-square text-center font-h2 text-h2 border-2 border-outline-variant rounded-xl focus:border-primary-container outline-none focus:ring-0 bg-surface-container-low transition-all" maxlength="1" type="text" value="8"/>
          <input class="w-full aspect-square text-center font-h2 text-h2 border-2 border-outline-variant rounded-xl focus:border-primary-container outline-none focus:ring-0 bg-surface-container-low transition-all" maxlength="1" type="text" value="2"/>
          <input class="w-full aspect-square text-center font-h2 text-h2 border-2 border-primary-container ring-1 outline-none ring-primary-container rounded-xl focus:ring-0 bg-surface-container-low transition-all" maxlength="1" placeholder="·" type="text"/>
          <input class="w-full aspect-square text-center font-h2 text-h2 border-2 border-outline-variant rounded-xl focus:border-primary-container outline-none focus:ring-0 bg-surface-container-low transition-all" maxlength="1" placeholder="·" type="text"/>
          <input class="w-full aspect-square text-center font-h2 text-h2 border-2 border-outline-variant rounded-xl focus:border-primary-container outline-none focus:ring-0 bg-surface-container-low transition-all" maxlength="1" placeholder="·" type="text"/>
        </div>

        <div class="flex flex-col items-center gap-2">
          <p class="font-body-sm text-body-sm text-outline">
            Gửi lại mã sau <span class="font-bold text-primary">00:59</span>
          </p>
          <button class="font-label-md text-label-md text-primary-container hover:underline opacity-50 cursor-not-allowed">
            Chưa nhận được mã? Gửi lại
          </button>
        </div>

        <div class="mt-auto pt-10">
          <div class="bg-surface-container border border-surface-variant rounded-xl p-4 mb-8 flex items-start gap-3">
            <span class="material-symbols-outlined text-primary-container mt-0.5">info</span>
            <p class="font-body-sm text-body-sm text-on-surface-variant leading-tight">
              Để đảm bảo an toàn, vui lòng không chia sẻ mã này với bất kỳ ai, kể cả cán bộ xã.
            </p>
          </div>
        </div>
      </main>

      <div class="fixed bottom-0 left-0 w-full p-6 bg-surface-container-lowest shadow-[0_-4px_24px_rgba(0,0,0,0.04)] border-t border-surface-variant">
        <div class="max-w-md mx-auto">
          <button [routerLink]="['/home']" class="w-full py-4 px-6 bg-primary-container text-white font-label-md text-lg rounded-xl shadow-lg shadow-primary-container/20 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
            <span>Xác nhận</span>
            <span class="material-symbols-outlined text-xl">check_circle</span>
          </button>
        </div>
      </div>
    </div>
  `
})
export class OtpComponent {}
