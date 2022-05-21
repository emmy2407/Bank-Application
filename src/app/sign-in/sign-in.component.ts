import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersInfoService } from '../users-info.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public email:any = '';
  public password:any = '';
  public allInput:any = [];
  public currentUser:any = [];
  public found:any = {};
  public see:boolean = false;
  public seee:boolean = false;
  

  constructor(private _router:Router, private _userInfoService:UsersInfoService) { }

  ngOnInit(): void {
    this.allInput = this._userInfoService.getUsers();
    // this.currentUser = this._userInfoService.getCurrentUser();

  }

  login() {    
    let {email, password} = this;
    // console.log(email, password);
    
    this.found = this.allInput.find((val:any) => val.email == email && val.pwd == password)
    // console.log(this.found);
    
    if(this.found) {
      // alert(`You signed in successfully`);
      this._userInfoService.pushCurrentUser(this.found);
      this.see = true;
      console.log(this.found);
      // this._router.navigate(["/dashboard"]);
    }else {
      this.seee = true;
      // alert(`Please enter your details`);
    }


    // if(this.allInput) {
    //   // thisthis.found(['/dashboard'])
    //   // alert('sign in');
    // }
    // console.log(this.allInput);
  }

}
