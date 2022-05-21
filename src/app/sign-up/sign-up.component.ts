import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersInfoService } from '../users-info.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public userDetails:any = '';
  public firstName:string = '';
  public lastName:string = '';
  public email:string = '';
  public pwd:string = '';
  public AccNum:string = '';
  public AccBal:number = 100000;

  constructor(private _router:Router, private _userInfoService:UsersInfoService) {

  }

  ngOnInit(): void {
    this.userDetails = this._userInfoService.getUsers();
    
    // this._userInfoService.userDetails = []; 
  }
  
  register() {
    let {firstName, lastName, email, pwd, AccNum, AccBal} = this;

//    console.log(firstName, lastName, email, pwd);
    if(firstName == '' || lastName == '' || email == '' || pwd == ''){
      alert('Enter your details');
      return;
    } 
    AccNum = `420${Math.floor(Math.random() * 100000000)}`
    this._userInfoService.pushUser({firstName, lastName, email, pwd, AccNum, AccBal});
    if(this.userDetails) {
      // alert('sign in');
      this._router.navigate(['/signIn'])
    }
    console.log(this.userDetails);
  }

}
