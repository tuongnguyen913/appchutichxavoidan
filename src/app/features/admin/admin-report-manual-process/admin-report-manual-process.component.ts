import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-report-manual-process',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-background text-on-background antialiased flex justify-center min-h-screen font-sans">
      <div class="w-full max-w-3xl bg-surface-container-lowest relative min-h-screen flex flex-col shadow-2xl border-x border-outline-variant/30">
        <header class="flex items-center px-4 h-16 bg-surface-container-lowest border-b border-outline-variant/50 sticky top-0 z-30">
          <button [routerLink]="['/admin/report/detail/1']" class="p-2 -ml-2 mr-2 text-on-surface hover:bg-surface-container rounded-full transition-colors">
            <span class="material-symbols-outlined block">arrow_back</span>
          </button>
          <h1 class="font-h3 text-h3 text-on-surface flex-1 font-bold">Xử lý phản ánh thủ công</h1>
        </header>

        <main class="flex-1 p-6 pb-28 flex flex-col gap-6">
          <section class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant shadow-sm border-l-4 border-l-primary">
            <div class="flex justify-between items-start mb-3">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-[20px] icon-fill">assignment</span>
                <span class="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">ID #PA-2025-00142</span>
              </div>
              <span class="px-3 py-1 bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm rounded-lg border border-outline-variant/50">
                Đang chờ xử lý
              </span>
            </div>
            <h2 class="font-h2 text-h2 text-on-surface mb-3">Hệ thống đèn chiếu sáng công cộng không hoạt động</h2>
            <div class="flex flex-col gap-2 mt-2">
              <div class="flex items-start gap-3">
                <span class="material-symbols-outlined text-outline text-[18px] mt-0.5">location_on</span>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Hẻm 42 Trần Phú, Phường 4, Quận 5. Từ đầu hẻm vào khoảng 50m.</p>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-outline text-[18px]">calendar_today</span>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Gửi lúc 08:45, 24/10/2023</p>
              </div>
            </div>
          </section>

          <section class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant shadow-sm flex flex-col gap-6">
            <div>
              <h3 class="font-h3 text-h3 text-on-surface mb-1">Báo cáo kết quả</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant">Cung cấp thông tin chi tiết về quá trình và kết quả xử lý phản ánh này.</p>
            </div>
            <div class="flex flex-col gap-2">
              <label class="font-label-md text-label-md text-on-surface flex items-center gap-1">
                Nội dung phản hồi <span class="text-error">*</span>
              </label>
              <textarea class="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-1 focus:ring-primary transition-shadow resize-y outline-none" placeholder="Trình bày chi tiết các bước đã thực hiện, kết quả đạt được, và biện pháp khắc phục (nếu có)..." rows="6"></textarea>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex justify-between items-end">
                <label class="font-label-md text-label-md text-on-surface">Đính kèm bằng chứng</label>
                <span class="font-label-sm text-label-sm text-outline">Tùy chọn</span>
              </div>
              <div class="grid grid-cols-3 gap-4">
                <button class="flex flex-col items-center justify-center gap-2 aspect-square rounded-2xl border-2 border-dashed border-outline-variant/70 bg-surface-container-lowest hover:bg-surface-container hover:border-primary text-on-surface-variant hover:text-primary transition-all group" type="button">
                  <div class="w-12 h-12 rounded-full bg-surface-container-high group-hover:bg-primary-container flex items-center justify-center transition-colors">
                    <span class="material-symbols-outlined icon-fill">image</span>
                  </div>
                  <span class="font-label-sm text-label-sm">Ảnh</span>
                </button>
                <button class="flex flex-col items-center justify-center gap-2 aspect-square rounded-2xl border-2 border-dashed border-outline-variant/70 bg-surface-container-lowest hover:bg-surface-container hover:border-primary text-on-surface-variant hover:text-primary transition-all group" type="button">
                  <div class="w-12 h-12 rounded-full bg-surface-container-high group-hover:bg-primary-container flex items-center justify-center transition-colors">
                    <span class="material-symbols-outlined icon-fill">videocam</span>
                  </div>
                  <span class="font-label-sm text-label-sm">Video</span>
                </button>
                <button class="flex flex-col items-center justify-center gap-2 aspect-square rounded-2xl border-2 border-dashed border-outline-variant/70 bg-surface-container-lowest hover:bg-surface-container hover:border-primary text-on-surface-variant hover:text-primary transition-all group" type="button">
                  <div class="w-12 h-12 rounded-full bg-surface-container-high group-hover:bg-primary-container flex items-center justify-center transition-colors">
                    <span class="material-symbols-outlined icon-fill">description</span>
                  </div>
                  <span class="font-label-sm text-label-sm">Tệp tin</span>
                </button>
              </div>
              <p class="font-body-sm text-body-sm text-outline flex items-center gap-1.5 mt-1">
                <span class="material-symbols-outlined text-[16px]">info</span>
                Định dạng hỗ trợ: JPG, PNG, MP4, PDF. Tối đa 25MB/tệp.
              </p>
            </div>
          </section>
        </main>

        <div class="fixed bottom-0 left-0 right-0 max-w-3xl mx-auto w-full p-4 bg-surface-container-lowest border-t border-outline-variant z-40 shadow-[0_-8px_16px_rgba(0,0,0,0.03)] border-x border-outline-variant/30">
          <div class="flex gap-4">
            <button class="flex-1 py-4 px-4 rounded-xl border border-outline-variant font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors text-center" type="button">
                Lưu nháp
            </button>
            <button class="flex-[2] py-4 px-4 rounded-xl bg-primary font-label-md text-label-md text-on-primary hover:bg-primary-container transition-colors flex items-center justify-center gap-2 shadow-sm" type="button">
              <span class="material-symbols-outlined text-[18px] icon-fill">send</span>
              Gửi phản hồi
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AdminReportManualProcessComponent {}
