import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactChildComponent } from './contact-child/contact-child.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FundAccountComponent } from './fund-account/fund-account.component';
// import { FundAccountComponent } from './fund-account/fund-account.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { PaymentComponent } from './payment/payment.component';
import { RequestComponent } from './request/request.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StudentComponent } from './student/student.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransferComponent } from './transfer/transfer.component';
import { WalletComponent } from './wallet/wallet.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"signUp", component:SignUpComponent},
  {path:"signIn", component:SignInComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"fund-account", component:FundAccountComponent},
  {path:"loan", component:LoanComponent},
  {path:"pay-bill", component:PayBillComponent},
  {path:"payment", component:PaymentComponent},
  {path:"withdraw", component:RequestComponent},
  {path:"transaction-history", component:TransactionHistoryComponent},
  {path:"wallet", component:WalletComponent},
  {path:"transfer", component:TransferComponent},
  // {
  //   path:"dashboard", 
  //   component:FundAccountComponent, 
  //   children: [
  //     {path:"fund-account", component:FundAccountComponent}
  //   ]
  // },
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {
    path:"contact", 
    component:ContactChildComponent, 
    children: [
      {path:"taiwo", component:ContactChildComponent}
    ]
  },
  {path:"About", redirectTo:"", pathMatch:"full"},
  {path:"student", component:StudentComponent},
  {path:"student/:id", component:MoreDetailsComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
