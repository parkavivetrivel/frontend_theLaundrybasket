import {  Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BodyComponent } from './body/body.component';
import { OrderComponent } from './order/order.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PartnersComponent } from './partners/partners.component';
// import { SignedsuccessComponent } from './signedsuccess/signedsuccess.component'; it is not responsible
// import { SignedfailureComponent } from './signedfailure/signedfailure.component';
const routes: Routes = [ 
  {path:'',component:BodyComponent},
  {path:'login' , component:LoginComponent },
  {path:'signup' , component:SignupComponent },
  {path:'order' , component : OrderComponent},
  {path:'invoice',component: InvoiceComponent},
  {path:'partners',component: PartnersComponent},

  // {path:'signedsuccess',component:SignedsuccessComponent},
  // {path:'signedfailure',component:SignedfailureComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingmodule { }
export const routingComponents=[LoginComponent,SignupComponent,OrderComponent,InvoiceComponent,PartnersComponent]

