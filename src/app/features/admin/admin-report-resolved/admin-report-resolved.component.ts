import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-report-resolved',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-[#f4f7ff] text-on-background font-body-md text-body-md min-h-screen flex flex-col font-sans">
      <header class="bg-surface-container-lowest border-b border-outline-variant shadow-sm flex justify-between items-center w-full px-4 h-16 fixed top-0 z-50">
        <div class="flex items-center gap-3">
          <img alt="Admin" class="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf34MWWxwd_JiJsxsC7nx9GeTCFWle4eAZ42ao9Sp9YH7fWVgtTQCAn3Xazdnm-beH8NdbZwLF8XSSs7oYDBIXT7dypQOTmoRrCcnE7VNjQpEn-Pd9UxKaBhee1zeVImj3pCFSyratWYGhk_HeLgeprTlmjd1MbEvwZZ8HTxZWE4pVX_1sqmhPXLEP55c64N7pC7TKxEjG3NK-XBIFSN6lrAPMs93S4kQWItXoSHYH0YefWIfrmQny2QvZpgoTZS4VNHr0oRm0ahI"/>
          <span class="text-xl font-bold text-primary tracking-tight">Chủ tịch xã với Dân</span>
        </div>
      </header>

      <main class="flex-grow pt-24 pb-8 px-container-margin md:px-section-gap max-w-[1440px] mx-auto w-full flex flex-col gap-4">
        <div class="flex items-center gap-4 mb-4">
          <button [routerLink]="['/admin/reports']" class="p-2 rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant flex items-center justify-center">
            <span class="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 class="font-h2 text-h2 text-on-surface">Chi tiết phản ánh</h1>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div class="lg:col-span-8 flex flex-col gap-6">
            <section class="bg-surface-container-lowest rounded-3xl border border-outline-variant p-card-padding shadow-sm">
              <h2 class="font-h2 text-h2 text-on-surface mb-2">Đường liên thôn bị hỏng nặng</h2>
              <div class="flex flex-wrap items-center gap-4 text-on-surface-variant font-body-sm text-body-sm">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">category</span> Hạ tầng đô thị</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">calendar_today</span> 14/10/2023 08:30</span>
              </div>
            </section>

            <section class="bg-surface-container-lowest rounded-3xl border border-outline-variant p-card-padding flex items-center gap-4 shadow-sm">
              <img alt="Citizen" class="w-12 h-12 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs0BdhqMDv5WONywuY0XuDkzDarosuyq6_-oX0NEK7IoRgt6l-Ldw4EvyEEYpo-eo7SaKHFIHIDY0VGUznBUIMncKnp3byZAsHY7RZ_7KWxSeB-ryymDRChfIK35AEMx21ayBUk_2Jj25jsOHtlCh3326u90-9oihN8Z7iqUXgooqqTtoEh-y2QFx32F5fg_R46dVVEoU9RUbNWNWVWeGfUZv0T8Ndvr5CoVkrQn2QrElc6u4BOMJeQGunO9CEsBdCzBg6ySG5kQA"/>
              <div class="flex flex-col">
                <p class="font-body-md text-body-md text-on-surface font-semibold">Nguyễn Văn An</p>
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">0987 654 321 • Tổ 4, Khu phố 2, Phường Tân Phú</p>
              </div>
            </section>

            <section class="bg-surface-container-lowest rounded-3xl border border-outline-variant p-card-padding shadow-sm">
              <h2 class="font-h3 text-h3 text-on-surface mb-3">Kết quả xử lý</h2>
              <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                Phòng Quản lý Đô thị đã cử đội thi công xuống hiện trường khắc phục sự cố vỡ ống thoát nước tại ngã tư Lê Lợi - Nguyễn Huệ. Hiện tại, đường ống đã được thay thế mới, mặt đường đã được thảm lại nhựa và dọn dẹp sạch sẽ, đảm bảo an toàn giao thông và vệ sinh môi trường.
              </p>
              <div class="flex gap-3 overflow-x-auto pb-2">
                <div class="h-32 w-48 flex-shrink-0 rounded-2xl bg-surface-container-high border border-outline-variant overflow-hidden">
                  <img alt="Result" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnaTXbgWHsscJae4HWloTAu-7SelSQ7sS1y1lk9EW30R4AgulCXkB17_AYOufEoJhyu1ZOvT84y2hfz_XvUaZ3gzo0CZYVe_FUDb45yxanoweudIiACmq1qoL17cyhRPQvrVFWGz7D6GTfjxskx50uZXDFVaey358Pggt2lfordbvDCw_k45i8ug02YSHOQ2Ax7KKXcA6_vlgKq--kVhORl_4PMsfYsq52LAe0wBi-hYQw9UfNPPKWsFc0LmsdfG5601TSxNboXLo"/>
                </div>
              </div>
            </section>
            
            <section class="bg-surface-container-lowest rounded-3xl border border-outline-variant p-card-padding shadow-sm">
              <h2 class="font-h3 text-h3 text-on-surface mb-4">Tiến trình xử lý</h2>
              <div class="relative border-l-2 border-outline-variant ml-4 space-y-6">
                <div class="relative pl-6">
                  <div class="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-secondary text-white flex items-center justify-center">
                    <span class="material-symbols-outlined text-[14px]">check</span>
                  </div>
                  <div class="flex flex-col">
                    <span class="font-label-md text-label-md text-on-surface font-bold">Hoàn thành</span>
                    <span class="font-body-sm text-body-sm text-on-surface-variant">15/10/2023 10:45</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div class="lg:col-span-4 flex flex-col gap-6 relative">
            <div class="sticky top-24 flex flex-col gap-6">
              <section class="bg-surface-container-lowest rounded-3xl border border-outline-variant p-4 shadow-sm flex flex-col gap-3">
                <button class="w-full bg-primary text-on-primary py-3.5 px-4 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-primary-container transition-colors shadow-sm">
                  <span class="material-symbols-outlined icon-fill">refresh</span>
                  XỬ LÝ LẠI
                </button>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  `
})
export class AdminReportResolvedComponent {}
