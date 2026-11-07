import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="inner-hero">
      <div class="container">
        <span class="section-kicker">SVAY CHRUM MONASTERY</span>
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
        <a routerLink="/" class="text-link">← ត្រឡប់ទៅទំព័រដើម</a>
      </div>
    </section>
    @if (isGallery) {
      <section class="photo-gallery container" aria-label="រូបភាពសកម្មភាពវត្តស្វាយជ្រំ">
        <figure><img src="/images/monastery-gathering.jpg" alt="ពុទ្ធបរិស័ទចូលរួមពិធីនៅវត្តស្វាយជ្រំ"><figcaption>ពិធីបុណ្យ និងការជួបជុំសហគមន៍</figcaption></figure>
        <figure><img src="/images/monastery-outdoor-ceremony.jpg" alt="ពិធីសាសនាក្រោមម្លប់ឈើនៅវត្ត"><figcaption>ពិធីសាសនា និងប្រពៃណី</figcaption></figure>
        <figure><img src="/images/monastery-blessing.jpg" alt="ព្រះសង្ឃចូលរួមក្នុងពិធីសាសនា"><figcaption>ពិធីប្រពៃណីព្រះពុទ្ធសាសនា</figcaption></figure>
        <figure><img src="/images/monastery-community-offering.jpg" alt="សកម្មភាពចែករំលែកអាហារដល់សហគមន៍"><figcaption>សកម្មភាពសប្បុរសធម៌ក្នុងសហគមន៍</figcaption></figure>
        <figure><img src="/images/monastery-festival.jpg" alt="ពិធីបុណ្យប្រពៃណីខ្មែរនៅក្នុងវត្ត"><figcaption>ពិធីបុណ្យប្រពៃណីខ្មែរ</figcaption></figure>
        <figure><img src="/images/monastery-meeting.jpg" alt="កិច្ចប្រជុំរបស់គណៈកម្មការវត្ត"><figcaption>កិច្ចប្រជុំ និងការងាររបស់វត្ត</figcaption></figure>
        <figure><img src="/images/monastery-dhamma-class.jpg" alt="សាមណេររៀនសូត្រនៅក្នុងថ្នាក់"><figcaption>ការសិក្សា និងការអប់រំ</figcaption></figure>
      </section>
    } @else if (isLeadership) {
      <section class="org-chart container" aria-label="រចនាសម្ព័ន្ធថ្នាក់ដឹកនាំវត្ត">
        <div class="org-node org-top"><div class="org-avatar"><img class="org-avatar-photo" src="/images/abbot-pen-daro.jpg" alt="ព្រះចៅអធិការ ព្រះគ្រូបញ្ញាសោភ័ណ ប៉ែន ដារ៉ូ"></div><div class="org-label"><small>ព្រះចៅអធិការ</small><strong>ព្រះគ្រូបញ្ញាសោភ័ណ</strong></div><span class="org-name">ប៉ែន ដារ៉ូ</span></div>
        <div class="org-level-middle">
          <div class="org-node org-middle org-red"><div class="org-avatar"><img class="org-avatar-photo org-sot-chhveng-photo" src="/images/sot-chhveng-ouk-kan.jpg" alt="ភិក្ខុ យសភិបាលកោវិទ អ៊ុក កាន"></div><div class="org-label org-sot-label"><small>ព្រះគ្រូសូត្រឆ្វេង</small><strong>ភិក្ខុ យសភិបាលកោវិទ</strong></div><span class="org-name org-sot-name">អ៊ុក កាន</span></div>
          <div class="org-node org-middle org-red"><div class="org-avatar"><img class="org-avatar-photo org-lekha-photo" src="/images/preah-lekha-lay-bora.jpg" alt="ព្រះលេខា ឡៃ បូរ៉ា"></div><div class="org-label org-lekha-label"><strong>ព្រះលេខា</strong></div><span class="org-name org-lekha-name">ឡៃ បូរ៉ា</span></div>
        </div>
      </section>
    } @else {
      <section class="section-pad inner-placeholder">
        <div class="container placeholder-card">
          <span class="placeholder-mark">✦</span>
          <h2>ទំព័រនេះកំពុងរៀបចំ</h2>
          <p>យើងនឹងបន្ថែមមាតិកាផ្លូវការ រូបភាព និងព័ត៌មានលម្អិតនៅទីនេះក្នុងជំហានបន្ទាប់។</p>
        </div>
      </section>
    }
  `
})
export class InfoPageComponent {
  private route = inject(ActivatedRoute);
  get title(): string { return this.route.snapshot.data['title'] as string ?? 'ព័ត៌មាន'; }
  get subtitle(): string { return this.route.snapshot.data['subtitle'] as string ?? ''; }
  get isGallery(): boolean { return this.route.snapshot.routeConfig?.path === 'gallery'; }
  get isLeadership(): boolean { return this.route.snapshot.routeConfig?.path === 'leadership'; }
}
