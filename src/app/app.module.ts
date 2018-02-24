import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PollComponent } from './poll.component';
import { MembertableComponent } from './membertable.component';
import { MembersService } from './members.service';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryMemberdataService } from './In-memory-memberdata.Service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, AppRoutingModule,
    HttpModule, InMemoryWebApiModule.forRoot(InMemoryMemberdataService)
    , FormsModule],
  declarations: [AppComponent, MembertableComponent, PollComponent],
  bootstrap: [AppComponent],
  providers: [MembersService]
})
export class AppModule { }
