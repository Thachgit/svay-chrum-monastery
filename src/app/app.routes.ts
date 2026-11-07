import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'ទំព័រដើម | វត្តស្វាយជ្រំ' },
  { path: 'about', component: InfoPageComponent, data: { title: 'អំពីវត្ត', subtitle: 'ប្រវត្តិ ចក្ខុវិស័យ និងបេសកកម្មរបស់វត្តស្វាយជ្រំ។' } },
  { path: 'leadership', component: InfoPageComponent, data: { title: 'ថ្នាក់ដឹកនាំ', subtitle: 'រចនាសម្ព័ន្ធគណៈគ្រប់គ្រង និងថ្នាក់ដឹកនាំវត្ត។' } },
  { path: 'news', component: InfoPageComponent, data: { title: 'ព័ត៌មាន', subtitle: 'ព័ត៌មាន និងសេចក្ដីជូនដំណឹងពីវត្តស្វាយជ្រំ។' } },
  { path: 'events', component: InfoPageComponent, data: { title: 'ពិធីបុណ្យ និងកម្មវិធី', subtitle: 'ប្រតិទិនពិធីបុណ្យ និងសកម្មភាពសហគមន៍។' } },
  { path: 'gallery', component: InfoPageComponent, data: { title: 'វិចិត្រសាល', subtitle: 'រូបភាពអនុស្សាវរីយ៍ និងសកម្មភាពនៅក្នុងវត្ត។' } },
  { path: 'education', component: InfoPageComponent, data: { title: 'ការអប់រំ', subtitle: 'ការសិក្សាព្រះធម៌ ចំណេះដឹង និងការអប់រំសហគមន៍។' } },
  { path: 'contact', component: InfoPageComponent, data: { title: 'ទំនាក់ទំនង', subtitle: 'ស្វែងរកទីតាំង និងទាក់ទងមកកាន់វត្តស្វាយជ្រំ។' } },
  { path: '**', redirectTo: '' }
];
