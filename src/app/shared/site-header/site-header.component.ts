import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="topline">
      <div class="container topline-inner">
        <div class="topline-left"><span class="flag-stripes" role="img" aria-label="ទង់សាសនា"></span><span>ព្រះពុទ្ធសាសនា&nbsp; · &nbsp;វប្បធម៌&nbsp; · &nbsp;ការអប់រំ&nbsp; · &nbsp;សហគមន៍</span></div>
        <div class="topline-right"><span>Buddhism · Culture · Education · Community</span><a class="social-dot" href="https://www.facebook.com/SvayChrumMonasteryOfficial" aria-label="Facebook" target="_blank" rel="noopener">f</a><a class="social-dot telegram" href="https://t.me/+MEMqtXBtjwk5ZDhl" aria-label="Telegram" target="_blank" rel="noopener">➤</a><a class="social-dot youtube" href="https://www.youtube.com/@-SvayChrumMonastery" aria-label="YouTube" target="_blank" rel="noopener">▶</a><a class="social-dot tiktok" href="https://www.tiktok.com/@svaychrummonastery" aria-label="TikTok" target="_blank" rel="noopener">♪</a><span class="search-dot" aria-hidden="true">⌕</span><span class="topline-language">ខ្មែរ &nbsp; EN</span></div>
      </div>
    </div>
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" routerLink="/" aria-label="Svay Chrum Monastery home">
          <img src="/images/svay-chrum-logo.png" alt="Logo វត្តស្វាយជ្រំ">
          <span class="brand-copy">
            <strong>វត្តស្វាយជ្រំ</strong>
            <small>SVAY CHRUM MONASTERY</small>
            <em>OFFICIAL WEBSITE</em>
          </span>
        </a>
        <button class="menu-toggle" type="button" (click)="menuOpen = !menuOpen" [attr.aria-expanded]="menuOpen" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
        <nav class="main-nav" [class.open]="menuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="menuOpen=false">ទំព័រដើម</a>
          <a routerLink="/about" routerLinkActive="active" (click)="menuOpen=false">អំពីវត្ត</a>
          <a routerLink="/leadership" routerLinkActive="active" (click)="menuOpen=false">ថ្នាក់ដឹកនាំ</a>
          <a routerLink="/news" routerLinkActive="active" (click)="menuOpen=false">ព័ត៌មាន</a>
          <a routerLink="/gallery" routerLinkActive="active" (click)="menuOpen=false">វិចិត្រសាល</a>
          <a routerLink="/education" routerLinkActive="active" (click)="menuOpen=false">ការអប់រំ</a>
          <a routerLink="/contact" routerLinkActive="active" (click)="menuOpen=false">ទំនាក់ទំនង</a>
          <button class="language-button" type="button" (click)="toggleLanguage()"><span>{{ english ? 'ខ្មែរ' : 'EN' }}</span>⌄</button>
        </nav>
      </div>
    </header>
  `
})
export class SiteHeaderComponent {
  menuOpen = false;
  english = false;
  toggleLanguage(): void { this.english = !this.english; }
}
