import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersInfoService } from '../users-info.service';

@Component({
  selector: 'app-fund-account',
  templateUrl: './fund-account.component.html',
  styleUrls: ['./fund-account.component.css']
})
export class FundAccountComponent implements OnInit {

  // public userIn:any = [];
  public currentUser:any={};
  public fund_acc:number = 0;

  constructor(private _router:Router, private _userInfoService:UsersInfoService) { }

  ngOnInit(): void {
    this.currentUser = this._userInfoService.getCurrentUser();
    // this.userIn = this._userInfoService.getUsers();
  }

  fund() {
    let {fund_acc, currentUser} = this;

    this._userInfoService.setAllUser(fund_acc);
    if(fund_acc >= 10) {
      currentUser.AccBal= fund_acc + currentUser.AccBal;
    }else {
      alert(`Deposit must be more than 10 naira`);
    }
    this._router.navigate(["/dashboard"]);
  }

}
