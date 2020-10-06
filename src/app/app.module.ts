import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WeightListComponent } from './health/weight-list.component';
import { HomeComponent } from './health/home.component';
import { CommunityComponent } from './health/community.component';


@NgModule({
  declarations: [
    AppComponent,
    WeightListComponent,
    HomeComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
     
      {path:'community',component:CommunityComponent},
      {path:'home',component:HomeComponent},
      
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',redirectTo:'home',pathMatch:'full'}
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
