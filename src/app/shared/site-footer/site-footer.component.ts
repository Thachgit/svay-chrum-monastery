import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <div class="footer-brand-row">
            <img src="/images/svay-chrum-logo.png" alt="Svay Chrum Monastery logo">
            <div><strong>វត្តស្វាយជ្រំ</strong><small>SVAY CHRUM MONASTERY</small></div>
          </div>
          <p>ព្រះពុទ្ធសាសនា · វប្បធម៌ · ការអប់រំ</p>
          <p class="footer-muted">Preserving heritage, inspiring knowledge and serving our community.</p>
        </div>
        <div>
          <h3>តំណភ្ជាប់រហ័ស</h3>
          <a routerLink="/about">អំពីវត្ត</a><a routerLink="/leadership">ថ្នាក់ដឹកនាំ</a><a routerLink="/news">ព័ត៌មាន</a><a routerLink="/gallery">វិចិត្រសាល</a>
        </div>
        <div>
          <h3>ទំនាក់ទំនង</h3>
          <p>ភូមិបឹងវែង ឃុំស្វាយជ្រំ</p>
          <p>ស្រុកស្វាយជ្រំ ខេត្តស្វាយរៀង</p>
          <a href="https://maps.app.goo.gl/wWTFqWAbqNhwnnvd8" target="_blank" rel="noopener">មើលទីតាំងលើផែនទី ↗</a>
        </div>
        <div>
          <h3>បណ្តាញផ្សព្វផ្សាយ</h3>
          <a href="https://t.me/+MEMqtXBtjwk5ZDhl" target="_blank" rel="noopener">Telegram</a>
          <a href="https://www.facebook.com/SvayChrumMonasteryOfficial" target="_blank" rel="noopener">Facebook</a>
          <a href="https://www.youtube.com/@-SvayChrumMonastery" target="_blank" rel="noopener">YouTube</a>
          <a href="https://www.tiktok.com/@svaychrummonastery" target="_blank" rel="noopener">TikTok</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© 2026 Svay Chrum Monastery. All rights reserved.</span>
        <span>Official Monastery Website</span>
      </div>
    </footer>
  `
})
export class SiteFooterComponent {}
