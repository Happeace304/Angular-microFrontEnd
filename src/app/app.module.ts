import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';


const ROUTES: Routes = [
  {
    path: "angular-component",
    loadChildren: () => import("src/app/angular-component/angular.module").then(m => m.AngularModule),
  },
  {
    path: "react-component",
    loadChildren: () => import("./react/react.module").then(m => m.ReactModule),
  }
];

  @NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
