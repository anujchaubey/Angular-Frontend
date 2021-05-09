import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// -----------------------HttpClientModule--------------
import { HttpClientModule } from '@angular/common/http';

// -----------------------Component----------------------
import { HeaderbarComponent } from './shared/headerbar/headerbar.component';
import { FooterbarComponent } from './shared/footerbar/footerbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PagenotfoundComponent } from './page/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderbarComponent,
    FooterbarComponent,
    SidebarComponent,
    DashboardComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
