import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  transferFunds() {
    alert('TF was successful, Sapa no fit catch me');

    // Programmatic redirection
    this.router.navigate([""]);
  }

}
