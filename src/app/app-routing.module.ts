import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ContactPage } from './pages/contact/contact.page';
import {  AboutUsPage } from './pages/about-us/about-us.page';

const routes: Routes = [
  {path:'',component:HomePage},
  {path:'quienes-somos',component:AboutUsPage},
  {path:'contactanos',component:ContactPage},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
