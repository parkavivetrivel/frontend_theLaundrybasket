import {  NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { BodyComponent } from './authentication/body/body.component';
import { OrderComponent } from './authentication/order/order.component';
import { InvoiceComponent } from './authentication/invoice/invoice.component';
import { SignedsuccessComponent } from './authentication/signedsuccess/signedsuccess.component';
import { SignedfailureComponent } from './authentication/signedfailure/signedfailure.component';
const routes: Routes = [ 
  {path:'',component:BodyComponent},
  {path:'login' , component:LoginComponent },
  {path:'signup' , component:SignupComponent },
{path:'order',component:OrderComponent},
{path:'invoice',component:InvoiceComponent},
{path:'signedsuccess',component:SignedsuccessComponent},
{path:'signedfailure',component:SignedfailureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,SignupComponent,OrderComponent,SignedsuccessComponent,SignedfailureComponent]

