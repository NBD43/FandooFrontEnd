import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http-service';
import { MatDialog } from '@angular/material';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  
  labelArray : any[] = [];
  path:String="http://localhost:8080/user/label/getlabel";


  constructor( private httpService:HttpService,private dialog: MatDialog,private dataService:DataserviceService) {
  }

  ngOnInit() {
    this.getAllLabels();
   // console.log(this.getAllLabels());
    
  }

  getAllLabels(){
    this.labelArray=[]
  this.httpService.getNotes(this.path).subscribe((res:any)=>{
    console.log('get all notes response',res);
    res.forEach((card:any)=>{
      this.labelArray.push(card);
    })
  });
  }

}
