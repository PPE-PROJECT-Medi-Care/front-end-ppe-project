import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentsDash/home/home.component';
import { HeaderComponent } from './componentsDash/header/header.component';
import { FooterComponent } from './componentsDash/footer/footer.component';
import { SidebarComponent } from './componentsDash/sidebar/sidebar.component';
import { LayoutComponent } from './componentsDash/layout/layout.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListeComponent } from './componentsDash/liste/liste.component';
import { ListeappoinmentComponent } from './componentsDash/listeappoinment/listeappoinment.component';
import { ListedoctorComponent } from './componentsDash/listedoctor/listedoctor.component';
import { ListepatientComponent } from './componentsDash/listepatient/listepatient.component';
import { HeaderSComponent } from './componentsSite/header-s/header-s.component';
import { FooterSComponent } from './componentsSite/footer-s/footer-s.component';
import { ContactComponent } from './componentsSite/contact/contact.component';

import { AppoinmentComponent } from './componentsSite/appoinment/appoinment.component';
import { HomeSComponent } from './componentsSite/home-s/home-s.component';
import { LayoutSComponent } from './componentsSite/layout-s/layout-s.component';
import { SigninComponent } from './componentsSite/signin/signin.component';
import { SignupComponent } from './componentsSite/signup/signup.component';
import { BlogComponent } from './componentsSite/blog/blog.component';
import { DoctorsComponent } from './componentsSite/doctors/doctors.component';

import { PagesComponent } from './componentsSite/pages/pages.component';
import { DepartementsComponent } from './componentsSite/departements/departements.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecherchePipe } from './recherche.pipe';
import { AjoutComponent } from './componentsDash/ajout/ajout.component';
import { AjouterdoctorComponent } from './componentsDash/ajouterdoctor/ajouterdoctor.component';
import { ProfiledoctorComponent } from './componentsDash/profiledoctor/profiledoctor.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TestComponent } from './componentsDash/test/test.component';
import { InterfacedoctorComponent } from './componentsSite/interfacedoctor/interfacedoctor.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent,
    ListeComponent,
    ListeappoinmentComponent,
    
    ListedoctorComponent,
    
    ListepatientComponent,
    
    HeaderSComponent,
    
    FooterSComponent,
    
    ContactComponent,
     
    AppoinmentComponent,
    
    HomeSComponent,
    
    LayoutSComponent,
    
    SigninComponent,
    
    SignupComponent,
    
    BlogComponent,
    
    DoctorsComponent,
    
    PagesComponent,
    
    DepartementsComponent,
    
    RecherchePipe,
    AjoutComponent,
  AjouterdoctorComponent,
  ProfiledoctorComponent,
  TestComponent,
  InterfacedoctorComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
