import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.sass']
})
export class ForgetpasswordComponent implements OnInit {
  name = new FormControl('');
  constructor() { }

  ngOnInit() {
    this.getdata();
  }

  getdata(){
    console.log("name",this.name.value)
  }

}
