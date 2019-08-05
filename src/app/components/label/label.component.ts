import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http-service';
import { MatDialog } from '@angular/material';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  
  labelArray : any[] = [];
  path:String="http://localhost:8080/user/label/getlabel";
  labelName = new FormControl();
  editLabel = new FormControl();
  changeInput=false;
  changeIcon=false;

  constructor( private httpService:HttpService,private dialog: MatDialog,private dataService:DataserviceService) {
  }

  ngOnInit() {
    this.getAllLabels();
   // console.log(this.getAllLabels());
    
  }

  create(){
    console.log(this.labelName.value);
    
    if(this.labelName.value == null ){
      return false
    }
    

      var data={
        "labelName":this.labelName.value
      
       }

    var url="label/create"
    this.httpService.createLabel(url,data).subscribe((res:any)=>{
      console.log(res);
      this.getAllLabels();
      
    })



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

  onMouseOver(event,label){
    console.log(event);
    console.log(label);
    this.changeIcon = true
    // this.changeIcon = !this.changeIcon;
    
  }

// Delete label permanently
  labelDelete(label){
    console.log(label);
    //var data=label;
    var url="label/delete?labelId="+label.labelId;
    this.httpService.deleteLabel(url).subscribe((res:any)=>{
      console.log(res);
      this.getAllLabels();
      
    })
    
  }

  labelEdit(label){
    console.log(label);
    console.log(this.editLabel);
    
    
  }

}
