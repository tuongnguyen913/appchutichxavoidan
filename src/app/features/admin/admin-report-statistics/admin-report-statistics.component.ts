import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-report-statistics',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-[#f4f7ff] text-on-background min-h-screen font-body-md overflow-x-hidden font-sans">
      <header class="bg-surface-container-lowest border-b border-outline-variant/30 shadow-sm flex justify-between items-center w-full px-4 h-16 fixed top-0 z-50 md:pl-[19rem]">
        <div class="flex items-center gap-3">
          <img alt="Admin" class="w-8 h-8 rounded-full border border-outline-variant/50 " src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf34MWWxwd_JiJsxsC7nx9GeTCFWle4eAZ42ao9Sp9YH7fWVgtTQCAn3Xazdnm-beH8NdbZwLF8XSSs7oYDBIXT7dypQOTmoRrCcnE7VNjQpEn-Pd9UxKaBhee1zeVImj3pCFSyratWYGhk_HeLgeprTlmjd1MbEvwZZ8HTxZWE4pVX_1sqmhPXLEP55c64N7pC7TKxEjG3NK-XBIFSN6lrAPMs93S4kQWItXoSHYH0YefWIfrmQny2QvZpgoTZS4VNHr0oRm0ahI"/>
           <button [routerLink]="['/admin/dashboard']" class="">
             <span class="material-symbols-outlined">arrow_back</span>
          </button>
          <span class="text-xl font-bold text-primary tracking-tight">Chủ tịch xã với Dân</span>
        </div>
      </header>

      

      <main class="md:pl-[19rem] pt-24 pb-12 px-container-margin md:px-section-gap max-w-[1600px] mx-auto w-full">
         <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 class="font-h1 text-h1 text-on-surface">Báo cáo Tổng hợp</h1>
            <p class="font-body-md text-body-md text-on-surface-variant mt-1">Phân tích dữ liệu phản ánh và hiệu suất xử lý</p>
          </div>
          <div class="flex items-center gap-3 self-start md:self-auto">
            <div class="bg-surface-container-highest/50 border border-outline-variant/30 rounded-xl p-1 flex items-center shadow-sm">
              <button class="px-4 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface">Tuần</button>
              <button class="px-4 py-2 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md shadow-sm border border-outline-variant/20">Tháng</button>
              <button class="px-4 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface">Quý</button>
            </div>
            <button class="bg-surface-container-lowest border border-outline-variant/50 text-on-surface-variant hover:text-primary transition-colors px-4 py-2.5 rounded-xl flex items-center gap-2 font-label-md text-label-md shadow-sm">
              <span class="material-symbols-outlined text-[20px]">download</span>
              Xuất
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/50 shadow-sm flex flex-col gap-2">
            <div class="flex items-center gap-2 text-on-surface-variant mb-2">
               <div class="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                 <span class="material-symbols-outlined icon-fill">assignment</span>
               </div>
              <span class="font-label-md text-label-md">Tổng phản ánh</span>
            </div>
            <div class="font-h1 text-[40px] font-bold text-on-surface leading-none">148</div>
            <div class="font-label-sm text-label-sm text-outline mt-1 flex items-center gap-1 bg-surface-container-highest/20 w-fit px-2 py-0.5 rounded-md">
              <span class="material-symbols-outlined text-secondary text-[16px]">trending_up</span>
              <span class="text-secondary font-medium">+12%</span> so với tháng trước
            </div>
          </div>
          
           <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/50 shadow-sm flex flex-col gap-2">
            <div class="flex items-center gap-2 text-on-surface-variant mb-2">
               <div class="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary">
                 <span class="material-symbols-outlined icon-fill">check_circle</span>
               </div>
              <span class="font-label-md text-label-md">Đã xử lý</span>
            </div>
            <div class="font-h1 text-[40px] font-bold text-secondary leading-none">89.2%</div>
            <div class="font-label-sm text-label-sm text-outline mt-1 flex items-center gap-1 bg-surface-container-highest/20 w-fit px-2 py-0.5 rounded-md">
              <span class="material-symbols-outlined text-secondary text-[16px]">trending_up</span>
              <span class="text-secondary font-medium">+3.4%</span> so với tháng trước
            </div>
          </div>

          <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/50 shadow-sm flex flex-col gap-2">
            <div class="flex items-center gap-2 text-on-surface-variant mb-2">
               <div class="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                 <span class="material-symbols-outlined icon-fill">timer</span>
               </div>
              <span class="font-label-md text-label-md">TG Trung bình</span>
            </div>
            <div class="font-h1 text-[40px] font-bold text-on-surface leading-none">31h</div>
            <div class="font-label-sm text-label-sm text-outline mt-1 flex items-center gap-1 bg-surface-container-highest/20 w-fit px-2 py-0.5 rounded-md">
              <span class="material-symbols-outlined text-secondary text-[16px]">trending_down</span>
              <span class="text-secondary font-medium">Nhanh hơn</span> 5h
            </div>
          </div>

          <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/50 shadow-sm flex flex-col gap-2">
            <div class="flex items-center gap-2 text-on-surface-variant mb-2">
               <div class="w-10 h-10 rounded-full bg-[#FFF8E1] flex items-center justify-center text-[#F57F17]">
                 <span class="material-symbols-outlined icon-fill">sentiment_satisfied</span>
               </div>
              <span class="font-label-md text-label-md">Mức độ hài lòng</span>
            </div>
            <div class="font-h1 text-[40px] font-bold text-primary-container leading-none">4.6<span class="text-[20px] text-outline font-normal">/5</span></div>
            <div class="font-label-sm text-label-sm text-outline mt-1 flex items-center gap-1 bg-surface-container-highest/20 w-fit px-2 py-0.5 rounded-md">
              <span class="material-symbols-outlined text-outline text-[16px]">horizontal_rule</span>
             Không đổi
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/50 shadow-sm flex flex-col">
            <div class="flex justify-between items-center mb-6">
              <h3 class="font-h3 text-h3 text-on-surface">Thống kê phản ánh theo tháng</h3>
              <button class="text-outline hover:text-primary transition-colors"><span class="material-symbols-outlined">more_vert</span></button>
            </div>
            <div class="w-full h-64 relative flex items-end pt-10 pb-2 px-2 gap-4 flex-1">
              <div class="flex-1 flex flex-col items-center group h-full">
                <div class="w-full flex-1 flex flex-col justify-end">
                  <div class="bg-primary/60 w-full rounded-t-lg transition-all duration-300 group-hover:bg-primary" style="height: 45%"></div>
                </div>
                <span class="mt-3 font-label-sm text-outline group-hover:text-primary">Th 1</span>
              </div>
              <div class="flex-1 flex flex-col items-center group h-full">
                <div class="w-full flex-1 flex flex-col justify-end">
                  <div class="bg-primary/60 w-full rounded-t-lg transition-all duration-300 group-hover:bg-primary" style="height: 60%"></div>
                </div>
                <span class="mt-3 font-label-sm text-outline group-hover:text-primary">Th 2</span>
              </div>
              <div class="flex-1 flex flex-col items-center group h-full">
                <div class="w-full flex-1 flex flex-col justify-end">
                  <div class="bg-primary/60 w-full rounded-t-lg transition-all duration-300 group-hover:bg-primary" style="height: 35%"></div>
                </div>
                <span class="mt-3 font-label-sm text-outline group-hover:text-primary">Th 3</span>
              </div>
              <div class="flex-1 flex flex-col items-center group h-full">
                <div class="w-full flex-1 flex flex-col justify-end">
                  <div class="bg-primary/60 w-full rounded-t-lg transition-all duration-300 group-hover:bg-primary" style="height: 80%"></div>
                </div>
                <span class="mt-3 font-label-sm text-outline group-hover:text-primary">Th 4</span>
              </div>
              <div class="flex-1 flex flex-col items-center group h-full">
                <div class="w-full flex-1 flex flex-col justify-end">
                   <div class="bg-primary/60 w-full rounded-t-lg transition-all duration-300 group-hover:bg-primary" style="height: 55%"></div>
                </div>
                <span class="mt-3 font-label-sm text-outline group-hover:text-primary">Th 5</span>
              </div>
               <div class="flex-1 flex flex-col items-center group h-full relative">
                <div class="absolute -top-10 bg-surface-container-highest px-3 py-1 rounded-lg shadow-sm whitespace-nowrap text-on-surface font-label-sm hidden group-hover:block transition-all z-10 border border-outline-variant/50">
                  <span class="font-bold">148</span> phản ánh
                </div>
                <div class="w-full flex-1 flex flex-col justify-end">
                   <div class="bg-primary w-full rounded-t-lg transition-all duration-300 shadow-[0_0_10px_rgba(0,30,123,0.3)]" style="height: 70%"></div>
                </div>
                <span class="mt-3 font-label-sm text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-md">Th 6</span>
              </div>
            </div>
          </div>

          <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/50 shadow-sm flex flex-col">
            <div class="flex justify-between items-center mb-6">
              <h3 class="font-h3 text-h3 text-on-surface">Tỷ lệ đúng hạn</h3>
              <button class="text-outline hover:text-primary transition-colors"><span class="material-symbols-outlined">more_vert</span></button>
            </div>
            <div class="flex flex-col items-center justify-center flex-1">
              <div class="relative w-48 h-48 rounded-full flex items-center justify-center drop-shadow-md" style="background: conic-gradient(#006e2d 89.2%, #f4f7ff 0);">
                <div class="absolute w-36 h-36 bg-surface-container-lowest rounded-full flex flex-col items-center justify-center shadow-inner pt-2 border border-outline-variant/10">
                  <span class="font-h1 text-[32px] font-bold text-on-surface leading-none">89%</span>
                  <span class="font-label-sm text-label-sm text-outline mt-1 font-medium tracking-wide">Mục tiêu >85%</span>
                </div>
              </div>
              <div class="flex gap-6 mt-8 bg-surface-container-lowest border border-outline-variant/30 px-6 py-3 rounded-2xl shadow-sm">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-secondary"></div>
                  <span class="font-label-md text-label-md text-on-surface-variant">Đúng hạn</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-[#e6eeff] border border-outline-variant/30"></div>
                  <span class="font-label-md text-label-md text-on-surface-variant">Quá hạn</span>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-2 bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/50 shadow-sm flex flex-col">
            <div class="flex justify-between items-center mb-6">
              <h3 class="font-h3 text-h3 text-on-surface">Phân loại lĩnh vực</h3>
            </div>
            <div class="space-y-6 flex-1 py-2">
              <div class="group">
                <div class="flex justify-between mb-2">
                  <span class="font-label-md text-label-md text-on-surface flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-primary"></span> Đất đai & Xây dựng
                  </span>
                  <span class="font-label-md text-label-md text-on-surface-variant font-bold">45%</span>
                </div>
                <div class="w-full bg-surface-container rounded-full h-3 overflow-hidden">
                  <div class="bg-primary h-full rounded-full transition-all duration-500 ease-out group-hover:bg-primary-container" style="width: 45%"></div>
                </div>
              </div>
              <div class="group">
                <div class="flex justify-between mb-2">
                  <span class="font-label-md text-label-md text-on-surface flex items-center gap-2">
                     <span class="w-2 h-2 rounded-full bg-[#1a56db]"></span> An ninh trật tự
                  </span>
                  <span class="font-label-md text-label-md text-on-surface-variant font-bold">25%</span>
                </div>
                <div class="w-full bg-surface-container rounded-full h-3 overflow-hidden">
                  <div class="bg-[var(--theme-primary-container,#1a56db)] h-full rounded-full transition-all duration-500 ease-out opacity-90 group-hover:opacity-100" style="width: 25%"></div>
                </div>
              </div>
              <div class="group">
                <div class="flex justify-between mb-2">
                  <span class="font-label-md text-label-md text-on-surface flex items-center gap-2">
                     <span class="w-2 h-2 rounded-full bg-[#1353d8]"></span> Môi trường & Rác thải
                  </span>
                  <span class="font-label-md text-label-md text-on-surface-variant font-bold">20%</span>
                </div>
                <div class="w-full bg-surface-container rounded-full h-3 overflow-hidden">
                  <div class="bg-[var(--theme-surface-tint,#1353d8)] h-full rounded-full transition-all duration-500 ease-out opacity-80 group-hover:opacity-100" style="width: 20%"></div>
                </div>
              </div>
              <div class="group">
                <div class="flex justify-between mb-2">
                  <span class="font-label-md text-label-md text-on-surface flex items-center gap-2">
                     <span class="w-2 h-2 rounded-full bg-outline-variant"></span> Khác
                  </span>
                  <span class="font-label-md text-label-md text-on-surface-variant font-bold">10%</span>
                </div>
                <div class="w-full bg-surface-container rounded-full h-3 overflow-hidden">
                  <div class="bg-outline-variant h-full rounded-full transition-all duration-500 ease-out group-hover:bg-outline" style="width: 10%"></div>
                </div>
              </div>
            </div>
          </div>

           <div class="bg-surface-container-lowest rounded-3xl border border-outline-variant/50 shadow-sm overflow-hidden flex flex-col p-6">
              <h3 class="font-h3 text-h3 text-on-surface mb-6">Phân vùng phản ánh</h3>
              <div class="flex-1 w-full rounded-2xl overflow-hidden relative min-h-[220px] bg-primary/5 border border-outline-variant/20">
                <img alt="Map" class="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU4beFA17ZFzX_N8mMmftKR_LgfflFG_gIRLuC6nV56wC8CvqZqSd2ihiyMeGb5FClOnBW1U7i3BAZerfITxtHARQyDPrbXhBCQv9rMcJRBUzETP6q6GHKTlh76t4v3xlI-U2L6JOr4pmrsvWAUW0gqXgDIBshAguk9H7BILg_ZhMBjvpbmmovS1rKGRKuRUjMGcvJctCG8QqiLUFpXcefmYV-w_sDA_MclubSSImHOnAHM8MvHNSy6eur8MieGbVSSomBv4rfZ68"/>
                <div class="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div class="flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm w-fit px-3 py-1.5 rounded-lg border border-white/30">
                    <span class="w-2.5 h-2.5 rounded-full bg-error animate-pulse shadow-[0_0_8px_#ba1a1a]"></span>
                    <span class="font-label-md text-[13px] tracking-wide">Thôn 3 cần chú ý</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </main>
    </div>
  `
})
export class AdminReportStatisticsComponent {}
