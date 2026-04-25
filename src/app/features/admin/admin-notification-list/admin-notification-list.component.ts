import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-notification-list',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-background font-body-md text-on-background min-h-screen font-sans flex flex-col md:flex-row">
      <header class="bg-surface-container-lowest border-b border-outline-variant shadow-sm flex justify-between items-center w-full px-4 h-16 fixed top-0 z-50 md:pl-[19rem]">
        <div class="flex items-center gap-3">
          <img alt="Admin" class="w-8 h-8 rounded-full object-cover " src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf34MWWxwd_JiJsxsC7nx9GeTCFWle4eAZ42ao9Sp9YH7fWVgtTQCAn3Xazdnm-beH8NdbZwLF8XSSs7oYDBIXT7dypQOTmoRrCcnE7VNjQpEn-Pd9UxKaBhee1zeVImj3pCFSyratWYGhk_HeLgeprTlmjd1MbEvwZZ8HTxZWE4pVX_1sqmhPXLEP55c64N7pC7TKxEjG3NK-XBIFSN6lrAPMs93S4kQWItXoSHYH0YefWIfrmQny2QvZpgoTZS4VNHr0oRm0ahI"/>
          <button [routerLink]="['/admin/dashboard']" class=" p-2 rounded-full hover:bg-surface-container transition-colors">
            <span class="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 class="text-xl font-bold text-primary tracking-tight">Chủ tịch xã với Dân</h1>
        </div>
      </header>

      

      <main class="flex-1 px-container-margin pb-12 space-y-4 pt-20  w-full max-w-7xl mx-auto">
        <section class="flex flex-col gap-1 mb-4">
          <h1 class="font-h2 text-h2 text-on-surface">Danh sách thông báo đã gửi</h1>
          <p class="font-body-sm text-on-surface-variant">Tổng cộng 24 thông báo trong tháng này</p>
        </section>

        <section class="space-y-4 mb-6">
          <div class="relative max-w-2xl">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input class="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant/60 rounded-full focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline shadow-sm font-body-sm text-body-sm" placeholder="Tìm kiếm thông báo..." type="text"/>
          </div>
          <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button class="bg-primary text-on-primary px-5 py-2 rounded-full font-label-md whitespace-nowrap shadow-sm">Tất cả</button>
            <button class="bg-surface-container-lowest border border-outline-variant text-on-surface px-5 py-2 rounded-full font-label-md whitespace-nowrap hover:bg-surface-container transition-colors">Khẩn cấp</button>
            <button class="bg-surface-container-lowest border border-outline-variant text-on-surface px-5 py-2 rounded-full font-label-md whitespace-nowrap hover:bg-surface-container transition-colors">Cảnh báo</button>
            <button class="bg-surface-container-lowest border border-outline-variant text-on-surface px-5 py-2 rounded-full font-label-md whitespace-nowrap hover:bg-surface-container transition-colors">Sự kiện</button>
          </div>
        </section>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <article class="bg-surface-container-lowest rounded-3xl p-card-padding border border-outline-variant/50 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div class="absolute top-0 left-0 w-1.5 h-full bg-error"></div>
            <div class="flex justify-between items-start">
              <span class="bg-error-container text-on-error-container px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px] icon-fill">error</span>
                Khẩn cấp
              </span>
              <button class="text-outline hover:text-on-surface"><span class="material-symbols-outlined text-[20px]">more_vert</span></button>
            </div>
            <div class="space-y-1 pl-1 flex-1">
              <h3 class="font-h3 text-h3 text-on-surface leading-tight group-hover:text-primary transition-colors cursor-pointer" [routerLink]="['/admin/notification/1']">Cảnh báo mưa lớn và nguy cơ sạt lở</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-2">Người dân các thôn 1, 2 chú ý theo dõi mực nước sông và chuẩn bị phương án di dời khi có lệnh...</p>
            </div>
            <div class="pt-3 border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center gap-2 justify-between">
              <div class="flex items-center gap-1 text-on-surface-variant">
                <span class="material-symbols-outlined text-[16px]">schedule</span>
                <span class="font-label-sm text-label-sm">14:30 - 21/07/2025</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-[16px] text-primary">groups</span>
                  <span class="font-label-sm text-label-sm text-on-surface font-semibold">Toàn xã</span>
                </div>
                <div class="flex items-center gap-1 text-secondary">
                  <span class="material-symbols-outlined text-[16px]">done_all</span>
                  <span class="font-label-sm text-label-sm">1.2k</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <button [routerLink]="['/admin/notification/create']" class="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-primary text-on-primary rounded-2xl shadow-lg flex items-center justify-center hover:bg-primary-container transition-colors z-40 group hover:scale-105 active:scale-95">
          <span class="material-symbols-outlined text-[28px] group-hover:rotate-90 transition-transform">add</span>
        </button>
      </main>
    </div>
  `
})
export class AdminNotificationListComponent {}
