import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-report-ai-process',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-background text-on-background min-h-screen pb-section-gap font-body-md font-sans">
      <nav class="bg-surface-container-lowest border-b border-outline-variant shadow-sm fixed w-full top-0 z-50 flex justify-between items-center px-4 h-16">
        <div class="flex items-center gap-4">
          <button [routerLink]="['/admin/report/detail/1']" class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors">
            <span class="material-symbols-outlined">arrow_back</span>
          </button>
          <div class="flex items-center gap-3">
            <img alt="Admin" class="w-8 h-8 rounded-full border border-outline-variant/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf34MWWxwd_JiJsxsC7nx9GeTCFWle4eAZ42ao9Sp9YH7fWVgtTQCAn3Xazdnm-beH8NdbZwLF8XSSs7oYDBIXT7dypQOTmoRrCcnE7VNjQpEn-Pd9UxKaBhee1zeVImj3pCFSyratWYGhk_HeLgeprTlmjd1MbEvwZZ8HTxZWE4pVX_1sqmhPXLEP55c64N7pC7TKxEjG3NK-XBIFSN6lrAPMs93S4kQWItXoSHYH0YefWIfrmQny2QvZpgoTZS4VNHr0oRm0ahI"/>
            <span class="font-semibold text-primary text-lg tracking-tight">Xử lý phản ánh bằng AI</span>
          </div>
        </div>
      </nav>

      <main class="pt-24 px-container-margin max-w-3xl mx-auto">
        <section class="bg-surface-container-lowest rounded-3xl p-card-padding shadow-sm border border-outline-variant mb-section-gap relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1.5 bg-primary"></div>
          <div class="flex flex-wrap justify-between items-start gap-4 mb-4">
            <div>
              <h1 class="font-h2 text-h2 text-on-surface mb-1">Chi tiết phản ánh</h1>
              <div class="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                <span class="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>Tiếp nhận: Hôm nay, 09:42 AM</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 bg-surface-container text-primary font-label-sm text-label-sm rounded-full border border-primary-fixed-dim inline-flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px]">tag</span> PA-2025-00142
              </span>
            </div>
          </div>
        </section>

        <section>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center shadow-sm">
              <span class="material-symbols-outlined icon-fill">smart_toy</span>
            </div>
            <h2 class="font-h3 text-h3 text-on-surface">AI đề xuất các bước xử lý</h2>
          </div>

          <div class="relative ml-6 border-l-2 border-outline-variant/50 pb-8 space-y-10">
            <!-- Step 1 -->
            <div class="relative pl-10">
              <div class="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm border-4 border-background">
                <span class="material-symbols-outlined text-[18px]">edit_document</span>
              </div>
              <div class="bg-surface-container-lowest rounded-3xl border border-primary/20 shadow-sm p-6 relative -top-2">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="font-label-md text-label-md text-primary uppercase tracking-wider">Bước 1 (Yêu cầu duyệt)</h3>
                  <span class="bg-primary/10 text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-md">Tự động soạn thảo</span>
                </div>
                <h4 class="font-h3 text-h3 text-on-surface mb-4">Soạn thảo thông báo sẽ xử lý</h4>
                <div class="bg-surface-container-low p-5 rounded-2xl border-l-4 border-primary mb-6 relative">
                  <span class="material-symbols-outlined absolute top-4 right-4 text-outline-variant/30 text-[40px] icon-fill">format_quote</span>
                  <p class="font-body-md text-body-md text-on-surface-variant relative z-10 italic leading-relaxed">
                    "Chào ông An, phản ánh của ông về vấn đề hạ tầng tại khu vực đã được hệ thống tiếp nhận thành công. Chúng tôi đang tiến hành rà soát và sẽ cập nhật tiến độ sớm nhất..."
                  </p>
                </div>
                <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-outline-variant/50">
                  <button class="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary-container transition-colors flex items-center gap-2">
                    <span class="material-symbols-outlined text-[18px] icon-fill">check_circle</span> Phê duyệt
                  </button>
                  <button class="px-5 py-2.5 rounded-xl bg-surface-container-lowest text-primary border border-primary font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-2">
                    Chỉnh sửa
                  </button>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
             <div class="relative pl-10">
              <div class="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shadow-sm border-4 border-background">
                <span class="material-symbols-outlined text-[18px]">task_alt</span>
              </div>
              <div class="bg-surface-container-lowest rounded-3xl border border-outline-variant shadow-sm p-6 relative -top-2 opacity-70">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Bước 2</h3>
                </div>
                <h4 class="font-h3 text-h3 text-on-surface mb-2">Cập nhật trạng thái hoàn thành</h4>
                <p class="text-on-surface-variant font-body-sm">Đang chờ bước 1 hoàn thành.</p>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  `
})
export class AdminReportAIProcessComponent {}
