import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { UsersInfoService } from '../users-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userIn:any = [];
  public currentUser:any={};
  public fund_acc:number = 0;

  

  constructor(private _router:Router, private _userInfoService:UsersInfoService) {}

  ngOnInit(): void {
    this.currentUser = this._userInfoService.getCurrentUser();
    // this.userIn = this._userInfoService.getUsers();
  }  

  
}
