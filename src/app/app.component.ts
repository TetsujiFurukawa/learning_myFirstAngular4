import { Component } from '@angular/core';
import { MembertableComponent } from './membertable.component';

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}年総選挙</h1>
  <a routerLink="/membertable" routerLinkActive="active">被選挙人名簿を見る</a>
  <a routerLink="/poll" routerLinkActive="active">中間報告を見る</a>
  <div class="outlet">
    <router-outlet></router-outlet>
  </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '2017';
}
