import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-report-list',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-[#f4f7ff] text-on-background font-body-md min-h-screen flex font-sans">
      

      <header class="flex justify-between items-center w-full px-4 h-16 fixed top-0 z-50 bg-surface-container-lowest border-b border-outline-variant/50 shadow-sm md:pl-[19rem]">
        <div class="flex items-center gap-3">
          <img alt="Admin" class="w-8 h-8 rounded-full object-cover " src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf34MWWxwd_JiJsxsC7nx9GeTCFWle4eAZ42ao9Sp9YH7fWVgtTQCAn3Xazdnm-beH8NdbZwLF8XSSs7oYDBIXT7dypQOTmoRrCcnE7VNjQpEn-Pd9UxKaBhee1zeVImj3pCFSyratWYGhk_HeLgeprTlmjd1MbEvwZZ8HTxZWE4pVX_1sqmhPXLEP55c64N7pC7TKxEjG3NK-XBIFSN6lrAPMs93S4kQWItXoSHYH0YefWIfrmQny2QvZpgoTZS4VNHr0oRm0ahI"/>
          <button [routerLink]="['/admin/dashboard']" class="">
             <span class="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 class="text-xl font-bold text-primary tracking-tight">Chủ tịch xã với Dân</h1>
        </div>
      </header>

      <main class="flex-1 flex flex-col pt-16  pb-20 md:pb-0 w-full min-h-screen">
        <div class="p-container-margin md:p-section-gap flex-1 max-w-7xl mx-auto w-full flex flex-col gap-6">
          <div class="flex flex-col gap-4">
            <h1 class="font-h1 text-h1 text-on-surface">Phản ánh cần xử lý</h1>
            <div class="bg-primary-fixed rounded-2xl p-4 flex items-center gap-3 shadow-sm border border-primary-fixed-dim/50">
              <span class="text-2xl">🤖</span>
              <p class="font-body-md text-body-md flex-1 text-on-primary-fixed">AI đã phân loại <span class="font-bold">12</span> phản ánh hôm nay – <span class="font-bold text-error">2 khẩn cấp</span> cần ưu tiên</p>
            </div>
          </div>

          <div class="flex gap-2 overflow-x-auto pb-2 -mx-container-margin px-container-margin md:mx-0 md:px-0 scrollbar-hide">
            <button class="whitespace-nowrap rounded-full px-5 py-2 font-label-md text-label-md bg-primary text-on-primary shadow-sm tracking-wide">Tất cả</button>
            <button class="whitespace-nowrap rounded-full px-5 py-2 font-label-md text-label-md bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-container transition-colors tracking-wide">Khẩn cấp</button>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <article class="bg-surface-container-lowest rounded-3xl border border-outline-variant shadow-sm relative overflow-hidden flex flex-col group">
              <div class="absolute left-0 top-0 bottom-0 w-2 bg-error"></div>
              <div class="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full shadow-[0_0_8px_rgba(0,63,177,0.6)]"></div>
              <div class="p-card-padding pl-7 flex flex-col gap-4">
                <div class="flex items-start gap-3">
                  <div class="p-2 bg-error-container text-on-error-container rounded-xl">
                    <span class="material-symbols-outlined">warning</span>
                  </div>
                  <div class="flex-1 pr-6">
                    <h3 class="font-h3 text-h3 text-on-surface line-clamp-2 group-hover:text-primary transition-colors cursor-pointer" [routerLink]="['/admin/report/detail/1']">Đường hỏng – Thôn 3</h3>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">Ông Nguyễn Văn A • 10 phút trước</p>
                  </div>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                  <span class="bg-surface-variant text-on-surface-variant px-2.5 py-1 rounded-md font-label-sm text-label-sm flex items-center gap-1 border border-outline-variant/30">
                     🤖 Hạ tầng
                  </span>
                  <span class="bg-error/10 text-error px-2.5 py-1 rounded-md font-label-sm text-label-sm flex items-center gap-1">
                    <span class="material-symbols-outlined text-[14px]">timer</span>
                     Còn 2 giờ (SLA)
                  </span>
                </div>
              </div>
              <div class="border-t border-outline-variant/30 p-3 bg-surface-container-low flex justify-between items-center mt-auto">
                <span class="font-label-sm text-label-sm text-error font-semibold pl-3 uppercase tracking-wider">Chưa xử lý</span>
                <button [routerLink]="['/admin/report/detail/1']" class="px-5 py-2 rounded-xl font-label-md text-label-md bg-primary text-on-primary shadow-sm hover:bg-primary-container transition-colors">Xem chi tiết</button>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  `
})
export class AdminReportListComponent {}
