import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  user:any;


  constructor() { 
    this.user={
      name:'xyz',
      address:"vashi",
      companyName:"bridgelabz",
      phoneno:['676767','778787878797900']
    };
  }

  ngOnInit() {
  }

}
