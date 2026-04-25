import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-chat-list',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-[#f4f7ff] text-on-background min-h-screen flex flex-col md:flex-row font-sans">
      <header class="flex justify-between items-center w-full px-4 h-16 fixed top-0 z-50 bg-surface-container-lowest border-b border-outline-variant/30 shadow-sm ">
        <div class="flex items-center gap-3">
          <img alt="Admin" class="w-8 h-8 rounded-full border border-outline-variant/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf34MWWxwd_JiJsxsC7nx9GeTCFWle4eAZ42ao9Sp9YH7fWVgtTQCAn3Xazdnm-beH8NdbZwLF8XSSs7oYDBIXT7dypQOTmoRrCcnE7VNjQpEn-Pd9UxKaBhee1zeVImj3pCFSyratWYGhk_HeLgeprTlmjd1MbEvwZZ8HTxZWE4pVX_1sqmhPXLEP55c64N7pC7TKxEjG3NK-XBIFSN6lrAPMs93S4kQWItXoSHYH0YefWIfrmQny2QvZpgoTZS4VNHr0oRm0ahI"/>
           <button [routerLink]="['/admin/dashboard']" class="">
             <span class="material-symbols-outlined">arrow_back</span>
          </button>
          <span class="text-xl font-bold text-primary tracking-tight">Chủ tịch xã với Dân</span>
        </div>
      </header>

      

      <main class="flex-1 overflow-y-auto p-container-margin md:p-section-gap flex flex-col gap-6 max-w-5xl mx-auto w-full pt-20 ">
        <div class="mb-2">
          <h1 class="font-h1 text-h1 text-on-surface">Đối thoại với dân</h1>
        </div>

        <div class="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 gap-2 scrollbar-hide">
          <button class="whitespace-nowrap px-5 py-2 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-sm">
            Tất cả
          </button>
          <button class="whitespace-nowrap px-5 py-2 rounded-full bg-surface-container-lowest border border-outline-variant/50 text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-1">
            Chưa đọc
            <span class="w-2 h-2 rounded-full bg-error ml-1"></span>
          </button>
          <button class="whitespace-nowrap px-5 py-2 rounded-full bg-surface-container-lowest border border-primary/30 text-primary font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-1">
            <span class="material-symbols-outlined text-[16px] icon-fill">psychiatry</span>
            AI hỗ trợ
          </button>
        </div>

        <div class="bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant/50 overflow-hidden flex flex-col">
          <a [routerLink]="['/admin/chat/1']" class="flex items-start p-4 md:p-5 border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors relative group">
            <img alt="Citizen" class="w-14 h-14 rounded-full object-cover shrink-0 mr-4 border border-outline-variant/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs0BdhqMDv5WONywuY0XuDkzDarosuyq6_-oX0NEK7IoRgt6l-Ldw4EvyEEYpo-eo7SaKHFIHIDY0VGUznBUIMncKnp3byZAsHY7RZ_7KWxSeB-ryymDRChfIK35AEMx21ayBUk_2Jj25jsOHtlCh3326u90-9oihN8Z7iqUXgooqqTtoEh-y2QFx32F5fg_R46dVVEoU9RUbNWNWVWeGfUZv0T8Ndvr5CoVkrQn2QrElc6u4BOMJeQGunO9CEsBdCzBg6ySG5kQA"/>
            <div class="flex-1 min-w-0 pr-4">
              <div class="flex justify-between items-baseline mb-1.5">
                <h3 class="font-h3 text-h3 text-on-surface font-bold truncate group-hover:text-primary transition-colors">Nguyễn Thị Hoa</h3>
                <span class="font-label-sm text-label-sm text-primary font-semibold whitespace-nowrap">09:15</span>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant px-2.5 py-0.5 rounded-md text-xs flex items-center gap-1 border border-outline-variant/30">
                  <span class="material-symbols-outlined text-[14px]">location_on</span> Thôn 3
                </span>
                <span class="bg-primary/10 text-primary font-label-sm px-2 py-0.5 rounded-md flex items-center gap-1 text-[11px] font-bold">
                   <span class="material-symbols-outlined text-[14px]">robot_2</span> AI
                </span>
              </div>
              <p class="font-body-md text-body-md text-on-surface font-medium truncate">Xin chào chủ tịch, tôi muốn hỏi về thủ tục làm lại giấy khai sinh cho cháu...</p>
            </div>
            <div class="flex flex-col items-center justify-center shrink-0 pt-2">
              <span class="bg-error text-on-error font-label-sm text-label-sm w-6 h-6 rounded-full flex items-center justify-center">2</span>
            </div>
          </a>

           <a [routerLink]="['/admin/chat/2']" class="flex items-start p-4 md:p-5 border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors relative group opacity-60">
             <div class="w-14 h-14 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-h2 text-h2 font-bold shrink-0 mr-4 border border-outline-variant/30">T</div>
            <div class="flex-1 min-w-0 pr-4">
              <div class="flex justify-between items-baseline mb-1.5">
                <h3 class="font-h3 text-h3 text-on-surface truncate group-hover:text-primary transition-colors">Phạm Minh Tuấn</h3>
                <span class="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap">Hôm qua</span>
              </div>
               <div class="flex items-center gap-2 mb-2">
                <span class="font-label-sm text-label-sm bg-surface-container-lowest text-on-surface-variant px-2.5 py-0.5 rounded-md text-xs flex items-center gap-1 border border-outline-variant/50">
                  <span class="material-symbols-outlined text-[14px]">location_on</span> Thôn 5
                </span>
              </div>
              <p class="font-body-md text-body-md text-on-surface-variant truncate">Cảm ơn chủ tịch đã trả lời nhanh chóng về vấn đề đường sá.</p>
            </div>
             <div class="flex flex-col items-end justify-center shrink-0 py-1">
              <span class="material-symbols-outlined text-secondary text-[20px]">done_all</span>
            </div>
          </a>
        </div>
      </main>
    </div>
  `
})
export class AdminChatListComponent {}
