import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {RouterOutlet, Router, NavigationEnd, RouterLink, RouterLinkActive} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {filter, map} from 'rxjs/operators';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <router-outlet />
    
    @if (showNav() && isUser()) {
       <!-- Bottom Nav for User -->
       <nav class="fixed bottom-0 w-full max-w-[480px] bg-surface-container-lowest border-t border-outline-variant/30 flex justify-around items-center h-16 pb-safe z-[100] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
         <a routerLink="/home" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: false}" class="flex flex-col items-center justify-center w-16 h-full text-outline hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-[24px]">home</span>
            <span class="text-[10px] font-medium mt-1">Trang chủ</span>
         </a>
         <a routerLink="/reports" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: false}" class="flex flex-col items-center justify-center w-16 h-full text-outline hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-[24px]">list_alt</span>
            <span class="text-[10px] font-medium mt-1">Phản ánh</span>
         </a>
         <a routerLink="/report/new" routerLinkActive="text-error" [routerLinkActiveOptions]="{exact: true}" class="flex flex-col items-center justify-center w-16 h-full text-outline hover:text-error transition-colors -translate-y-4">
            <div class="w-12 h-12 rounded-full bg-error text-on-error flex items-center justify-center shadow-lg border-4 border-background">
              <span class="material-symbols-outlined text-[28px]">add</span>
            </div>
         </a>
         <a routerLink="/notification/1" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: false}" class="flex flex-col items-center justify-center w-16 h-full text-outline hover:text-primary transition-colors relative">
            <span class="material-symbols-outlined text-[24px]">notifications</span>
            <span class="text-[10px] font-medium mt-1">Thông báo</span>
            <span class="absolute top-2 right-4 w-2 h-2 rounded-full bg-error border border-surface-container-lowest"></span>
         </a>
         <a routerLink="/profile" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: false}" class="flex flex-col items-center justify-center w-16 h-full text-outline hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-[24px]">person</span>
            <span class="text-[10px] font-medium mt-1">Hồ sơ</span>
         </a>
       </nav>
    }
    
    @if (showNav() && isAdmin()) {
       <!-- Bottom Nav for Admin -->
       <nav class="fixed bottom-0 w-full max-w-[480px] bg-surface-container-lowest border-t border-outline-variant/30 flex justify-around items-center h-16 pb-safe z-[100] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
         <a routerLink="/admin/dashboard" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: false}" class="flex flex-col items-center justify-center w-16 h-full text-outline hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-[24px]">dashboard</span>
            <span class="text-[10px] font-medium mt-1">Tổng quan</span>
         </a>
         <a routerLink="/admin/reports" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: false}" class="flex flex-col items-center justify-center w-16 h-full text-outline hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-[24px]">view_list</span>
            <span class="text-[10px] font-medium mt-1">Dân nguyện</span>
         </a>
         <a routerLink="/admin/chats" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: false}" class="flex flex-col items-center justify-center w-16 h-full text-outline hover:text-primary transition-colors text-center relative">
            <span class="material-symbols-outlined text-[24px]">chat</span>
            <span class="text-[10px] font-medium mt-1">Tin nhắn</span>
            <span class="absolute top-2 right-3 w-2 h-2 rounded-full bg-error border border-surface-container-lowest"></span>
         </a>
         <a routerLink="/admin/livestreams" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: false}" class="flex flex-col items-center justify-center w-16 h-full text-outline hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-[24px]">videocam</span>
            <span class="text-[10px] font-medium mt-1">Tiếp dân</span>
         </a>
         <a routerLink="/admin/profile" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: false}" class="flex flex-col items-center justify-center w-16 h-full text-outline hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-[24px]">settings</span>
            <span class="text-[10px] font-medium mt-1">Cài đặt</span>
         </a>
       </nav>
    }
  `
})
export class App {
  private router = inject(Router);
  
  // hide nav on specific routes like login, register
  currentUrl = toSignal(
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => (event as NavigationEnd).urlAfterRedirects)
    ),
    {initialValue: ''}
  );

  showNav = signal(true);
  isUser = signal(false);
  isAdmin = signal(false);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      const url = (event as NavigationEnd).urlAfterRedirects;
      
      const hiddenRoutes = ['/login', '/register', '/admin/login'];
      const isHidden = hiddenRoutes.some(route => url.includes(route) || url === '/');
      this.showNav.set(!isHidden);
      
      this.isAdmin.set(url.includes('/admin'));
      this.isUser.set(!url.includes('/admin') && !isHidden);
    });
  }
}

