import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-report-resolved',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-[#f4f7ff] min-h-screen pb-8 font-sans">
      <header class="sticky top-0 w-full z-50 flex items-center px-4 h-16 bg-surface-container-lowest border-b border-surface-container-high shadow-sm">
        <button [routerLink]="['/reports']" class="p-2 -ml-2 text-primary active:opacity-70 transition-opacity hover:bg-surface-container-low rounded-full">
          <span class="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
        </button>
        <h1 class="font-h3 text-h3 font-semibold text-primary ml-2">Chi tiết phản ánh</h1>
      </header>

      <main class="max-w-2xl mx-auto px-container-margin py-gutter space-y-gutter">
        <section class="bg-surface-container-lowest rounded-3xl p-card-padding border border-outline-variant shadow-sm">
          <div class="flex justify-between items-start mb-3">
            <span class="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm flex items-center gap-1">
              <span class="material-symbols-outlined text-[14px] icon-fill">check_circle</span>
              Đã giải quyết
            </span>
            <span class="text-on-surface-variant font-label-sm">#PA-2025-00142</span>
          </div>
          <h2 class="font-h3 text-h3 text-on-surface mb-2">Đường liên thôn bị hỏng nặng</h2>
          <div class="flex flex-wrap gap-y-2 gap-x-4">
            <div class="flex items-center gap-1.5 text-on-surface-variant font-body-sm">
              <span class="material-symbols-outlined text-sm">category</span>
              Hạ tầng
            </div>
            <div class="flex items-center gap-1.5 text-on-surface-variant font-body-sm">
              <span class="material-symbols-outlined text-sm">location_on</span>
              Thôn 3, xã Yên Bình
            </div>
          </div>
        </section>

        <section class="bg-surface-container-lowest rounded-3xl border border-secondary border-opacity-20 shadow-sm overflow-hidden">
          <div class="bg-secondary/5 px-card-padding py-3 border-b border-secondary border-opacity-10 flex items-center gap-2">
            <span class="material-symbols-outlined text-secondary">task_alt</span>
            <h3 class="font-label-md text-secondary">Kết quả giải quyết</h3>
          </div>
          <div class="p-card-padding">
            <p class="text-on-surface font-body-md mb-4 leading-relaxed">
              UBND xã đã phối hợp với đơn vị thi công hoàn thành việc thảm nhựa và san lấp các ổ gà tại tuyến đường liên thôn 3 vào chiều ngày 14/10/2023. Cảm ơn bà con đã phản ánh kịp thời.
            </p>
            <div class="grid grid-cols-2 gap-3">
              <div class="aspect-video rounded-lg overflow-hidden border border-outline-variant">
                <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjNEn0mqwZFUsffe2Qf9lZfGLb5FQw85rSs0qh6p0gtbtZtvV51tSfqUonCL8H74lOIJkSaF_8m8Yh61wQ3S7U_0swp0etwYvkOGoZPc5GBSLeE3n0CUd0jxhuE02cLbuieMim-PVTyeWXQJn_jAhT2RvPVpE_qhVvyhNBcMXBqVN150ppPZ2i1FL4nV9w1cTHITOsUzxOIkKxf3nmG7pfwicXwp63-dgnuYZV8TRvr_syYlceRWyL1qThxLzFx29UgsyB4Bk4SRY" />
              </div>
              <div class="aspect-video rounded-lg overflow-hidden border border-outline-variant">
                <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVcqLN8yLygy9p2Q2cMnUZdMb0bqF441I3VWbxGaQC5bbDYJqhj7LdTaDmkXeoNA9313F7Ljk-nRlUEwxTnTttkUrjaHXxsVC4CKEGwWsVxoasHVjmzgwQmNnybWkHpzg5NsoQcBOLh4qHanX3J2NY66QLOvRo0TMFf3NNrLkNWSO1P7rpgTr7x7KTzTaob6QHa98apO5NzlkUDBJgB-aB4Fr-U8txtA0Lcm9V6jW7W7biannoFyFFQW1woQ-jSOJAib3Ls73rGGs" />
              </div>
            </div>
          </div>
        </section>

        <section class="bg-surface-container-lowest rounded-3xl p-card-padding border border-outline-variant">
          <h3 class="font-label-md text-on-surface mb-6">Trạng thái xử lý</h3>
          <div class="space-y-6 relative">
            <div class="absolute left-[11px] top-6 bottom-6 w-0.5 bg-secondary z-0"></div>
            
            <div class="flex gap-4 relative z-10">
              <div class="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-[16px]">check</span>
              </div>
              <div>
                <p class="font-label-md text-on-surface">Đã gửi phản ánh</p>
                <p class="font-body-sm text-on-surface-variant">08:30, 12/10/2023</p>
              </div>
            </div>
            
            <div class="flex gap-4 relative z-10">
              <div class="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-[16px]">check</span>
              </div>
              <div>
                <p class="font-label-md text-on-surface">Đang xử lý</p>
                <p class="font-body-sm text-on-surface-variant">14:15, 13/10/2023</p>
              </div>
            </div>
            
            <div class="flex gap-4 relative z-10">
              <div class="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-[16px]">check</span>
              </div>
              <div>
                <p class="font-label-md text-on-surface">Hoàn thành</p>
                <p class="font-body-sm text-on-surface-variant">16:45, 14/10/2023</p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-surface-container rounded-3xl p-card-padding border border-primary-container border-opacity-10 shadow-sm">
          <div class="text-center mb-6">
            <h3 class="font-h3 text-on-surface mb-1">Bạn có hài lòng không?</h3>
            <p class="text-on-surface-variant font-body-sm">Đánh giá của bạn giúp chúng tôi nâng cao chất lượng phục vụ</p>
          </div>
          <div class="flex justify-center gap-2 mb-6">
            <button class="text-yellow-500 transition-transform active:scale-90">
              <span class="material-symbols-outlined text-[40px] icon-fill">star</span>
            </button>
            <button class="text-yellow-500 transition-transform active:scale-90">
              <span class="material-symbols-outlined text-[40px] icon-fill">star</span>
            </button>
            <button class="text-yellow-500 transition-transform active:scale-90">
              <span class="material-symbols-outlined text-[40px] icon-fill">star</span>
            </button>
            <button class="text-yellow-500 transition-transform active:scale-90">
              <span class="material-symbols-outlined text-[40px] icon-fill">star</span>
            </button>
            <button class="text-gray-300 transition-transform active:scale-90">
              <span class="material-symbols-outlined text-[40px]">star</span>
            </button>
          </div>
          <div class="space-y-4">
            <div class="flex flex-col gap-2">
              <label class="font-label-sm text-on-surface ml-1">Ý kiến phản hồi (tùy chọn)</label>
              <textarea class="w-full bg-surface-container-lowest border border-outline rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none placeholder-outline-variant" placeholder="Chia sẻ thêm cảm nhận của bạn..." rows="3"></textarea>
            </div>
            <button class="w-full bg-primary-container text-white py-4 rounded-xl font-label-md shadow-md hover:bg-primary active:opacity-90 transition-all flex items-center justify-center gap-2">
              Gửi đánh giá
            </button>
          </div>
        </section>
      </main>
    </div>
  `
})
export class ReportResolvedComponent {}
