import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersInfoService } from '../users-info.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  public userIn:any = [];
  public currentUser:any={};
  public withdraw_acc:number = 0;

  constructor(private _router:Router, private _userInfoService:UsersInfoService) { }

  ngOnInit(): void {
    this.currentUser = this._userInfoService.getCurrentUser();
  }

  withdraw() {
    let {withdraw_acc, currentUser} = this;

    this._userInfoService.setAllUser(withdraw_acc);
    if(withdraw_acc >= 10) {
      currentUser.AccBal= currentUser.AccBal- withdraw_acc;
    }else {
      alert(`withdrawal must be more than 10 naira`);
    }
    this._router.navigate(["/dashboard"]);
  }

}
