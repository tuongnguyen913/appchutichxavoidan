import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-chat-detail',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-[#f4f7ff] text-on-surface font-body-md h-screen flex flex-col overflow-hidden antialiased font-sans">
      <header class="bg-primary text-on-primary flex items-center justify-between px-4 md:px-6 h-[72px] shrink-0 shadow-md z-20">
        <div class="flex items-center gap-3">
          <button [routerLink]="['/admin/chats']" class="p-2 -ml-2 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center">
            <span class="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <div class="flex items-center gap-4">
            <div class="relative">
              <img alt="Citizen" class="w-12 h-12 rounded-full object-cover border-2 border-white/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs0BdhqMDv5WONywuY0XuDkzDarosuyq6_-oX0NEK7IoRgt6l-Ldw4EvyEEYpo-eo7SaKHFIHIDY0VGUznBUIMncKnp3byZAsHY7RZ_7KWxSeB-ryymDRChfIK35AEMx21ayBUk_2Jj25jsOHtlCh3326u90-9oihN8Z7iqUXgooqqTtoEh-y2QFx32F5fg_R46dVVEoU9RUbNWNWVWeGfUZv0T8Ndvr5CoVkrQn2QrElc6u4BOMJeQGunO9CEsBdCzBg6ySG5kQA"/>
              <div class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-secondary-container rounded-full border-2 border-primary"></div>
            </div>
            <div class="flex flex-col">
              <h2 class="font-h3 text-h3 text-on-primary font-bold">Nguyễn Thị Hoa</h2>
              <span class="font-label-sm text-label-sm text-primary-fixed-dim">Công dân Thôn 3 • Trực tuyến</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button class="p-2 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center hidden sm:flex">
            <span class="material-symbols-outlined text-[24px]">call</span>
          </button>
          <button class="p-2 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center">
            <span class="material-symbols-outlined text-[24px]">more_vert</span>
          </button>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto w-full max-w-4xl mx-auto p-4 md:p-6 space-y-6 flex flex-col">
        <div class="flex justify-center">
          <span class="px-4 py-1.5 bg-surface-container-high rounded-full font-label-sm text-label-sm text-on-surface-variant font-medium">Hôm nay, 09:41 AM</span>
        </div>

        <div class="flex items-end gap-3 max-w-[90%] sm:max-w-[75%]">
          <img alt="Avatar" class="w-10 h-10 rounded-full object-cover shrink-0 border border-outline-variant/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs0BdhqMDv5WONywuY0XuDkzDarosuyq6_-oX0NEK7IoRgt6l-Ldw4EvyEEYpo-eo7SaKHFIHIDY0VGUznBUIMncKnp3byZAsHY7RZ_7KWxSeB-ryymDRChfIK35AEMx21ayBUk_2Jj25jsOHtlCh3326u90-9oihN8Z7iqUXgooqqTtoEh-y2QFx32F5fg_R46dVVEoU9RUbNWNWVWeGfUZv0T8Ndvr5CoVkrQn2QrElc6u4BOMJeQGunO9CEsBdCzBg6ySG5kQA"/>
          <div class="flex flex-col gap-1.5">
            <div class="bg-surface-container-lowest text-on-surface p-4 rounded-3xl rounded-bl-md shadow-sm border border-outline-variant/30">
              <p class="font-body-md text-body-md leading-relaxed">Kính chào Chủ tịch. Con đường liên thôn đoạn qua thôn 3 nhà tôi sau trận mưa đêm qua đang bị ngập rất sâu, nước tràn cả vào sân nhà một số hộ. Mong ủy ban sớm có biện pháp khắc phục để bà con đi lại an toàn.</p>
            </div>
            <span class="font-label-sm text-label-sm text-outline ml-2">09:42 AM</span>
          </div>
        </div>

        <div class="flex items-end gap-3 max-w-[90%] sm:max-w-[75%]">
          <div class="w-10 h-10 shrink-0"></div>
          <div class="flex flex-col gap-1.5">
            <div class="bg-surface-container-lowest p-2 rounded-3xl rounded-bl-md shadow-sm border border-outline-variant/30">
              <img alt="Flood" class="w-64 md:w-80 h-auto rounded-2xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiR4DskcuZlh_WLOAng8opXpgbMdQiwS6-OWIv3skk7b817DWdFyGjFgJGi8fMWDzDUpg6VP8Vt6OiwWXx-4M1E48Kp9rZG0igMs4jujxH36n_Ykp0k01UYGclgIRbhmNQAoL_0bLi4UDVrVE5qg-roiiMmmXs0IxVzN17-_7LxgeEtycpvWs2uS0X42xf8xi6-DSsKy6B4xwn3l_zmrCsSQ2w7hjw5rJhnhzBa3N2nqSordwHT7B1MrxglzGwg9_VFlBOufyG1po"/>
            </div>
            <span class="font-label-sm text-label-sm text-outline ml-2">09:43 AM</span>
          </div>
        </div>
        
        <div class="flex justify-center mt-4">
           <div class="bg-primary/5 border border-primary/20 rounded-2xl p-4 flex flex-col items-center gap-2 max-w-sm text-center">
             <span class="material-symbols-outlined text-primary text-[28px]">robot_2</span>
             <p class="font-body-sm text-primary font-medium">AI đã đọc ảnh và nhận diện vấn đề "Ngập lụt hạ tầng". Đề xuất chuyển cho bộ phận Địa chính - Giao thông.</p>
           </div>
        </div>
      </main>

      <div class="bg-surface-container-lowest border-t border-outline-variant/30 flex flex-col shrink-0 w-full shadow-[0_-8px_24px_rgba(0,0,0,0.03)]">
        <div class="flex items-center gap-2 px-4 py-3 overflow-x-auto scrollbar-hide bg-primary-fixed/30 border-b border-outline-variant/20">
          <div class="flex items-center gap-1 text-primary shrink-0 mr-2 font-semibold">
            <span class="material-symbols-outlined text-[18px]">auto_awesome</span>
            <span class="text-sm hidden sm:inline">Gợi ý:</span>
          </div>
          <button class="shrink-0 bg-surface-container-lowest border border-primary/30 text-primary font-label-md text-label-md px-4 py-2 rounded-full hover:bg-primary-container transition-colors font-medium shadow-sm">
            Ghi nhận, sẽ xử lý
          </button>
           <button class="shrink-0 bg-surface-container-lowest border border-primary/30 text-primary font-label-md text-label-md px-4 py-2 rounded-full hover:bg-primary-container transition-colors font-medium shadow-sm">
            Chuyển cho bộ phận liên quan
          </button>
        </div>

        <div class="px-4 py-4 md:py-5 flex items-end gap-3 max-w-5xl mx-auto w-full">
          <button class="p-2.5 text-on-surface-variant bg-surface-container hover:text-primary transition-colors shrink-0 rounded-full">
            <span class="material-symbols-outlined text-[24px]">add_circle</span>
          </button>
          <div class="flex-1 bg-surface-container-lowest border-2 border-outline-variant/50 rounded-3xl flex items-center px-4 py-2 shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all overflow-hidden">
            <textarea class="w-full bg-transparent border-none focus:ring-0 resize-none max-h-32 font-body-md text-body-md text-on-surface py-2.5 placeholder:text-outline outline-none" placeholder="Nhập tin nhắn phản hồi..." rows="2"></textarea>
            <button class="p-2 text-on-surface-variant hover:text-primary transition-colors shrink-0 rounded-full">
              <span class="material-symbols-outlined text-[24px]">sentiment_satisfied</span>
            </button>
          </div>
          <button class="w-[52px] h-[52px] bg-primary text-on-primary rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all shrink-0 flex items-center justify-center shadow-md active:scale-95">
            <span class="material-symbols-outlined text-[24px] icon-fill">send</span>
          </button>
        </div>
      </div>
    </div>
  `
})
export class AdminChatDetailComponent {}
