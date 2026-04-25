import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-report-detail',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-background text-on-background font-body-md text-body-md min-h-screen flex flex-col font-sans">
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
            <section class="bg-surface-container-lowest rounded-3xl border border-outline-variant p-card-padding shadow-sm flex flex-col gap-3">
              <div>
                <h2 class="font-h2 text-h2 text-on-surface mb-1">Đường liên thôn bị hỏng nặng</h2>
                <div class="flex items-center gap-3 mb-2">
                  <span class="font-body-md text-body-md text-on-surface-variant">#PA-2025-00142</span>
                </div>
                <div class="flex flex-wrap items-center gap-4 text-on-surface-variant font-body-sm text-body-sm">
                  <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">category</span> Hạ tầng đô thị</span>
                  <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">calendar_today</span> 14/10/2023 08:30</span>
                </div>
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
              <h2 class="font-h3 text-h3 text-on-surface mb-3">Nội dung phản ánh</h2>
              <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                Kính gửi cơ quan chức năng, hiện tại đường ống thoát nước tại ngã tư Lê Lợi - Nguyễn Huệ đang bị vỡ nghiêm trọng, nước bẩn tràn ra đường gây ách tắc giao thông và ô nhiễm môi trường. Đã xảy ra 2 vụ va quẹt xe máy do trơn trượt. Đề nghị cử người xuống khắc phục ngay.
              </p>
              <div class="flex gap-3 overflow-x-auto pb-2">
                <div class="h-32 w-48 flex-shrink-0 rounded-2xl bg-surface-container-high border border-outline-variant overflow-hidden">
                   <img alt="Evidence 1" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb3I8_yv5DFUoiod0tOpA7agFdl2WI0B-gUgoFRr-5n6kGEx1bi_Lw2lWoACG9uaOXEn6-HO7QnNu3ZG6mJukVPzOi3yefkdK5NaEetyNueyrtS5LcxiWx-qq7wr16_t4P4O0dba5iiG7GOdKKD9CooOh8DFLdR89t_Ggh2L9aRJNIvnm9D_dMChaC2LP6_hg9xtZ3JPKO3a0eL-xSeB601zJ7vLTFqv009HulOZy0GQNAABqlwjRFNJ680SM3mH9exSjQgw_i-UU"/>
                </div>
              </div>
            </section>
          </div>

          <div class="lg:col-span-4 flex flex-col gap-6 relative">
            <div class="sticky top-24 flex flex-col gap-6">
              <section class="bg-primary-fixed-dim rounded-3xl border border-primary/30 p-card-padding shadow-sm relative overflow-hidden">
                <div class="absolute -right-8 -top-8 text-primary opacity-10">
                  <span class="material-symbols-outlined text-[120px] icon-fill">smart_toy</span>
                </div>
                <div class="flex items-center gap-2 mb-3 relative z-10">
                  <span class="material-symbols-outlined text-primary text-[28px] icon-fill">robot_2</span>
                  <h2 class="font-h3 text-h3 text-on-primary-container">AI Phân tích</h2>
                </div>
                <div class="space-y-2 relative z-10">
                  <div class="bg-surface-container-lowest/80 rounded-xl p-3 border border-outline-variant/30 flex justify-between items-center">
                    <span class="font-body-sm text-body-sm text-on-surface-variant">Phân loại</span>
                    <span class="font-label-md text-label-md text-on-surface">Hạ tầng cấp thoát nước</span>
                  </div>
                  <div class="bg-surface-container-lowest/80 rounded-xl p-3 border border-outline-variant/30 flex justify-between items-center">
                    <span class="font-body-sm text-body-sm text-on-surface-variant">Độ tin cậy</span>
                    <span class="font-label-md text-label-md text-secondary flex items-center gap-1">
                      <span class="material-symbols-outlined text-[16px] icon-fill">check_circle</span> 98%
                    </span>
                  </div>
                </div>
              </section>

              <section class="bg-surface-container-lowest rounded-3xl border border-outline-variant p-4 shadow-sm flex flex-col gap-3">
                <button [routerLink]="['/admin/report/ai-process/1']" class="w-full bg-primary text-on-primary py-3.5 px-4 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-primary-container transition-colors shadow-sm">
                  <span class="material-symbols-outlined icon-fill">smart_toy</span>
                  🤖 ĐỂ AI XỬ LÝ
                </button>
                <button [routerLink]="['/admin/report/manual-process/1']" class="w-full bg-surface-container-lowest text-on-surface border border-outline-variant py-3.5 px-4 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-surface-container transition-colors">
                  <span class="material-symbols-outlined icon-fill">edit_square</span>
                  ✍️ TỰ XỬ LÝ
                </button>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  `
})
export class AdminReportDetailComponent {}
