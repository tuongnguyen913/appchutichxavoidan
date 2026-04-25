import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-background">
      <div class="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-surface-container-high rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div class="relative z-10 w-full max-w-md mx-auto">
        <div class="bg-surface-container-lowest/80 backdrop-blur-xl rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-outline-variant/30 p-8 flex flex-col h-full">
          <div class="flex flex-col items-center justify-center mb-10">
            <div class="w-16 h-16 bg-surface-container flex items-center justify-center rounded-xl mb-4 text-primary-container">
              <span class="material-symbols-outlined text-[32px]">shield_person</span>
            </div>
            <h1 class="font-h3 text-h3 text-on-surface text-center tracking-tight">Chủ tịch xã với Dân</h1>
          </div>
          
          <div class="mb-8">
            <h2 class="font-h2 text-h2 text-on-surface mb-2">Đăng nhập</h2>
            <p class="font-body-sm text-body-sm text-on-surface-variant">Vui lòng nhập số điện thoại để tiếp tục</p>
          </div>
          
          <div class="flex flex-col gap-6 flex-grow">
            <div class="flex flex-col gap-2">
              <label class="font-label-md text-label-md text-on-surface">Số điện thoại</label>
              <div class="flex rounded-lg border border-outline-variant bg-surface overflow-hidden focus-within:border-primary-container focus-within:ring-1 focus-within:ring-primary-container transition-all">
                <div class="flex items-center justify-center px-4 bg-surface-container-low border-r border-outline-variant text-on-surface-variant font-body-md text-body-md">
                  +84
                </div>
                <input class="flex-1 bg-transparent border-none py-3 px-4 font-body-md text-body-md text-on-surface placeholder:text-outline focus:ring-0 outline-none" placeholder="Nhập số điện thoại của bạn" type="tel"/>
              </div>
            </div>
            
            <button [routerLink]="['/otp']" class="w-full bg-primary-container text-on-primary font-label-md text-label-md py-4 rounded-lg flex items-center justify-center hover:bg-primary transition-colors shadow-sm">
              Nhận mã OTP
            </button>
            
            <div class="relative flex items-center py-2">
              <div class="flex-grow border-t border-outline-variant/50"></div>
              <span class="flex-shrink-0 mx-4 font-body-sm text-body-sm text-outline">hoặc</span>
              <div class="flex-grow border-t border-outline-variant/50"></div>
            </div>
            
            <button class="w-full border-2 border-secondary text-secondary bg-surface-container-lowest font-label-md text-label-md py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors">
              <span class="material-symbols-outlined text-[20px]">badge</span>
              Đăng nhập bằng VNeID
            </button>
          </div>
          
          <div class="mt-8 flex flex-col items-center gap-4 border-t border-outline-variant/30 pt-6">
            <p class="font-body-sm text-body-sm text-on-surface-variant">
              Chưa có tài khoản? <a class="font-label-md text-label-md text-primary-container hover:underline" href="#">Đăng ký ngay</a>
            </p>
            <a [routerLink]="['/admin/login']" class="font-label-sm text-label-sm text-outline hover:text-on-surface flex items-center gap-1 transition-colors">
              <span class="material-symbols-outlined text-[16px]">admin_panel_settings</span>
              Dành cho Chủ tịch / Cán bộ
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {}
