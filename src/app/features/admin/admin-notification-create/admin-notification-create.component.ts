import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-notification-create',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-[#f4f7ff] font-body-md text-body-md min-h-screen font-sans flex flex-col md:flex-row">
      <header class="flex justify-between items-center w-full px-4 h-16 fixed top-0 z-50 bg-surface-container-lowest border-b border-outline-variant/30 shadow-sm ">
        <div class="flex items-center gap-3">
          <img alt="Admin" class="w-8 h-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf34MWWxwd_JiJsxsC7nx9GeTCFWle4eAZ42ao9Sp9YH7fWVgtTQCAn3Xazdnm-beH8NdbZwLF8XSSs7oYDBIXT7dypQOTmoRrCcnE7VNjQpEn-Pd9UxKaBhee1zeVImj3pCFSyratWYGhk_HeLgeprTlmjd1MbEvwZZ8HTxZWE4pVX_1sqmhPXLEP55c64N7pC7TKxEjG3NK-XBIFSN6lrAPMs93S4kQWItXoSHYH0YefWIfrmQny2QvZpgoTZS4VNHr0oRm0ahI"/>
          <span class="text-xl font-bold text-primary tracking-tight">Chủ tịch xã với Dân</span>
        </div>
      </header>

      

      <main class="flex-1 p-4 md:p-8 max-w-4xl mx-auto pt-20  w-full">
        <div class="flex items-center gap-4 mb-6">
          <button [routerLink]="['/admin/notifications']" class="p-2 rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant flex items-center justify-center">
            <span class="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <h1 class="font-h2 text-h2 text-on-surface">Phát thông báo đến dân</h1>
        </div>

        <form class="space-y-6">
          <section class="bg-surface-container-lowest p-card-padding rounded-3xl shadow-sm border border-outline-variant/30">
            <h3 class="font-h3 text-h3 text-on-surface mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">category</span>
              Loại thông báo
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <label class="relative flex flex-col items-center p-4 cursor-pointer rounded-2xl border-2 border-outline-variant hover:border-primary-container bg-surface-container-highest/20 transition-all">
                <input checked class="sr-only peer" name="alert_type" type="radio" value="thong_bao"/>
                <span class="material-symbols-outlined text-primary mb-2 peer-checked:text-primary-container icon-fill" >info</span>
                <span class="font-label-md text-label-md text-on-surface text-center">Thông báo</span>
                <div class="absolute inset-0 border-2 border-transparent rounded-2xl peer-checked:border-primary-container pointer-events-none"></div>
                <div class="absolute top-3 right-3 w-4 h-4 rounded-full border border-outline peer-checked:border-[4px] peer-checked:border-primary-container"></div>
              </label>

               <label class="relative flex flex-col items-center p-4 cursor-pointer rounded-2xl border-2 border-outline-variant hover:border-error bg-surface-container-highest/20 transition-all">
                <input class="sr-only peer" name="alert_type" type="radio" value="khan_cap"/>
                <span class="material-symbols-outlined text-error mb-2 peer-checked:text-error icon-fill">warning</span>
                <span class="font-label-md text-label-md text-on-surface text-center">Khẩn cấp</span>
                <div class="absolute inset-0 border-2 border-transparent rounded-2xl peer-checked:border-error pointer-events-none"></div>
                <div class="absolute top-3 right-3 w-4 h-4 rounded-full border border-outline peer-checked:border-[4px] peer-checked:border-error"></div>
              </label>
            </div>
          </section>

          <section class="bg-surface-container-lowest p-card-padding rounded-3xl shadow-sm border border-outline-variant/30">
            <h3 class="font-h3 text-h3 text-on-surface mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">edit_document</span>
              Nội dung thông báo
            </h3>
            <div class="space-y-4">
              <div>
                <label class="block font-label-md text-label-md text-on-surface mb-1">Tiêu đề <span class="text-error">*</span></label>
                <input class="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-3.5 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline" placeholder="Nhập tiêu đề ngắn gọn, rõ ràng..." required type="text"/>
              </div>
              <div>
                <div class="flex justify-between items-end mb-1">
                  <label class="block font-label-md text-label-md text-on-surface">Nội dung chi tiết <span class="text-error">*</span></label>
                  <button class="text-primary hover:bg-surface-container p-1.5 rounded-lg flex items-center gap-1 transition-colors" type="button">
                    <span class="material-symbols-outlined text-[18px]">attach_file</span>
                    <span class="font-label-sm text-label-sm">Đính kèm</span>
                  </button>
                </div>
                <textarea class="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-3.5 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-y placeholder:text-outline" placeholder="Nhập nội dung chi tiết thông báo..." required rows="6"></textarea>
              </div>
            </div>
          </section>

          <section class="bg-surface-container-lowest p-card-padding rounded-3xl shadow-sm border border-outline-variant/30">
            <h3 class="font-h3 text-h3 text-on-surface mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">schedule</span>
              Thời gian gửi
            </h3>
             <div class="space-y-4">
              <div class="flex gap-6">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input checked class="w-4 h-4 text-primary focus:ring-primary border-outline-variant" name="schedule" type="radio" value="now"/>
                  <span class="font-body-md text-body-md text-on-surface font-medium">Gửi ngay</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer opacity-50">
                  <input disabled class="w-4 h-4 text-primary focus:ring-primary border-outline-variant" name="schedule" type="radio" value="later"/>
                  <span class="font-body-md text-body-md text-on-surface">Lên lịch</span>
                </label>
              </div>
             </div>
          </section>

          <div class="flex flex-col sm:flex-row justify-end gap-3 mt-8 pt-6 border-t border-outline-variant/30 mb-8">
            <button class="px-6 py-3.5 rounded-xl border border-primary text-primary font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center justify-center gap-2" type="button">
              <span class="material-symbols-outlined text-[20px]">visibility</span>
              Xem trước
            </button>
            <button class="px-6 py-3.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors flex items-center justify-center gap-2 shadow-sm" type="button">
              <span class="material-symbols-outlined text-[20px] icon-fill">send</span>
              Phát thông báo
            </button>
          </div>
        </form>
      </main>
    </div>
  `
})
export class AdminNotificationCreateComponent {}
