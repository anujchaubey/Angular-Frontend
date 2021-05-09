import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderbarComponent } from './shared/headerbar/headerbar.component';
import { FooterbarComponent } from './shared/footerbar/footerbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PagenotfoundComponent } from './page/pagenotfound/pagenotfound.component';

const routes: Routes = [
  // { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: '', loadChildren: () => import('./account/login/login.module').then(m => m.LoginModule), pathMatch: 'full' },
  { path: 'headerbar', component: HeaderbarComponent },
  { path: 'footerbar', component: FooterbarComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: 'login', loadChildren: () => import('./account/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./account/signup/signup.module').then(m => m.SignupModule) },
  { path: 'forgotpassword', loadChildren: () => import('./account/forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordModule) },
  { path: 'userslist', loadChildren: () => import('./layout/userslist/userslist.module').then(m => m.UserslistModule) },
  { path: 'setting', loadChildren: () => import('./layout/setting/setting.module').then(m => m.SettingModule) },

  { path: '**', redirectTo: 'pagenotfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
