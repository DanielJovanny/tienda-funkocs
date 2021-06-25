import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './componets/banner/banner.component';
import { ContactComponent } from './componets/contact/contact.component';

const routes: Routes = [
  {path:'',component:BannerComponent},
  {path:'quienes-somos',component:BannerComponent},
  {path:'contactanos',component:ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
