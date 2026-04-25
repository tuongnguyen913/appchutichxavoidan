import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-report-new',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-[#f4f7ff] font-sans min-h-screen pb-24 md:pb-0">
      <header class="bg-surface-container-lowest border-b border-surface-container-highest shadow-sm top-0 sticky z-50">
        <div class="flex flex-col justify-between items-start w-full px-4 py-3 max-w-7xl mx-auto md:h-16 md:flex-row md:items-center">
          <div class="flex items-center gap-3 w-full md:w-auto mb-3 md:mb-0">
            <button [routerLink]="['/home']" class="text-on-surface hover:bg-surface-container-low p-2 rounded-full transition-colors flex items-center justify-center" type="button">
              <span class="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 class="text-on-surface font-h3 font-bold">Gửi phản ánh mới</h1>
          </div>
        </div>
      </header>

      <main class="max-w-3xl mx-auto px-4 py-6 md:py-8 space-y-6">
        <form (ngSubmit)="onSubmit($event)" class="space-y-6 bg-surface-container-lowest rounded-3xl p-5 md:p-6 shadow-sm border border-outline-variant">
          <section class="space-y-3">
            <label class="block font-label-md text-on-surface">Lĩnh vực <span class="text-error">*</span></label>
            <div class="flex flex-wrap gap-2">
              <label class="cursor-pointer">
                <input class="peer sr-only" name="category" type="radio" checked/>
                <span class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-outline-variant bg-surface text-on-surface font-label-sm peer-checked:bg-primary-container peer-checked:text-on-primary peer-checked:border-primary-container hover:bg-surface-container transition-colors">
                  <span class="material-symbols-outlined text-[18px]">construction</span>
                  Hạ tầng
                </span>
              </label>
              <label class="cursor-pointer">
                <input class="peer sr-only" name="category" type="radio"/>
                <span class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-outline-variant bg-surface text-on-surface font-label-sm peer-checked:bg-primary-container peer-checked:text-on-primary peer-checked:border-primary-container hover:bg-surface-container transition-colors">
                  <span class="material-symbols-outlined text-[18px]">eco</span>
                  Môi trường
                </span>
              </label>
              <label class="cursor-pointer">
                <input class="peer sr-only" name="category" type="radio"/>
                <span class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-outline-variant bg-surface text-on-surface font-label-sm peer-checked:bg-primary-container peer-checked:text-on-primary peer-checked:border-primary-container hover:bg-surface-container transition-colors">
                  <span class="material-symbols-outlined text-[18px]">local_police</span>
                  An ninh
                </span>
              </label>
              <label class="cursor-pointer">
                <input class="peer sr-only" name="category" type="radio"/>
                <span class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-outline-variant bg-surface text-on-surface font-label-sm peer-checked:bg-primary-container peer-checked:text-on-primary peer-checked:border-primary-container hover:bg-surface-container transition-colors">
                  <span class="material-symbols-outlined text-[18px]">medical_services</span>
                  Y tế
                </span>
              </label>
            </div>
          </section>

          <section class="space-y-2">
            <label class="block font-label-md text-on-surface" for="title">Tiêu đề <span class="text-error">*</span></label>
            <input class="w-full rounded-lg border border-outline-variant bg-surface-bright focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none font-body-sm text-on-surface p-3 placeholder:text-outline" id="title" placeholder="Nhập tiêu đề ngắn gọn về vấn đề..." type="text"/>
          </section>

          <section class="space-y-2">
            <div class="flex justify-between items-baseline">
              <label class="block font-label-md text-on-surface" for="description">Nội dung <span class="text-error">*</span></label>
              <span class="font-body-sm text-outline">0/500</span>
            </div>
            <textarea class="w-full rounded-lg border border-outline-variant bg-surface-bright focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none font-body-sm text-on-surface p-3 placeholder:text-outline" id="description" placeholder="Mô tả chi tiết vấn đề bạn đang gặp phải..." rows="5"></textarea>
          </section>

          <section class="space-y-3">
            <label class="block font-label-md text-on-surface">Đính kèm</label>
            <div class="grid grid-cols-3 gap-3">
              <button class="flex flex-col items-center justify-center gap-2 py-4 border border-dashed border-outline-variant rounded-xl bg-surface-bright hover:bg-surface-container-low hover:border-primary-container transition-colors text-on-surface-variant" type="button">
                <span class="material-symbols-outlined text-[28px] text-primary-container">add_photo_alternate</span>
                <span class="font-label-sm">+ Ảnh</span>
              </button>
              <button class="flex flex-col items-center justify-center gap-2 py-4 border border-dashed border-outline-variant rounded-xl bg-surface-bright hover:bg-surface-container-low hover:border-primary-container transition-colors text-on-surface-variant" type="button">
                <span class="material-symbols-outlined text-[28px] text-primary-container">video_call</span>
                <span class="font-label-sm">+ Video</span>
              </button>
              <button class="flex flex-col items-center justify-center gap-2 py-4 border border-dashed border-outline-variant rounded-xl bg-surface-bright hover:bg-surface-container-low hover:border-primary-container transition-colors text-on-surface-variant" type="button">
                <span class="material-symbols-outlined text-[28px] text-primary-container">attach_file</span>
                <span class="font-label-sm">+ File</span>
              </button>
            </div>
          </section>

          <section class="space-y-3">
            <label class="block font-label-md text-on-surface">Vị trí <span class="text-error">*</span></label>
            <div class="mb-3">
              <label class="block font-label-sm text-on-surface-variant mb-1.5" for="specific-address">Địa chỉ cụ thể <span class="text-error">*</span></label>
              <input class="w-full rounded-lg border border-outline-variant bg-surface-bright focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none font-body-sm text-on-surface p-3 placeholder:text-outline" id="specific-address" placeholder="Số nhà, tên đường, phường/xã..." type="text"/>
            </div>
            <div class="relative h-40 rounded-xl overflow-hidden border border-outline-variant">
              <img alt="Map Preview" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDloGABytg8ilcoRrzrXpTq2cslh3rhKB3R_-Za_5CF2adtYBlrX4HYuZdun6XpsyaTWzw8BoKTidgUefP8mo4qOFDfdCxQmlPyTk53v87EbIUePwVJYVZcux00mvE1Yr3KhhOJAHcFDPpA6ea5NcxHfwBvMiavxvao-APH1KVx-k2j8pukNQ6k9z4MSfEMn_u_2QTsChqWgtMlS_3SupRAo8GcwaHMiSSnCHdz6bSco2by2AygGF2HpVKkToYsHwyt6ZiI4cw__ZY"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                <p class="text-on-primary font-body-sm drop-shadow-md line-clamp-1 pr-2">Chưa chọn vị trí</p>
                <button class="shrink-0 flex items-center gap-1.5 bg-surface-container-lowest text-primary-container px-3 py-1.5 rounded-full font-label-sm shadow-sm hover:bg-surface transition-colors" type="button">
                  <span class="material-symbols-outlined text-[16px]">my_location</span>
                  Dùng vị trí hiện tại
                </button>
              </div>
            </div>
          </section>

          <section class="space-y-3 pt-2">
            <label class="block font-label-md text-on-surface">Mức độ ưu tiên</label>
            <div class="flex flex-col sm:flex-row gap-3">
              <label class="flex-1 cursor-pointer">
                <input checked class="peer sr-only" name="priority" type="radio" value="normal"/>
                <div class="px-4 py-3 rounded-lg border border-outline-variant bg-surface flex items-center gap-3 peer-checked:border-primary-container peer-checked:bg-primary-fixed peer-checked:ring-1 peer-checked:ring-primary-container transition-all">
                  <div class="w-4 h-4 rounded-full border-2 border-outline peer-checked:border-primary-container flex items-center justify-center">
                    <div class="w-2 h-2 rounded-full bg-primary-container opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <div class="flex flex-col">
                    <span class="font-label-md text-on-surface">Thường</span>
                    <span class="font-body-sm text-on-surface-variant text-xs">3-5 ngày</span>
                  </div>
                </div>
              </label>
              <label class="flex-1 cursor-pointer">
                <input class="peer sr-only" name="priority" type="radio" value="urgent"/>
                <div class="px-4 py-3 rounded-lg border border-outline-variant bg-surface flex items-center gap-3 peer-checked:border-secondary-container peer-checked:bg-secondary-fixed peer-checked:ring-1 peer-checked:ring-secondary-container transition-all">
                  <div class="w-4 h-4 rounded-full border-2 border-outline peer-checked:border-secondary-container flex items-center justify-center">
                    <div class="w-2 h-2 rounded-full bg-secondary-container opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <div class="flex flex-col">
                    <span class="font-label-md text-on-surface">Cần xử lý</span>
                    <span class="font-body-sm text-on-surface-variant text-xs">1-2 ngày</span>
                  </div>
                </div>
              </label>
            </div>
          </section>

          <section class="space-y-2">
            <label class="block font-label-md text-on-surface" for="resolution">Mong muốn được giải quyết <span class="text-error">*</span></label>
            <textarea class="w-full rounded-lg border border-outline-variant bg-surface-bright focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none font-body-sm text-on-surface p-3 placeholder:text-outline" id="resolution" placeholder="Bạn mong muốn cơ quan chức năng hỗ trợ/giải quyết như thế nào?..." rows="3"></textarea>
          </section>

          <div class="pt-4 border-t border-surface-container-highest">
            <button class="w-full bg-primary-container text-on-primary font-label-md py-3.5 px-6 rounded-lg hover:bg-surface-tint active:bg-primary transition-colors flex items-center justify-center gap-2 shadow-sm" type="submit">
              <span class="material-symbols-outlined text-[20px]">send</span>
              Gửi phản ánh
            </button>
          </div>
        </form>
      </main>
    </div>
  `
})
export class ReportNewComponent {
  constructor(private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.router.navigate(['/report/success']);
  }
}
