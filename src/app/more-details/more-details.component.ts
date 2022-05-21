import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {

  public indexUrl:any = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // this just take the snapshot. It doesn't update
    // this.indexUrl = this.activatedRoute.snapshot.paramMap.get('id');

    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.indexUrl = params.get('id');
      
    });
    
  }  

}
