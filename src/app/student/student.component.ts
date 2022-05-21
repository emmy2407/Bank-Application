import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public allStudents: any =[
    {name: "Dolapo", dept: "Animal Science", email: "dolip@gmail.com"},
    {name: "Emmy", dept: "CPS", email: "emmy@gmail.com"},
    {name: "Tayo", dept: "Agric", email: "ty@gmail.com"}
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  moreDetails(i:any) {
    console.log(i);
    this.router.navigate([`student/${i}`])
  }

}
