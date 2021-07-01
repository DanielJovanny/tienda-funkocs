import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*Componentes*/
import {HeaderComponent}from './componets/header/header.component';
import {BannerComponent}from './componets/banner/banner.component';
import {FooterComponent}from './componets/footer/footer.component';
import {FormComponent}from './componets/form/form.component';
import {FeaturedProductComponent}from './componets/featured-product/featured-product.component';
import {NewProductComponent}from './componets/new-product/new-product.component';
import {IndividualProductComponent}from './componets/individual-product/individual-product.component';
/*Paginas */
import {HomePage}from './pages/home/home.page';
import {ContactPage}from './pages/contact/contact.page';
import {AboutUsPage}from './pages/about-us/about-us.page';


/*Animaciones */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*Componentes de material */
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FeaturedProductComponent,
    NewProductComponent,
    IndividualProductComponent,
    FooterComponent,
    FormComponent,
    HomePage,
    AboutUsPage,
    ContactPage,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
