import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-image" role="img" aria-label="ទិដ្ឋភាពវត្តខ្មែរពីលើអាកាស"></div>
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="hero-eyebrow">WELCOME TO<br>SVAY CHRUM MONASTERY</div>
        <h1>វត្តស្វាយជ្រំ</h1>
        <h2>SVAY CHRUM MONASTERY</h2>
        <h3>ព្រះពុទ្ធសាសនា វប្បធម៌ និងការអប់រំ</h3>
        <p>សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់វត្តស្វាយជ្រំ ជាទីកន្លែងនៃជំនឿ ការសិក្សា និងការរួបរួមរបស់សហគមន៍។</p>
        <div class="hero-actions">
          <a class="hero-primary" routerLink="/about">ស្វែងយល់អំពីវត្ត <span>→</span></a>
          <a class="hero-secondary" routerLink="/gallery"><span class="play-icon">▶</span> មើលសកម្មភាព</a>
        </div>
      </div>
      <div class="hero-controls"><span class="slide-dot active"></span><span class="slide-dot"></span><span class="slide-dot"></span><button aria-label="រូបភាពបន្ទាប់">‹</button><button aria-label="រូបភាពបន្ទាប់">›</button></div>
    </section>

    <section class="pillars-wrap container" aria-label="បេសកកម្មរបស់វត្ត">
      <a class="pillar" routerLink="/about"><span class="pillar-icon lotus">❋</span><span><strong>ព្រះពុទ្ធសាសនា</strong><small>Buddhism</small></span></a>
      <a class="pillar" routerLink="/about"><span class="pillar-icon temple-icon">♜</span><span><strong>វប្បធម៌ខ្មែរ</strong><small>Khmer Culture</small></span></a>
      <a class="pillar" routerLink="/education"><span class="pillar-icon book-icon">▤</span><span><strong>ការអប់រំ</strong><small>Education</small></span></a>
      <a class="pillar" routerLink="/contact"><span class="pillar-icon people-icon">♟</span><span><strong>សេវាកម្មសហគមន៍</strong><small>Community Service</small></span></a>
    </section>

    <section class="updates-section container">
      <div class="updates-main">
        <div class="updates-heading"><div class="heading-title"><span></span><h2>ព័ត៌មាន និងសកម្មភាពថ្មីៗ</h2><small>Latest News &amp; Activities</small></div><a routerLink="/news">មើលទាំងអស់ <b>→</b></a></div>
        <div class="news-grid">
          <a class="news-card" routerLink="/news"><div class="news-photo news-photo-one"><span>ពិធីបុណ្យ</span></div><div class="news-copy"><small>▣ &nbsp;៧ មិថុនា ២០២៦</small><h3>ពិធីបុណ្យ និងការចូលរួមរបស់ពុទ្ធបរិស័ទ</h3></div></a>
          <a class="news-card" routerLink="/news"><div class="news-photo news-photo-two"><span>សកម្មភាព</span></div><div class="news-copy"><small>▣ &nbsp;៨ មិថុនា ២០២៦</small><h3>សកម្មភាពសហគមន៍នៅក្នុងវត្តស្វាយជ្រំ</h3></div></a>
          <a class="news-card" routerLink="/news"><div class="news-photo news-photo-three"><span>អភិវឌ្ឍន៍</span></div><div class="news-copy"><small>▣ &nbsp;២៨ ឧសភា ២០២៦</small><h3>ការកែលម្អបរិស្ថាន និងសួនច្បារក្នុងវត្ត</h3></div></a>
          <a class="news-card" routerLink="/education"><div class="news-photo news-photo-four"><span>ការអប់រំ</span></div><div class="news-copy"><small>▣ &nbsp;២៦ ឧសភា ២០២៦</small><h3>ការសិក្សា និងការចែករំលែកចំណេះដឹង</h3></div></a>
        </div>
      </div>
      <aside class="events-panel">
        <div class="events-heading"><span>▣</span><div><h2>ប្រតិទិនពិធីបុណ្យ</h2><small>Event Calendar</small></div></div>
        <a class="event-row" routerLink="/events"><span class="event-date"><b>០៧</b><small>មិថុនា</small></span><span class="event-name"><strong>ពិធីបុណ្យកឋិនទាន</strong><small>Kathina Ceremony</small></span><b class="event-arrow">›</b></a>
        <a class="event-row" routerLink="/events"><span class="event-date"><b>១៥</b><small>មិថុនា</small></span><span class="event-name"><strong>ពិធីបុណ្យភ្ជុំបិណ្ឌ</strong><small>Pchum Ben Ceremony</small></span><b class="event-arrow">›</b></a>
        <a class="event-row" routerLink="/events"><span class="event-date"><b>០១</b><small>មករា</small></span><span class="event-name"><strong>ពិធីបុណ្យចូលឆ្នាំខ្មែរ</strong><small>Khmer New Year</small></span><b class="event-arrow">›</b></a>
        <a class="events-more" routerLink="/events">មើលប្រតិទិនទាំងមូល →</a>
      </aside>
    </section>
  `
})
export class HomeComponent {}
