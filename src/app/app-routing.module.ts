import { NgModule } from '@angular/core';
import { MembertableComponent } from './membertable.component';
import { PollComponent } from './poll.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/membertable', pathMatch: 'full' },
        { path: 'poll', component: PollComponent },
        { path: 'membertable', component: MembertableComponent },
      ]
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
