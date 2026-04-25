import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-[#f4f7ff] min-h-screen font-sans">
      <header class="sticky top-0 w-full z-40 bg-surface-container-lowest shadow-sm flex justify-between items-center px-4 h-16 shrink-0 border-b border-surface-container-highest">
        <div class="flex items-center gap-3">
          <button [routerLink]="['/home']" class="w-10 h-10 flex items-center justify-center text-on-surface rounded-full hover:bg-surface-container-high transition-colors">
            <span class="material-symbols-outlined">arrow_back</span>
          </button>
          <span class="font-h3 text-h3 font-bold text-on-surface tracking-tight">Chủ tịch xã với Dân</span>
        </div>
      </header>

      <main class="px-container-margin py-6 max-w-7xl mx-auto space-y-6">
        <div class="space-y-4">
          <div>
            <h1 class="font-h2 text-h2 text-primary">Phản ánh của tôi</h1>
            <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">Theo dõi và quản lý các yêu cầu bạn đã gửi.</p>
          </div>
          <div class="relative">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input class="w-full bg-surface-container-lowest border border-outline-variant rounded-full pl-10 pr-4 py-3 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-outline transition-shadow shadow-sm" placeholder="Tìm kiếm nội dung phản ánh..." type="text"/>
          </div>
        </div>

        <div class="flex overflow-x-auto gap-2 pb-2 hide-scrollbar">
          <button class="whitespace-nowrap px-4 py-2 rounded-full bg-primary text-on-primary font-label-sm text-label-sm transition-colors cursor-pointer">Tất cả</button>
          <button class="whitespace-nowrap px-4 py-2 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm transition-colors cursor-pointer">Đang xử lý</button>
          <button class="whitespace-nowrap px-4 py-2 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm transition-colors cursor-pointer">Đã giải quyết</button>
          <button class="whitespace-nowrap px-4 py-2 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm transition-colors cursor-pointer">Chờ phản hồi</button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div [routerLink]="['/report/detail/1']" class="bg-surface-container-lowest border border-outline-variant rounded-3xl p-card-padding flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-surface-tint"></div>
            <div class="flex justify-between items-start">
              <div class="flex items-center gap-2 text-surface-tint">
                <span class="material-symbols-outlined bg-surface-container p-1.5 rounded-lg text-[20px]">construction</span>
                <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline">Hạ tầng</span>
              </div>
              <span class="bg-surface-container text-surface-tint px-2.5 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px]">pending</span> Đang xử lý
              </span>
            </div>
            <div>
              <h3 class="font-h3 text-h3 text-on-surface mb-1 group-hover:text-primary transition-colors">Đường vỡ ống nước tại ngõ 12</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Ống nước sinh hoạt bị vỡ gây ngập úng nhẹ và lãng phí nước sạch kéo dài từ hôm qua.</p>
            </div>
            <div class="mt-auto pt-3 border-t border-surface-container flex justify-between items-center text-outline">
              <span class="font-label-sm text-label-sm flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">calendar_today</span> 12/10/2023</span>
              <span class="font-label-sm text-label-sm text-primary group-hover:underline">Xem chi tiết</span>
            </div>
          </div>

          <div [routerLink]="['/report/resolved/2']" class="bg-surface-container-lowest border border-outline-variant rounded-3xl p-card-padding flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
            <div class="flex justify-between items-start">
              <div class="flex items-center gap-2 text-secondary">
                <span class="material-symbols-outlined bg-secondary-container p-1.5 rounded-lg text-[20px] text-on-secondary-container">park</span>
                <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline">Môi trường</span>
              </div>
              <span class="bg-secondary-container text-on-secondary-container px-2.5 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px]">check_circle</span> Đã giải quyết
              </span>
            </div>
            <div>
              <h3 class="font-h3 text-h3 text-on-surface mb-1 group-hover:text-primary transition-colors">Rác thải sinh hoạt ứ đọng</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Điểm tập kết rác tại khu vực chợ tạm không được thu gom kịp thời gây mất vệ sinh.</p>
            </div>
            <div class="mt-auto pt-3 border-t border-surface-container flex justify-between items-center text-outline">
              <span class="font-label-sm text-label-sm flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">calendar_today</span> 05/10/2023</span>
              <span class="font-label-sm text-label-sm text-primary group-hover:underline">Xem kết quả</span>
            </div>
          </div>

          <div [routerLink]="['/report/detail/3']" class="bg-surface-container-lowest border border-outline-variant rounded-3xl p-card-padding flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
            <div class="flex justify-between items-start">
              <div class="flex items-center gap-2 text-error">
                <span class="material-symbols-outlined bg-error-container p-1.5 rounded-lg text-[20px] text-on-error-container">campaign</span>
                <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline">Trật tự</span>
              </div>
              <span class="bg-error-container text-on-error-container px-2.5 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px]">schedule</span> Chờ phản hồi
              </span>
            </div>
            <div>
              <h3 class="font-h3 text-h3 text-on-surface mb-1 group-hover:text-primary transition-colors">Tiếng ồn quá mức sau 10h đêm</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Cơ sở kinh doanh bật nhạc công suất lớn ảnh hưởng đến khu dân cư xung quanh.</p>
            </div>
            <div class="mt-auto pt-3 border-t border-surface-container flex justify-between items-center text-outline">
              <span class="font-label-sm text-label-sm flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">calendar_today</span> 15/10/2023</span>
              <span class="font-label-sm text-label-sm text-primary group-hover:underline">Xem chi tiết</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  `
})
export class ReportListComponent {}
