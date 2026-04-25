import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex font-sans">
      

      <div class="flex-1 flex flex-col w-full  relative">
        <header class="bg-surface-container-lowest border-b border-outline-variant/30 shadow-sm flex justify-between items-center w-full px-4 h-16 fixed top-0 z-50 ">
          <div class="flex items-center gap-3">
             <button [routerLink]="['/admin/dashboard']" class="text-primary hover:bg-surface-container-low transition-colors p-2 -ml-2 rounded-full">
               <span class="material-symbols-outlined">arrow_back</span>
             </button>
            <h1 class="text-primary font-bold text-lg tracking-tight">Cài đặt</h1>
          </div>
        </header>

        <main class="flex-1 pt-20 md:pt-10 pb-8 px-4 md:px-8 max-w-5xl mx-auto w-full flex flex-col gap-6">
          <div class="mb-2 hidden md:block">
            <h1 class="font-h1 text-h1 text-on-surface">Hồ sơ & Cài đặt</h1>
            <p class="font-body-md text-body-md text-on-surface-variant mt-1">Quản lý thông tin cá nhân và cấu hình hệ thống hành chính.</p>
          </div>

          <section class="bg-primary rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-primary-container/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
            <div class="relative z-10 w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full border-4 border-surface-container-lowest/20 overflow-hidden shadow-lg bg-surface-container-lowest">
              <img alt="Official Avatar" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf34MWWxwd_JiJsxsC7nx9GeTCFWle4eAZ42ao9Sp9YH7fWVgtTQCAn3Xazdnm-beH8NdbZwLF8XSSs7oYDBIXT7dypQOTmoRrCcnE7VNjQpEn-Pd9UxKaBhee1zeVImj3pCFSyratWYGhk_HeLgeprTlmjd1MbEvwZZ8HTxZWE4pVX_1sqmhPXLEP55c64N7pC7TKxEjG3NK-XBIFSN6lrAPMs93S4kQWItXoSHYH0YefWIfrmQny2QvZpgoTZS4VNHr0oRm0ahI"/>
            </div>
            <div class="relative z-10 flex flex-col items-center md:items-start text-center md:text-left text-on-primary">
              <h2 class="font-h1 text-[28px] md:text-[32px] font-bold mb-1">Nguyễn Văn Quyết</h2>
              <p class="font-body-lg text-body-lg text-primary-fixed mb-3">Chủ tịch Ủy ban Nhân dân Xã</p>
            </div>
          </section>

          <section class="grid grid-cols-3 gap-3 md:gap-4">
            <div class="bg-surface-container-lowest rounded-2xl p-4 md:p-6 shadow-sm border border-outline-variant/30 flex flex-col sm:flex-row items-center gap-3 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 rounded-full bg-surface-container text-primary flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-[24px] icon-fill">task_alt</span>
              </div>
              <div class="text-center sm:text-left">
                <div class="font-h3 text-[24px] font-bold text-on-surface">1,284</div>
                <div class="font-label-sm text-label-sm text-on-surface-variant">Đã xử lý</div>
              </div>
            </div>
            <div class="bg-surface-container-lowest rounded-2xl p-4 md:p-6 shadow-sm border border-outline-variant/30 flex flex-col sm:flex-row items-center gap-3 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-[24px] icon-fill">update</span>
              </div>
              <div class="text-center sm:text-left">
                <div class="font-h3 text-[24px] font-bold text-on-surface">89%</div>
                <div class="font-label-sm text-label-sm text-on-surface-variant">Đúng hạn</div>
              </div>
            </div>
            <div class="bg-surface-container-lowest rounded-2xl p-4 md:p-6 shadow-sm border border-outline-variant/30 flex flex-col sm:flex-row items-center gap-3 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 rounded-full bg-[#FFF8E1] text-[#F57F17] flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-[24px] icon-fill">star</span>
              </div>
              <div class="text-center sm:text-left">
                <div class="font-h3 text-[24px] font-bold text-on-surface">4.7</div>
                <div class="font-label-sm text-label-sm text-on-surface-variant">Hài lòng</div>
              </div>
            </div>
          </section>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col gap-6">
              <section class="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden">
                <div class="px-5 py-4 border-b border-outline-variant/30 bg-surface-container-highest/20">
                  <h3 class="font-h3 text-h3 text-on-surface">Thông tin cá nhân</h3>
                </div>
                <div class="flex flex-col">
                  <button class="w-full flex items-center justify-between px-5 py-4 hover:bg-surface-container-low transition-colors group border-b border-outline-variant/10">
                    <div class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-outline group-hover:text-primary">person</span>
                      <span class="font-body-md text-body-md text-on-surface">Hồ sơ Cán bộ</span>
                    </div>
                    <span class="material-symbols-outlined text-outline group-hover:text-primary">chevron_right</span>
                  </button>
                  <button class="w-full flex items-center justify-between px-5 py-4 hover:bg-surface-container-low transition-colors group">
                    <div class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-outline group-hover:text-primary">contact_mail</span>
                      <span class="font-body-md text-body-md text-on-surface">Thông tin liên hệ</span>
                    </div>
                    <span class="material-symbols-outlined text-outline group-hover:text-primary">chevron_right</span>
                  </button>
                </div>
              </section>
            </div>

            <div class="flex flex-col gap-6">
              <section class="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden">
                <div class="px-5 py-4 border-b border-outline-variant/30 bg-surface-container-highest/20">
                  <h3 class="font-h3 text-h3 text-on-surface">Bảo mật</h3>
                </div>
                <div class="flex flex-col">
                  <button class="w-full flex items-center justify-between px-5 py-4 hover:bg-surface-container-low transition-colors group border-b border-outline-variant/10">
                    <div class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-outline group-hover:text-primary">lock</span>
                      <span class="font-body-md text-body-md text-on-surface">Đổi mật khẩu</span>
                    </div>
                    <span class="material-symbols-outlined text-outline group-hover:text-primary">chevron_right</span>
                  </button>
                  <button class="w-full flex items-center justify-between px-5 py-4 hover:bg-surface-container-low transition-colors group border-b border-outline-variant/10">
                    <div class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-outline group-hover:text-primary">fingerprint</span>
                      <span class="font-body-md text-body-md text-on-surface">Xác thực sinh trắc học</span>
                    </div>
                    <div class="flex items-center gap-2">
                       <span class="font-label-sm text-label-sm text-secondary bg-secondary-container/30 px-2 py-0.5 rounded-md border border-secondary/20">Đã bật</span>
                      <span class="material-symbols-outlined text-outline group-hover:text-primary">chevron_right</span>
                    </div>
                  </button>
                   <button class="w-full flex items-center justify-between px-5 py-4 hover:bg-surface-container-low transition-colors group">
                    <div class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-outline group-hover:text-primary">history</span>
                      <span class="font-body-md text-body-md text-on-surface">Nhật ký hoạt động</span>
                    </div>
                    <span class="material-symbols-outlined text-outline group-hover:text-primary">chevron_right</span>
                  </button>
                </div>
              </section>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-outline-variant/30 flex justify-center md:justify-end">
            <button class="w-full md:w-auto flex items-center justify-center gap-2 bg-error hover:bg-error/90 text-on-error px-6 py-3.5 rounded-xl shadow-sm transition-all font-label-md">
              <span class="material-symbols-outlined text-[20px]">logout</span>
              Đăng xuất hệ thống
            </button>
          </div>
        </main>
      </div>
    </div>
  `
})
export class AdminProfileComponent {}
