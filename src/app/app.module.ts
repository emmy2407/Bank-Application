import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { TransferComponent } from './transfer/transfer.component';
import { ContactChildComponent } from './contact-child/contact-child.component';
import { StudentComponent } from './student/student.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersInfoService } from './users-info.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FundAccountComponent } from './fund-account/fund-account.component';
import { PaymentComponent } from './payment/payment.component';
import { RequestComponent } from './request/request.component';
import { WalletComponent } from './wallet/wallet.component';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { LoanComponent } from './loan/loan.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
// import { ClipboardModule } from "@angular/cdk/clipboard"; 

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactComponent,
    TransferComponent,
    ContactChildComponent,
    StudentComponent,
    MoreDetailsComponent,
    SignUpComponent,
    SignInComponent,
    DashboardComponent,
    FundAccountComponent,
    PaymentComponent,
    RequestComponent,
    WalletComponent,
    PayBillComponent,
    LoanComponent,
    TransactionHistoryComponent,
    // ClipboardModule    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [UsersInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
