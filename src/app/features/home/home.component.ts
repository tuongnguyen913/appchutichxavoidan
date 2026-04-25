import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen bg-[#f4f7ff] pb-8 font-sans">
      <header class="sticky top-0 w-full z-40 bg-surface-container-lowest shadow-sm flex justify-between items-center px-4 h-16 max-w-7xl mx-auto border-b border-surface-container-highest">
        <div class="flex items-center gap-3">
          <img alt="Ảnh đại diện" class="w-10 h-10 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs0BdhqMDv5WONywuY0XuDkzDarosuyq6_-oX0NEK7IoRgt6l-Ldw4EvyEEYpo-eo7SaKHFIHIDY0VGUznBUIMncKnp3byZAsHY7RZ_7KWxSeB-ryymDRChfIK35AEMx21ayBUk_2Jj25jsOHtlCh3326u90-9oihN8Z7iqUXgooqqTtoEh-y2QFx32F5fg_R46dVVEoU9RUbNWNWVWeGfUZv0T8Ndvr5CoVkrQn2QrElc6u4BOMJeQGunO9CEsBdCzBg6ySG5kQA"/>
          <span class="font-h3 text-h3 font-bold text-primary tracking-tight">Chủ tịch xã với Dân</span>
        </div>
        <button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant active:opacity-80">
          <span class="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <main class="px-container-margin md:px-6 max-w-7xl mx-auto pt-6 grid grid-cols-1 md:grid-cols-12 gap-4">
        
        <!-- Greeting -->
        <section class="md:col-span-8 md:row-span-2 bg-primary-fixed rounded-3xl border border-primary-fixed-dim p-8 flex flex-col justify-center relative overflow-hidden shadow-sm">
          <div class="absolute right-[-20px] bottom-[-20px] w-64 h-64 bg-primary-container opacity-10 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <h2 class="text-3xl font-bold text-on-primary-fixed mb-2">Xin chào, Nguyễn Văn Dân</h2>
            <p class="text-primary-container text-lg font-medium">Hôm nay Xã Yên Bình có 2 thông báo mới dành cho bạn.</p>
            <div class="mt-6 flex gap-3">
              <div class="flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-full shadow-sm border border-outline-variant/50">
                <div class="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span class="text-xs font-bold text-on-surface">Chủ tịch đang online</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Emergency Alert -->
        <section class="md:col-span-4 md:row-span-2 bg-error-container rounded-3xl border border-error p-6 flex flex-col shadow-sm cursor-pointer" [routerLink]="['/notification/2']">
          <div class="flex items-center gap-2 text-error mb-4">
            <span class="material-symbols-outlined text-[24px]">warning</span>
            <span class="font-bold uppercase tracking-widest text-xs">Cảnh báo khẩn</span>
          </div>
          <h3 class="text-lg font-bold text-on-error-container leading-snug">Lừa đảo giả danh công an</h3>
          <button class="mt-auto w-full bg-error text-on-error py-3 rounded-xl font-bold text-sm shadow-md transition-transform active:scale-[0.98]">Xem chi tiết</button>
        </section>

        <!-- Gặp Chủ Tịch (Livestream) -->
        <section class="md:col-span-5 md:row-span-4 bg-surface-container-lowest rounded-3xl border border-outline-variant shadow-sm p-4 flex flex-col">
          <div class="flex justify-between items-center mb-3 px-2">
            <span class="font-bold text-sm text-on-surface">Tiếp dân trực tuyến</span>
            <span class="px-2 py-0.5 bg-error text-on-error text-[10px] font-bold rounded-md animate-pulse">LIVE</span>
          </div>
          <div class="relative flex-grow rounded-2xl overflow-hidden bg-black min-h-[200px]">
            <img alt="Chủ tịch" class="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf34MWWxwd_JiJsxsC7nx9GeTCFWle4eAZ42ao9Sp9YH7fWVgtTQCAn3Xazdnm-beH8NdbZwLF8XSSs7oYDBIXT7dypQOTmoRrCcnE7VNjQpEn-Pd9UxKaBhee1zeVImj3pCFSyratWYGhk_HeLgeprTlmjd1MbEvwZZ8HTxZWE4pVX_1sqmhPXLEP55c64N7pC7TKxEjG3NK-XBIFSN6lrAPMs93S4kQWItXoSHYH0YefWIfrmQny2QvZpgoTZS4VNHr0oRm0ahI" />
            <div class="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md p-3 rounded-xl border border-white/20">
              <p class="text-white text-xs font-bold">Ông Nguyễn Văn A</p>
              <p class="text-white/70 text-[10px]">Chủ tịch Xã Yên Bình</p>
            </div>
          </div>
          <div class="mt-4 flex gap-2">
            <input type="text" placeholder="Gửi câu hỏi..." class="flex-grow text-xs bg-[#f4f7ff] border-none rounded-full px-4 py-2 focus:ring-2 focus:ring-primary-container outline-none">
            <button class="w-10 h-10 bg-primary-container text-on-primary rounded-full flex items-center justify-center shrink-0 hover:bg-primary transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2">
              <span class="material-symbols-outlined text-[16px] icon-fill">send</span>
            </button>
          </div>
        </section>

        <!-- Bento Utility Items -->
        <div class="md:col-span-7 md:row-span-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          <a [routerLink]="['/report/new']" class="bg-surface-container-lowest border border-outline-variant shadow-sm rounded-3xl p-5 flex flex-col justify-center items-center gap-3 hover:bg-surface-container-low transition-colors group text-center h-full">
            <div class="w-14 h-14 rounded-2xl bg-error-container text-on-error-container flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <span class="material-symbols-outlined text-[28px] icon-fill">campaign</span>
            </div>
            <span class="font-bold text-sm text-on-surface">Phản ánh ngay</span>
          </a>
          <a [routerLink]="['/reports']" class="bg-surface-container-lowest border border-outline-variant shadow-sm rounded-3xl p-5 flex flex-col justify-center items-center gap-3 hover:bg-surface-container-low transition-colors group text-center h-full">
            <div class="w-14 h-14 rounded-2xl bg-primary-container/10 text-primary-container flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <span class="material-symbols-outlined text-[28px] icon-fill">history</span>
            </div>
            <span class="font-bold text-sm text-on-surface">Phản ánh của tôi</span>
          </a>
          <a [routerLink]="['/notification/1']" class="bg-surface-container-lowest border border-outline-variant shadow-sm rounded-3xl p-5 flex flex-col justify-center items-center gap-3 hover:bg-surface-container-low transition-colors group text-center h-full">
            <div class="w-14 h-14 rounded-2xl bg-surface-container-highest text-on-surface-variant flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <span class="material-symbols-outlined text-[28px] icon-fill">notifications_active</span>
            </div>
            <span class="font-bold text-sm text-on-surface">Thông báo</span>
          </a>
          <a [routerLink]="[]" class="bg-surface-container-lowest border border-outline-variant shadow-sm rounded-3xl p-5 flex flex-col justify-center items-center gap-3 hover:bg-surface-container-low transition-colors group text-center h-full">
            <div class="w-14 h-14 rounded-2xl bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <span class="material-symbols-outlined text-[28px] icon-fill">account_balance</span>
            </div>
            <span class="font-bold text-sm text-on-surface">Dịch vụ công</span>
          </a>
          <a [routerLink]="[]" class="col-span-2 bg-surface-container-lowest border border-outline-variant shadow-sm rounded-3xl p-5 flex flex-row items-center justify-center gap-4 hover:bg-surface-container-low transition-colors group h-full">
            <div class="w-14 h-14 rounded-2xl bg-secondary-fixed/30 text-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm shrink-0">
              <span class="material-symbols-outlined text-[28px] icon-fill">folder_open</span>
            </div>
            <div class="text-left">
               <span class="font-bold text-sm text-on-surface block">Hồ sơ cá nhân</span>
               <span class="text-xs text-on-surface-variant">Quản lý giấy tờ, CCCD</span>
            </div>
          </a>
        </div>

        <!-- Latest News -->
        <section class="md:col-span-12 bg-surface-container-lowest rounded-3xl border border-outline-variant shadow-sm p-6 flex flex-col">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-bold text-sm uppercase tracking-wide text-outline">Tin tức nổi bật</h3>
            <a [routerLink]="[]" class="text-primary-container text-xs font-bold hover:underline">Xem tất cả</a>
          </div>
          
          <div class="flex flex-col md:flex-row gap-4">
            <div [routerLink]="[]" class="flex-1 bg-[#f4f7ff] border border-surface-container rounded-2xl p-4 flex gap-4 items-center hover:bg-surface-container transition-colors cursor-pointer group">
              <div class="w-12 h-12 rounded-xl bg-surface-container-lowest flex-shrink-0 flex items-center justify-center text-primary-container shadow-sm border border-outline-variant/30">
                <span class="material-symbols-outlined icon-fill">vaccines</span>
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-sm text-on-surface line-clamp-2 leading-snug group-hover:text-primary-container transition-colors">Kế hoạch tiêm phòng vắc xin cho trẻ em dưới 5 tuổi</h4>
                <p class="text-[10px] text-on-surface-variant mt-1 font-medium">2 giờ trước • Trạm Y tế xã</p>
              </div>
            </div>
            <div [routerLink]="[]" class="flex-1 bg-[#f4f7ff] border border-surface-container rounded-2xl p-4 flex gap-4 items-center hover:bg-surface-container transition-colors cursor-pointer group">
              <div class="w-12 h-12 rounded-xl bg-surface-container-lowest flex-shrink-0 flex items-center justify-center text-secondary shadow-sm border border-outline-variant/30">
                <span class="material-symbols-outlined icon-fill">grass</span>
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-sm text-on-surface line-clamp-2 leading-snug group-hover:text-secondary transition-colors">Ra quân dọn dẹp vệ sinh đường làng ngõ xóm</h4>
                <p class="text-[10px] text-on-surface-variant mt-1 font-medium">1 ngày trước • Đoàn Thanh Niên</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  `
})
export class HomeComponent {}
