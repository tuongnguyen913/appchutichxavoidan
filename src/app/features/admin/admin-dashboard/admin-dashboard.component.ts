import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-background text-on-background min-h-screen md:pb-0  flex flex-col pt-16 md:pt-0">
      <header class="bg-surface-container-lowest border-b border-outline-variant shadow-sm flex justify-between items-center w-full px-4 h-16 fixed top-0 z-50 ">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full overflow-hidden bg-surface-variant flex items-center justify-center">
            <img alt="Admin" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf34MWWxwd_JiJsxsC7nx9GeTCFWle4eAZ42ao9Sp9YH7fWVgtTQCAn3Xazdnm-beH8NdbZwLF8XSSs7oYDBIXT7dypQOTmoRrCcnE7VNjQpEn-Pd9UxKaBhee1zeVImj3pCFSyratWYGhk_HeLgeprTlmjd1MbEvwZZ8HTxZWE4pVX_1sqmhPXLEP55c64N7pC7TKxEjG3NK-XBIFSN6lrAPMs93S4kQWItXoSHYH0YefWIfrmQny2QvZpgoTZS4VNHr0oRm0ahI"/>
          </div>
          <h1 class="font-h3 text-h3 font-bold text-primary tracking-tight">Chủ tịch xã với Dân</h1>
        </div>
        <button class="text-on-surface-variant hover:bg-surface-container transition-colors p-2 rounded-full flex items-center justify-center">
          <span class="material-symbols-outlined">notifications</span>
        </button>
      </header>

      

      <main class="flex-1 flex flex-col p-container-margin md:p-[32px] max-w-7xl mx-auto w-full gap-section-gap">
        <section class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 class="font-h1 text-h1 text-primary">Xin chào, Chủ tịch Nguyễn Văn A</h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant mt-1">Hôm nay, Thứ Sáu, 21/07/2023</p>
          </div>
          <div class="flex items-center gap-2 text-on-surface-variant bg-surface-container-high px-4 py-2 rounded-full shadow-sm border border-outline-variant/30">
            <span class="material-symbols-outlined text-primary">cloud</span>
            <span class="font-label-md text-label-md">28°C, Mây rải rác</span>
          </div>
        </section>

        <section class="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          <div class="bg-surface-container-lowest rounded-xl p-card-padding border border-outline-variant shadow-sm flex flex-col relative overflow-hidden">
            <div class="absolute top-0 right-0 p-3 opacity-10">
              <span class="material-symbols-outlined text-[64px] icon-fill">mark_email_unread</span>
            </div>
            <span class="font-label-sm text-label-sm text-on-surface-variant mb-2">Phản ánh mới</span>
            <div class="flex items-baseline gap-2">
              <span class="font-h1 text-[36px] font-bold text-on-surface">12</span>
              <span class="font-label-sm text-label-sm text-secondary flex items-center bg-secondary-container px-1.5 py-0.5 rounded-full">
                <span class="material-symbols-outlined text-[14px]">arrow_upward</span> 3
              </span>
            </div>
          </div>
          <div class="bg-surface-container-lowest rounded-xl p-card-padding border border-outline-variant shadow-sm flex flex-col relative overflow-hidden">
            <div class="absolute top-0 right-0 p-3 opacity-10">
              <span class="material-symbols-outlined text-[64px] icon-fill">sync</span>
            </div>
            <span class="font-label-sm text-label-sm text-on-surface-variant mb-2">Đang xử lý</span>
            <div class="flex items-baseline gap-2">
              <span class="font-h1 text-[36px] font-bold text-primary">8</span>
            </div>
          </div>
          <div class="bg-surface-container-lowest rounded-xl p-card-padding border border-outline-variant shadow-sm flex flex-col relative overflow-hidden">
            <div class="absolute top-0 right-0 p-3 opacity-10">
              <span class="material-symbols-outlined text-[64px] icon-fill">check_circle</span>
            </div>
            <span class="font-label-sm text-label-sm text-on-surface-variant mb-2">Đã xử lý hôm nay</span>
            <div class="flex items-baseline gap-2">
              <span class="font-h1 text-[36px] font-bold text-secondary">5</span>
            </div>
          </div>
          <div class="bg-error-container rounded-xl p-card-padding border border-error/20 shadow-sm flex flex-col relative overflow-hidden">
            <div class="absolute top-0 right-0 p-3 opacity-10">
              <span class="material-symbols-outlined text-[64px] text-error icon-fill">warning</span>
            </div>
            <span class="font-label-sm text-label-sm text-on-error-container mb-2">Quá hạn xử lý</span>
            <div class="flex items-baseline gap-2">
              <span class="font-h1 text-[36px] font-bold text-error">2</span>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-primary-container to-primary rounded-3xl p-card-padding shadow-md text-on-primary flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div class="flex items-start gap-4">
            <div class="bg-white/20 p-3 rounded-full backdrop-blur-sm flex-shrink-0">
              <span class="material-symbols-outlined text-[32px] icon-fill">smart_toy</span>
            </div>
            <div>
              <h2 class="font-h3 text-h3 mb-1 text-on-primary">🤖 Trợ lý AI – Tóm tắt ngày 21/07</h2>
              <p class="font-body-md text-body-md text-primary-fixed-dim">Có 3 phản ánh về vệ sinh môi trường tại thôn Đoài cần chỉ đạo gấp. Tỷ lệ giải quyết hồ sơ hành chính đạt 95%.</p>
            </div>
          </div>
          <button class="bg-surface-container-lowest text-primary-container px-6 py-3 rounded-xl font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm flex items-center gap-2 whitespace-nowrap self-stretch md:self-auto flex-shrink-0 justify-center active:scale-95">
            Xem chi tiết AI
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </section>

        <section class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          <div class="lg:col-span-2 bg-surface-container-lowest rounded-3xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
            <div class="p-card-padding border-b border-outline-variant/30 bg-surface-container-low flex justify-between items-center">
              <h3 class="font-h3 text-h3 text-on-surface flex items-center gap-2">
                <span class="material-symbols-outlined text-primary">apps</span>
                Tác vụ nhanh
              </h3>
            </div>
            <div class="grid grid-cols-3 gap-1 p-1 bg-surface-variant flex-1">
              <button [routerLink]="['/admin/reports']" class="bg-surface-container-lowest p-4 flex flex-col items-center justify-center gap-3 hover:bg-surface-container transition-colors group">
                <div class="w-12 h-12 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined icon-fill">forum</span>
                </div>
                <span class="font-label-md text-label-md text-on-surface">Phản ánh</span>
              </button>
              <button class="bg-surface-container-lowest p-4 flex flex-col items-center justify-center gap-3 hover:bg-surface-container transition-colors group">
                <div class="w-12 h-12 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined icon-fill">psychology</span>
                </div>
                <span class="font-label-md text-label-md text-on-surface">Hỏi AI</span>
              </button>
              <button class="bg-surface-container-lowest p-4 flex flex-col items-center justify-center gap-3 hover:bg-surface-container transition-colors group">
                <div class="w-12 h-12 rounded-2xl bg-error-container text-on-error-container flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined icon-fill">campaign</span>
                </div>
                <span class="font-label-md text-label-md text-on-surface">Phát thông báo</span>
              </button>
              <button class="bg-surface-container-lowest p-4 flex flex-col items-center justify-center gap-3 hover:bg-surface-container transition-colors group">
                <div class="w-12 h-12 rounded-2xl bg-[#FFE1E8] text-[#8C0028] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined icon-fill">podcasts</span>
                </div>
                <span class="font-label-md text-label-md text-on-surface">Livestream</span>
              </button>
              <button class="bg-surface-container-lowest p-4 flex flex-col items-center justify-center gap-3 hover:bg-surface-container transition-colors group">
                <div class="w-12 h-12 rounded-2xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined icon-fill">insert_chart</span>
                </div>
                <span class="font-label-md text-label-md text-on-surface">Báo cáo</span>
              </button>
              <button class="bg-surface-container-lowest p-4 flex flex-col items-center justify-center gap-3 hover:bg-surface-container transition-colors group">
                <div class="w-12 h-12 rounded-2xl bg-surface-variant text-on-surface-variant flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined icon-fill">account_balance</span>
                </div>
                <span class="font-label-md text-label-md text-on-surface">Dịch vụ công</span>
              </button>
            </div>
          </div>
          
          <div class="bg-surface-container-lowest rounded-3xl border border-outline-variant shadow-sm flex flex-col overflow-hidden">
            <div class="p-card-padding border-b border-outline-variant/30 bg-surface-container-low flex justify-between items-center">
              <h3 class="font-h3 text-h3 text-on-surface flex items-center gap-2">
                <span class="material-symbols-outlined text-primary">map</span> 
                Bản đồ phản ánh
              </h3>
            </div>
            <div class="relative w-full h-[240px] bg-surface-container overflow-hidden">
              <img alt="Map" class="w-full h-full object-cover opacity-50 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8oitxkzpqCvp2RsDWxFp-01DyjQ57Gkt_5LQ0GKB-2OHd5NSUzh7Rj47C5arRhQQqxBOORAusVYZmhEuEBj-fqV2YKCfF52AjLLjZAUKjW1kAgS2ftgY31-l5iqb_7jAQNAzmrBx9LL8yiAvQxhnW7k0QWd_hAQDcjNrjb41ahUeuzF9-_8t-r7SYxxe1E32EvDSQRItYGm5ayh3BWm7DB0tokm0Sf-Kw_JbOSSABU-RKBhGCbTYMlPp8jT6Fb6-nRinxk8dhm6Q"/>
              <div class="absolute top-[40%] left-[30%] w-6 h-6 bg-error rounded-full opacity-80 animate-pulse shadow-[0_0_15px_rgba(186,26,26,0.8)]"></div>
              <div class="absolute top-[60%] left-[70%] w-4 h-4 bg-primary rounded-full opacity-80 shadow-[0_0_10px_rgba(0,63,177,0.6)]"></div>
              <div class="absolute top-[20%] left-[50%] w-8 h-8 bg-error rounded-full opacity-60 shadow-[0_0_20px_rgba(186,26,26,0.5)]"></div>
              <div class="absolute top-[75%] left-[20%] w-5 h-5 bg-secondary rounded-full opacity-80 shadow-[0_0_10px_rgba(0,110,45,0.6)]"></div>
              <div class="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-outline-variant shadow-sm flex flex-col gap-1">
                <div class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-error"></span><span class="font-label-sm text-[10px]">Mật độ cao</span></div>
                <div class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-primary"></span><span class="font-label-sm text-[10px]">Trung bình</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  `
})
export class AdminDashboardComponent {}
