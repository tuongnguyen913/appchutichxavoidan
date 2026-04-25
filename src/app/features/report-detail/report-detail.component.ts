import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-report-detail',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-[#f4f7ff] text-on-background min-h-screen pb-[80px] font-sans">
      <header class="sticky top-0 z-50 flex justify-between items-center w-full px-4 h-16 bg-surface-container-lowest border-b border-outline-variant shadow-sm max-w-2xl mx-auto">
        <button [routerLink]="['/reports']" class="flex items-center justify-center w-10 h-10 text-on-surface rounded-full hover:bg-surface-container-high transition-colors">
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 class="font-h3 text-h3 text-on-surface truncate px-4 text-center">Chi tiết phản ánh</h1>
        <button class="flex items-center justify-center w-10 h-10 text-on-surface rounded-full hover:bg-surface-container-high transition-colors">
          <span class="material-symbols-outlined">more_vert</span>
        </button>
      </header>

      <main class="w-full max-w-2xl mx-auto p-gutter flex flex-col gap-6">
        <section class="bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant p-card-padding flex flex-col gap-4">
          <div class="flex justify-between items-center">
            <span class="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">#PA-2025-00142</span>
            <span class="bg-surface-variant text-primary font-label-sm text-label-sm px-3 py-1 rounded-full flex items-center gap-1">
              <span class="material-symbols-outlined text-[16px] icon-fill">pending</span>
              Đang xử lý
            </span>
          </div>
          
          <div>
            <p class="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wide">Tiêu đề</p>
            <h2 class="font-h2 text-h2 text-on-surface">Đường vào thôn 3 bị hỏng nặng, ổ gà lầy lội</h2>
          </div>
          
          <div>
            <p class="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wide">Nội dung</p>
            <p class="text-on-surface">Đường vào thôn 3 đoạn từ cổng chào đến hết dốc ông Năm bị xuống cấp trầm trọng. Nhiều ổ gà, ổ voi xuất hiện dày đặc gây khó khăn và nguy hiểm cho người tham gia giao thông, đặc biệt là các em học sinh.</p>
          </div>
          
          <div class="flex flex-col gap-2 pt-2 border-t border-outline-variant">
            <div class="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
              <span class="material-symbols-outlined text-[18px]">category</span>
              <span class="font-semibold text-on-surface">Lĩnh vực:</span>
              <span>Hạ tầng giao thông</span>
            </div>
            <div class="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
              <span class="material-symbols-outlined text-[18px]">location_on</span>
              <span class="font-semibold text-on-surface">Địa chỉ:</span>
              <span>Thôn 3, xã Yên Bình</span>
            </div>
            <div class="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
              <span class="material-symbols-outlined text-[18px]">calendar_today</span>
              <span class="font-semibold text-on-surface">Thời gian:</span>
              <span>14:30 - 12/10/2023</span>
            </div>
          </div>
          
          <div class="mt-2 flex flex-col gap-3">
            <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Hình ảnh/Video hiện trường</p>
            <div class="rounded-lg overflow-hidden border border-outline-variant">
              <img alt="Ảnh hiện trường" class="w-full h-56 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfw4CLy8ynfzGCLKaAgklvU8ING3HMYZR9sVRQQ6bQV72U9Jpi7guD9kc6WGbkzCC9C3UdvtDRTuoiwT-s00SAsAMDrIFx-2Fms_2UhfMCVuBoKHAfj-dpl4KNndKGjZU6kGTCwWRtDuIOZaFioViRP8lKri_WRPQ5TNcbVoaKoGWxYo8pt2AEJJsgCljde2GCVGVl0k9UQope8vQBCxwgD-Y2MuYxNSElGtNXuX6J3iKhvy5Znf6xETdndIdGWOb8TyLerzpfEpM"/>
            </div>
            <div class="grid grid-cols-4 gap-2">
              <div class="aspect-square rounded-md overflow-hidden border border-outline-variant">
                <img alt="Thumbnail 1" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVe6g0umZuS3rtY2n6daTc0fz1iFg5DQ0w-a36hZlaXN2-5rTuUI49GM0r2ApUzDMQjNnaUC2eBw8EHXdAHn9ytiHWt0AHfuAcI35SLQbuyuj5kgJgkYH1RYPPlCkwph6SJRQ9WybYD9I6_0Min2qbgcWIiwZeFGrAdHnEE12e7jPWcYlfNB4NaC8IVzwCdHqj4UTPD4EiBIsoh7inpjaF4svgLVOJwc0adLzDl6-WpnjvJvURN22BySLMvcGLdwQNK1N9oRT3Hrk"/>
              </div>
              <div class="aspect-square rounded-md overflow-hidden border border-outline-variant">
                <img alt="Thumbnail 2" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC250bUvFXhuXiacBZE-K7TOQqvPEjXJYo1gVgmx_z2o-d6z-CgH17yEeH54IPNQ72hCp88kcpfMWmzbF6ElPZZDl31F-5BoqxDrF2DkLNiOBhNgjTZ54n37VmSqmNX8VGtQID_9wyk_BNxrWhO7Pjrz6tu5Eacbxj0YbqLUDHto3zD3uK8Qw5jPzUr6MRNm9x63hq00eS5W-k_QhDoqSOqoHHwqWjxOR-v-YG52l6nD2DtFzh95OzT8eBzkZw-TIMymFAsrVckpE"/>
              </div>
              <div class="aspect-square rounded-md overflow-hidden border border-outline-variant relative">
                <img alt="Thumbnail 3" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgXLFOlZrZmqZdhjUPuqsef4VuN-G9EdInqOEFz2Fq22OJ4cIfjC6uFzi6eLKY6D7ecRJDpFShUUhpN-hj2aB1B1AkD-0aUcPL9ErKoC0p_FDt_l8EcRDGRFiko18C5l_3o1DfWTHBD4ccTy0DbOWIuvyvD2ni9xirm8sh6Sodzi4NYHDb-rXE9zrdB8I8oP6IO5f1R16GaHw0VyEVOUgqgC1J6btm-gIfDN6B-_lm9jLYVmJUsC-JsPTzfs-Uyr8axLN8RNBL2ys"/>
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span class="material-symbols-outlined text-white">play_circle</span>
                </div>
              </div>
              <div class="aspect-square rounded-md bg-surface-container-high border border-outline-variant flex items-center justify-center">
                <span class="text-on-surface-variant font-label-md">+2</span>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant p-card-padding">
          <h3 class="font-h3 text-h3 text-on-surface mb-4">Tiến độ</h3>
          <div class="flex flex-col gap-0 relative">
            <div class="absolute left-3 top-2 bottom-6 w-0.5 bg-outline-variant z-0"></div>
            
            <div class="flex items-start gap-4 relative z-10 mb-6">
              <div class="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 mt-0.5">
                <span class="material-symbols-outlined text-[14px] icon-fill">check</span>
              </div>
              <div>
                <p class="font-label-md text-label-md text-on-surface">Đã gửi phản ánh</p>
                <p class="font-body-sm text-body-sm text-on-surface-variant">12/10/2023 - 14:30</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 relative z-10 mb-6">
              <div class="w-6 h-6 rounded-full bg-surface-container-highest border-2 border-primary text-primary flex items-center justify-center shrink-0 mt-0.5">
                <div class="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <div>
                <p class="font-label-md text-label-md text-primary">Đang xử lý</p>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Cán bộ đang khảo sát hiện trường và lập kế hoạch duy tu.</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4 relative z-10">
              <div class="w-6 h-6 rounded-full bg-surface-container border-2 border-outline-variant text-outline-variant flex items-center justify-center shrink-0 mt-0.5"></div>
              <div>
                <p class="font-label-md text-label-md text-outline">Hoàn thành</p>
              </div>
            </div>
          </div>
        </section>

        <section class="flex flex-col gap-4">
          <h3 class="font-h3 text-h3 text-on-surface px-1">Trao đổi</h3>
          
          <div class="flex w-full justify-end">
            <div class="max-w-[85%] bg-primary text-on-primary p-3 rounded-2xl rounded-tr-sm shadow-sm">
              <p class="font-body-md text-body-md">Đường vào thôn 3 bị hỏng nặng, ổ gà rất to gây nguy hiểm cho học sinh đi học, mong chính quyền sớm khắc phục trước mùa mưa.</p>
              <p class="font-label-sm text-label-sm text-primary-fixed-dim mt-1 text-right">14:30</p>
            </div>
          </div>
          
          <div class="flex w-full justify-start gap-3">
            <div class="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[18px]">smart_toy</span>
            </div>
            <div class="max-w-[85%] bg-surface-container text-on-surface p-3 rounded-2xl rounded-tl-sm shadow-sm border border-outline-variant">
              <p class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-semibold">Trợ lý AI</p>
              <p class="font-body-md text-body-md">Cảm ơn bạn. Phản ánh đã được tự động phân loại vào nhóm "Hạ tầng giao thông" và chuyển tiếp đến bộ phận chuyên môn. Thời gian phản hồi dự kiến: 24h.</p>
              <p class="font-label-sm text-label-sm text-outline mt-1 text-right">14:31</p>
            </div>
          </div>
          
          <div class="flex w-full justify-start gap-3">
            <img alt="Avatar Chủ tịch" class="w-8 h-8 rounded-full object-cover shrink-0 border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf34MWWxwd_JiJsxsC7nx9GeTCFWle4eAZ42ao9Sp9YH7fWVgtTQCAn3Xazdnm-beH8NdbZwLF8XSSs7oYDBIXT7dypQOTmoRrCcnE7VNjQpEn-Pd9UxKaBhee1zeVImj3pCFSyratWYGhk_HeLgeprTlmjd1MbEvwZZ8HTxZWE4pVX_1sqmhPXLEP55c64N7pC7TKxEjG3NK-XBIFSN6lrAPMs93S4kQWItXoSHYH0YefWIfrmQny2QvZpgoTZS4VNHr0oRm0ahI"/>
            <div class="max-w-[85%] bg-primary-fixed text-on-primary-fixed p-3 rounded-2xl rounded-tl-sm shadow-sm border border-primary-fixed-dim">
              <p class="font-label-sm text-label-sm text-primary mb-1 font-semibold flex items-center gap-1">
                Chủ tịch xã
                <span class="material-symbols-outlined text-[14px] text-secondary icon-fill">verified</span>
              </p>
              <p class="font-body-md text-body-md">Tôi đã nhận được thông tin. Đã giao anh Bình - cán bộ địa chính xuống hiện trường khảo sát chiều nay để lên phương án đổ đá dăm tạm thời. Cảm ơn bà con đã kịp thời báo tin.</p>
              <p class="font-label-sm text-label-sm text-on-primary-fixed-variant mt-1 text-right">15:45</p>
            </div>
          </div>
        </section>
      </main>

      <div class="fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant p-3 shadow-sm z-50 flex justify-center">
        <div class="w-full max-w-2xl flex items-center gap-2">
          <button class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container rounded-full transition-colors shrink-0">
            <span class="material-symbols-outlined">attach_file</span>
          </button>
          <button class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container rounded-full transition-colors shrink-0">
            <span class="material-symbols-outlined">photo_camera</span>
          </button>
          <div class="flex-1 bg-surface-container-low border border-outline-variant rounded-full flex items-center px-4 py-2 focus-within:border-primary transition-colors">
            <input class="w-full bg-transparent border-none outline-none font-body-md text-body-md text-on-surface placeholder-on-surface-variant p-0 focus:ring-0" placeholder="Nhập tin nhắn..." type="text"/>
          </div>
          <button class="w-10 h-10 flex items-center justify-center text-primary bg-primary-fixed hover:bg-primary-fixed-dim rounded-full transition-colors shrink-0">
            <span class="material-symbols-outlined icon-fill">send</span>
          </button>
        </div>
      </div>
    </div>
  `
})
export class ReportDetailComponent {}
