import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-[#f4f7ff] min-h-screen flex flex-col font-sans">
      <header class="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest shadow-sm h-16 flex items-center px-4 border-b border-outline-variant">
        <button [routerLink]="['/home']" class="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors">
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 class="ml-2 font-h3 text-h3 text-on-surface">Chi tiết thông báo</h1>
      </header>

      <main class="flex-1 pt-24 pb-8 px-container-margin w-full max-w-3xl mx-auto">
        <article class="bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant overflow-hidden">
          <div class="p-card-padding">
            <div class="inline-flex items-center gap-1.5 bg-error text-on-error px-2 py-1 rounded-sm shadow-sm">
              <span class="material-symbols-outlined text-[14px] icon-fill">warning</span>
              <span class="font-label-sm text-label-sm tracking-widest">CẢNH BÁO KHẨN</span>
            </div>
            
            <h2 class="mt-4 font-h2 text-h2 text-on-surface">
              Mưa lớn, nguy cơ sạt lở đất tại khu vực đèo A
            </h2>
            
            <div class="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-outline font-body-sm text-body-sm">
              <div class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px]">schedule</span>
                <span>10 phút trước</span>
              </div>
              <span aria-hidden="true" class="text-tertiary-fixed-dim">•</span>
              <span class="font-medium text-on-surface-variant">Bởi: Ban Chỉ huy PCTT&TKCN</span>
            </div>
          </div>
          
          <figure class="w-full bg-surface-variant">
            <img alt="Khu vực cảnh báo sạt lở" class="w-full h-auto object-cover max-h-[300px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQJWT8urtPsN5-joLkUKQGYkTvB_KqJLvmbffNRpoGhXW7Y6jLGnSvxCmVDRwtJP7P_9UEeNJS9uAEPeB8HIj5_Hcq6BV3mgquvDzB4MAt6LtY1_nHwx-dXDirqCDptEGcYOfUJXovBDaRqbxv-oHNLnuvW9nqhG9EjZ9kgmJW2IrMHdm6wFIwECFrS3uwbxu9LH_HO-GRFjzlT9bqNSNfPK0IAvXQn6D3PyuKewZ-JoWHl2U8E5ph_dSiSlufozB-ujw21xUhz24" />
          </figure>
          
          <div class="p-card-padding">
            <div class="font-body-md text-body-md text-on-surface-variant space-y-4">
              <p>Yêu cầu bà con khu vực dưới chân đèo A chủ động di dời tài sản và tìm nơi trú ẩn an toàn. Không di chuyển qua khu vực đèo trong thời gian này do nguy cơ sạt lở đất đang ở mức rất cao và diễn biến thời tiết còn phức tạp.</p>
              <p>Lực lượng chức năng đã tiến hành rào chắn và chốt chặn tại hai đầu đèo. Mọi sự cố khẩn cấp cần hỗ trợ di dời, vui lòng liên hệ ngay đường dây nóng của Ủy ban Nhân dân xã hoặc tổ công tác cứu hộ tại địa phương.</p>
            </div>
            
            <div class="my-6 border-t border-outline-variant"></div>
            
            <div class="space-y-6">
              <a class="group flex items-start gap-3 p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors border border-transparent hover:border-outline-variant" href="#">
                <div class="mt-0.5 w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-[20px]">map</span>
                </div>
                <div>
                  <span class="block font-label-md text-label-md text-primary group-hover:text-primary-fixed-dim transition-colors">Xem bản đồ khu vực nguy hiểm</span>
                  <span class="block mt-1 font-body-sm text-body-sm text-on-surface-variant">Vị trí sạt lở và các tuyến đường tránh an toàn được cập nhật trực tiếp.</span>
                </div>
              </a>
              
              <button class="w-full bg-primary-container text-on-primary font-label-md text-label-md py-4 rounded-lg shadow-sm hover:bg-primary transition-colors flex items-center justify-center gap-2">
                <span class="material-symbols-outlined">call</span>
                Gọi hỗ trợ khẩn cấp (1900 xxxx)
              </button>
            </div>
          </div>
        </article>
      </main>
    </div>
  `
})
export class NotificationComponent {}
