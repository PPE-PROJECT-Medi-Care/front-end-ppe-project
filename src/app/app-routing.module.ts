
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterdoctorComponent } from './componentsDash/ajouterdoctor/ajouterdoctor.component';
import { FooterComponent } from './componentsDash/footer/footer.component';
import { HeaderComponent } from './componentsDash/header/header.component';
import { HomeComponent } from './componentsDash/home/home.component';
import { LayoutComponent } from './componentsDash/layout/layout.component';
import { ListeComponent } from './componentsDash/liste/liste.component';
import { ListeappoinmentComponent } from './componentsDash/listeappoinment/listeappoinment.component';
import { ListedoctorComponent } from './componentsDash/listedoctor/listedoctor.component';
import { ListepatientComponent } from './componentsDash/listepatient/listepatient.component';
import { SidebarComponent } from './componentsDash/sidebar/sidebar.component';
import { AjoutComponent } from './componentsDash/ajout/ajout.component';



import { AppoinmentComponent } from './componentsSite/appoinment/appoinment.component';
import { HeaderSComponent } from './componentsSite/header-s/header-s.component';
import { SigninComponent } from './componentsSite/signin/signin.component';
import { SignupComponent } from './componentsSite/signup/signup.component';
import { PagesComponent } from './componentsSite/pages/pages.component';
import { ContactComponent } from './componentsSite/contact/contact.component';
import { BlogComponent } from './componentsSite/blog/blog.component';
import { DoctorsComponent } from './componentsSite/doctors/doctors.component';
import { LayoutSComponent } from './componentsSite/layout-s/layout-s.component';
import { HomeSComponent } from './componentsSite/home-s/home-s.component';
import { FooterSComponent } from './componentsSite/footer-s/footer-s.component';
import { DepartementsComponent } from './componentsSite/departements/departements.component';
import { ProfiledoctorComponent } from './componentsDash/profiledoctor/profiledoctor.component';
import { TestComponent } from './componentsDash/test/test.component';
import { InterfacedoctorComponent } from './componentsSite/interfacedoctor/interfacedoctor.component';




const routes: Routes = [
  {path:'test',component:TestComponent},
  {path:'profiledoctor/:numE',component:ProfiledoctorComponent},
  {path:'app',component:ListeappoinmentComponent},
  {path:'l',component:ListeComponent},
 {path:'ajout',component:AjoutComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'home',component:HomeComponent},
  {path:'layout',component:LayoutComponent},
  {path:'home',component:HomeComponent, children:[
        {path:'layout',component:LayoutComponent},
         {path:'listedoctor',component:ListedoctorComponent},
   // {path:'ajout',component:AjoutComponent},
         {path:'app',component:ListeappoinmentComponent},
         {path:'listepatient',component:ListepatientComponent},
  //  {path:'test',component:TestComponent},
         {path:'ajouterdoctor',component:AjouterdoctorComponent},
         {path:'l',component:ListeComponent}
             ]},


    {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'headerS',component:HeaderSComponent},
  {path:'footerS',component:FooterSComponent},
  {path:'homeS',component:HomeSComponent, children:[
       {path:'',component:PagesComponent},
        {path:'appoinment',component:AppoinmentComponent},
        {path:'blog',component:BlogComponent},
        {path:'interface',component:InterfacedoctorComponent},
      
         {path:'doctors',component:DoctorsComponent},
        {path:'departements',component:DepartementsComponent},
        {path:'contact',component:ContactComponent},
        {path:'layoutS',component:LayoutSComponent}
  
           ]},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
