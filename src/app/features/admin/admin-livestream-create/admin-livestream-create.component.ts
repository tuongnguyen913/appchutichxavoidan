import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-livestream-create',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-[#f4f7ff] text-on-background font-body-md min-h-screen font-sans">
      <header class="bg-surface-container-lowest border-b border-outline-variant/30 shadow-sm flex justify-between items-center w-full px-4 h-16 fixed top-0 z-50 md:pl-[19rem]">
        <div class="flex items-center gap-3">
           <img alt="Admin" class="w-8 h-8 rounded-full border border-outline-variant/50 " src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf34MWWxwd_JiJsxsC7nx9GeTCFWle4eAZ42ao9Sp9YH7fWVgtTQCAn3Xazdnm-beH8NdbZwLF8XSSs7oYDBIXT7dypQOTmoRrCcnE7VNjQpEn-Pd9UxKaBhee1zeVImj3pCFSyratWYGhk_HeLgeprTlmjd1MbEvwZZ8HTxZWE4pVX_1sqmhPXLEP55c64N7pC7TKxEjG3NK-XBIFSN6lrAPMs93S4kQWItXoSHYH0YefWIfrmQny2QvZpgoTZS4VNHr0oRm0ahI"/>
          <h1 class="text-xl font-bold text-primary tracking-tight">Chủ tịch xã với Dân</h1>
        </div>
      </header>

      

      <main class="pt-24 pb-12  px-container-margin md:px-section-gap max-w-7xl mx-auto w-full">
         <div class="mb-6 flex items-center gap-4">
          <button [routerLink]="['/admin/livestreams']" class="p-2 rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant flex items-center justify-center">
            <span class="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <div>
            <h1 class="font-h2 text-h2 text-on-surface">Thông báo Livestream</h1>
            <p class="font-body-sm text-body-sm text-on-surface-variant">Lên lịch và thông báo trực tiếp đến người dân.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-6">
            <div class="bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant/30 p-6 md:p-8">
               <h3 class="font-h3 text-h3 text-on-surface mb-6">Tạo thông báo mới</h3>
               <form class="space-y-6">
                 <div>
                  <label class="block font-label-md text-label-md text-on-surface-variant mb-2">Chủ đề Livestream <span class="text-error">*</span></label>
                  <input class="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary font-body-md text-body-md text-on-surface outline-none transition-shadow" placeholder="VD: Giải đáp thắc mắc về đền bù đất đai..." required type="text"/>
                 </div>
                 
                 <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block font-label-md text-label-md text-on-surface-variant mb-2">Ngày dự kiến <span class="text-error">*</span></label>
                    <div class="relative">
                      <input class="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3.5 pl-12 focus:ring-1 focus:ring-primary focus:border-primary font-body-md text-body-md text-on-surface outline-none appearance-none" type="date"/>
                      <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">calendar_today</span>
                    </div>
                  </div>
                  <div>
                    <label class="block font-label-md text-label-md text-on-surface-variant mb-2">Thời gian bắt đầu <span class="text-error">*</span></label>
                    <div class="relative">
                      <input class="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3.5 pl-12 focus:ring-1 focus:ring-primary focus:border-primary font-body-md text-body-md text-on-surface outline-none appearance-none" type="time"/>
                      <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">schedule</span>
                    </div>
                  </div>
                 </div>

                 <div>
                  <label class="block font-label-md text-label-md text-on-surface-variant mb-2">Nền tảng phát sóng & Ghi chú</label>
                  <textarea class="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary font-body-md text-body-md text-on-surface outline-none resize-none" placeholder="Phát trực tiếp trên Fanpage Xã. Vui lòng chuẩn bị câu hỏi trước..." rows="4"></textarea>
                 </div>

                 <div class="pt-4 flex justify-end">
                  <button class="bg-primary text-on-primary rounded-xl px-8 py-3.5 font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-primary-container transition-colors shadow-sm w-full md:w-auto" type="button">
                    <span class="material-symbols-outlined icon-fill">campaign</span>
                    Thông báo cho toàn dân
                  </button>
                </div>
               </form>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant/30 p-6">
              <div class="flex items-center justify-between mb-6">
                 <h3 class="font-h3 text-h3 text-on-surface">Sắp diễn ra</h3>
                 <span class="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-secondary/20">
                   <span class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                   Live
                 </span>
              </div>
               <div class="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/30 relative overflow-hidden">
                 <div class="absolute right-0 bottom-0 text-primary/10">
                   <span class="material-symbols-outlined text-[80px] origin-bottom-right">podcasts</span>
                 </div>
                 <div class="relative z-10">
                    <h4 class="font-h3 text-h3 text-on-surface font-semibold mb-3">Đối thoại tháng 8</h4>
                    <div class="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mb-2">
                       <span class="material-symbols-outlined text-[18px]">calendar_month</span>
                       <span>25/08/2023 - 19:30</span>
                    </div>
                    <div class="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mb-5">
                       <span class="material-symbols-outlined text-[18px]">groups</span>
                       <span>Đã gửi: 1,245 hộ dân</span>
                    </div>
                    <div class="flex flex-col gap-2">
                       <button class="w-full bg-surface-container-lowest border border-primary/30 text-primary font-label-md text-label-md py-2.5 rounded-xl hover:bg-surface-container transition-colors flex items-center justify-center gap-2 shadow-sm">
                         <span class="material-symbols-outlined text-[18px]">notifications_active</span>
                         Nhắc nhở dân
                       </button>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `
})
export class AdminLivestreamCreateComponent {}
