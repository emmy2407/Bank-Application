import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersInfoService {
  public allUser: any = JSON.parse(localStorage.getItem('allUser')!);
  public user: any = JSON.parse(localStorage.getItem('currentUser')!);
  public userDetails:any = this.allUser ? this.allUser : [];
  public currentUser:any = this.user ? this.user : {};

  constructor() { }

  getUsers() {
    return this.userDetails;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  setAllUser(fund:any) {
    // let findUser = this.userDetails.find((user:any) => user.AccNum == this.currentUser.AccNum);
    for(let i = 0; i < this.userDetails.length; i++) {
      if(this.userDetails[i].AccNum == this.currentUser.AccNum) {
        this.userDetails[i].AccBal = Number(this.userDetails[i].AccBal) + Number(fund);
        this.currentUser = this.userDetails[i];
        localStorage.setItem('allUser', JSON.stringify(this.userDetails));
        localStorage.setItem('currentUser', JSON.stringify(this.userDetails[i]))
        
      }
    }
  }

  // setUsers(allUser:any) {
    // this.userDetails = localStorage['localStorage']?JSON.parse(localStorage['localUsers']):[];
    
  // }

  pushCurrentUser(user:any) {
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  pushUser(user:any) {
    this.userDetails = [...this.userDetails, user];
    // this.userDetails.push(user);
    console.log(this.userDetails);    
    // JSON.stringify(localStorage['localUsers'])
    localStorage.setItem("allUser", JSON.stringify(this.userDetails));
  }
}
