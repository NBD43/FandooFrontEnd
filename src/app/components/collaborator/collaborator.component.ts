import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http-service';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  email: any;
  token: any;
  message:String;
  note:any;
  collaborators=[]
  colabEmail = new FormControl('',Validators.required);
  constructor(public dialogRef:MatDialogRef<CollaboratorComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private httpService:HttpService
  ,private dataService:DataserviceService) { }

  ngOnInit() {
    
    console.log(this.email);
    console.log(this.token);
    console.log(this.data);
    
    this.dataService.currentMessage.subscribe(
      response => {
        this.message = response;
        this.token = localStorage.getItem('token');
        this.email = localStorage.getItem('emailId');
        this.note=this.data;
        this.collaborators=this.data.collaboratedUser
        //this.NoteLabel();
        //this.updateColor();
      })

      
  }
  
  
  
  addcollaborator(){
    //this.collaborators.push(this.colabEmail.value);
    var url="note/addcolaborator?email="+this.colabEmail.value+"&noteId="+this.data.noteId;
    console.log(url);
    this.httpService.addCollaboratore(url,this.data).subscribe((response:any)=>{
      console.log(response);
      this.collaborators=[];
      this.dataService.changeMessage('addcollaborator');
     // this.ngOnInit()
     // this.onRefresh();
     
      
    });
    

  }

  removeCollaborator(collabratedEmail){
    //this.collaborators.splice(collabratedEmail);
    var url="note/removecollaborator?email="+collabratedEmail+"&noteId="+this.data.noteId;
    console.log(url);
    this.httpService.removeCollaboratore(url).subscribe((response:any)=>{
      console.log(response);
      this.dataService.changeMessage('removeCollaborator');
      

    });
    // this.httpService.addCollaboratore(url,this.data).subscribe((response:any)=>{
    //   console.log(response);
      
    // });

  }
  onRefresh(){
    window.location.reload();
  }

}
