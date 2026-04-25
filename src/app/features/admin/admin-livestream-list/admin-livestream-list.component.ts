import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-livestream-list',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-[#f4f7ff] text-on-background min-h-screen font-body-md font-sans">
      <header class="bg-surface-container-lowest border-b border-outline-variant/30 shadow-sm flex justify-between items-center w-full px-4 h-16 fixed top-0 z-50 md:pl-[19rem]">
        <div class="flex items-center gap-3">
          <img alt="Admin" class="w-8 h-8 rounded-full border border-outline-variant/50 " src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf34MWWxwd_JiJsxsC7nx9GeTCFWle4eAZ42ao9Sp9YH7fWVgtTQCAn3Xazdnm-beH8NdbZwLF8XSSs7oYDBIXT7dypQOTmoRrCcnE7VNjQpEn-Pd9UxKaBhee1zeVImj3pCFSyratWYGhk_HeLgeprTlmjd1MbEvwZZ8HTxZWE4pVX_1sqmhPXLEP55c64N7pC7TKxEjG3NK-XBIFSN6lrAPMs93S4kQWItXoSHYH0YefWIfrmQny2QvZpgoTZS4VNHr0oRm0ahI"/>
          <button [routerLink]="['/admin/dashboard']" class="">
             <span class="material-symbols-outlined">arrow_back</span>
          </button>
          <span class="text-xl font-bold text-primary tracking-tight">Chủ tịch xã với Dân</span>
        </div>
      </header>

      

      <main class=" pt-24 max-w-7xl mx-auto px-4 md:px-8 pb-12 w-full">
        <section class="mb-8 flex justify-between items-center">
            <h1 class="font-h1 text-h1 text-on-surface hidden md:block">Quản lý Livestream</h1>
            <button [routerLink]="['/admin/livestream/create']" class="w-full md:w-auto flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-3.5 rounded-xl shadow-sm hover:bg-primary-container active:scale-95 transition-all font-label-md">
              <span class="material-symbols-outlined text-[20px] icon-fill">videocam</span>
              Tạo lịch Livestream
            </button>
        </section>

        <nav class="flex border-b border-outline-variant/30 mb-8 overflow-x-auto">
          <button class="px-6 py-4 text-primary border-b-2 border-primary font-label-md text-label-md whitespace-nowrap">Sắp diễn ra</button>
          <button class="px-6 py-4 text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors whitespace-nowrap">Đã phát sóng</button>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div class="lg:col-span-12">
            <h2 class="font-h2 text-h2 text-on-surface flex items-center gap-2 mb-6">
              <span class="material-symbols-outlined text-primary">schedule</span>
              Sắp diễn ra
            </h2>
            <div class="bg-surface-container-lowest rounded-3xl border border-outline-variant/50 shadow-sm p-6 md:p-8 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
              <div class="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                <div class="flex-1">
                  <div class="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-md mb-4 border border-secondary/20">
                    <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    <span class="font-label-sm text-label-sm font-bold">Đã lên lịch</span>
                  </div>
                  <h3 class="font-h2 text-h2 text-on-surface mb-3">Đối thoại tháng 8: Quy hoạch khu dân cư mới</h3>
                  <div class="flex flex-wrap gap-5 text-on-surface-variant font-body-md text-body-md mb-4 bg-surface-container-high/30 inline-flex p-3 rounded-xl border border-outline-variant/20">
                    <p class="flex items-center gap-2 font-medium">
                      <span class="material-symbols-outlined text-primary text-[20px]">calendar_month</span> 01/08/2025
                    </p>
                    <div class="w-px h-5 bg-outline-variant/50"></div>
                    <p class="flex items-center gap-2 font-medium">
                      <span class="material-symbols-outlined text-primary text-[20px]">schedule</span> 20:00
                    </p>
                  </div>
                  <div class="flex items-center gap-2 text-secondary font-label-md">
                    <span class="material-symbols-outlined text-[18px]">how_to_reg</span>
                    Đã thông báo cho 1,247 người dân
                  </div>
                </div>
                <div class="flex flex-col gap-3 min-w-[160px]">
                  <button class="flex items-center justify-center gap-2 px-6 py-3 bg-primary-container text-on-primary-container rounded-xl font-label-md hover:bg-primary hover:text-on-primary transition-colors shadow-sm">
                    <span class="material-symbols-outlined text-[18px]">notifications_active</span> Nhắc lại
                  </button>
                  <button class="flex items-center justify-center gap-2 px-6 py-3 border border-outline-variant text-on-surface rounded-xl font-label-md hover:bg-surface-container transition-colors">
                    <span class="material-symbols-outlined text-[18px]">edit</span> Chỉnh sửa
                  </button>
                </div>
              </div>
            </div>
          </div>
          
           <div class="lg:col-span-12 mt-6">
            <h2 class="font-h2 text-h2 text-on-surface flex items-center gap-2 mb-6">
              <span class="material-symbols-outlined text-on-surface-variant">history</span>
              Đã phát sóng gần đây
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div class="bg-surface-container-lowest rounded-3xl border border-outline-variant/30 shadow-sm overflow-hidden group">
                  <div class="h-48 relative overflow-hidden bg-surface-container-highest">
                    <div class="absolute inset-0 bg-black/30 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span class="material-symbols-outlined text-white text-[48px]">play_circle</span>
                    </div>
                    <img alt="Thumbnail" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFIY1iTB8HhBpUxs5n8GB-Q-3rotvb5HAykvHZ7e9Uf4hr3JTyOx1LZ89CpdV1KFUSLhbJKSGnc08wkxUW-A1JcaiV0HuBQGThEsvyQ77sLYCmyARffVRPoc8wWxCk4bQwMW2JkEMOEIffUSrJ39pEVf8bfhvbNXOshKYgbbw61yJ-PA75Ye-TMPytChzCy0S4SbK9dbGVPEQJcEI-xAJt5xdHuv_QGXMnguSbpJqJdE0QbY2W7KMiaRAmTXnqHxYM-1ZFsUCMRY8"/>
                    <div class="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white font-label-sm text-[11px] rounded-md font-mono">45:12</div>
                  </div>
                  <div class="p-5 flex flex-col">
                    <div class="flex items-center justify-between mb-3 text-on-surface-variant">
                      <span class="font-label-sm text-label-sm font-medium">20/06/2025</span>
                      <div class="flex items-center gap-3">
                        <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">visibility</span> 2.4k</span>
                        <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">chat</span> 156</span>
                      </div>
                    </div>
                    <h4 class="font-h3 text-h3 text-on-surface mb-2 group-hover:text-primary transition-colors cursor-pointer line-clamp-1">Chính sách hỗ trợ nông nghiệp 2025</h4>
                    <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Nội dung tập trung vào các gói vay ưu đãi và công nghệ tưới tiêu mới cho khu vực cánh đồng phía Tây.</p>
                  </div>
               </div>
                 <div class="bg-surface-container-lowest rounded-3xl border border-outline-variant/30 shadow-sm overflow-hidden group">
                  <div class="h-48 relative overflow-hidden bg-surface-container-highest">
                    <div class="absolute inset-0 bg-black/30 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span class="material-symbols-outlined text-white text-[48px]">play_circle</span>
                    </div>
                    <img alt="Thumbnail" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK0lJvXn66gT1AL2EKVtxzT7NJNgEp-BecLVHMzaIALCDMc8Bo1R2AQgzh6rFzxIE0WTGkya3F3yJphz_yzB0kAahcekXPHmnBjL_v7RAp_o15xEDUyVjB6wOn6DAZmX_9QWs83M6v3KcJ5GkPjh0kbReJkzsHZhBYCNRlzKlBaLJ6QRfMxJFFE6I0K4IujHtzdhvUt-K4G5VFdFwokQl6pQIFlb_fSrwyI6SxyfNgn_jV2S6Dx9jJmTZ5gtfGvthXaI6JgzS-ezQ"/>
                    <div class="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white font-label-sm text-[11px] rounded-md font-mono">58:04</div>
                  </div>
                  <div class="p-5 flex flex-col">
                    <div class="flex items-center justify-between mb-3 text-on-surface-variant">
                      <span class="font-label-sm text-label-sm font-medium">15/05/2025</span>
                      <div class="flex items-center gap-3">
                        <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">visibility</span> 3.1k</span>
                        <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">chat</span> 242</span>
                      </div>
                    </div>
                    <h4 class="font-h3 text-h3 text-on-surface mb-2 group-hover:text-primary transition-colors cursor-pointer line-clamp-1">Đối thoại về dự án đường liên xã</h4>
                    <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Buổi họp công khai giải đáp thắc mắc về đền bù giải phóng mặt bằng và lộ trình thi công trục đường chính.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `
})
export class AdminLivestreamListComponent {}
