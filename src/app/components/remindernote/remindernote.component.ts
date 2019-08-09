import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http-service';
import { MatDialog } from '@angular/material';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-remindernote',
  templateUrl: './remindernote.component.html',
  styleUrls: ['./remindernote.component.scss']
})
export class RemindernoteComponent implements OnInit {

  path1:String ="http://localhost:8080/user/note/trashNotes/";
  token:String=localStorage.getItem('token');
  reminderArray : any[] = [];
  message:String;
    constructor( private httpService:HttpService,private dialog: MatDialog,private dataService:DataserviceService) {
    }
  
    onRefresh(){
      window.location.reload();
    }
  
    ngOnInit() {
    //  this.getAllArchive()
      console.log(this.ReminderNotes);
     
      this.dataService.currentMessage.subscribe(
        response => {
          this.message = response;
          this.ReminderNotes();
          
        })
  
    
    }
   
  
    
    
    changedArchive(){
      this.ReminderNotes();
    }
  
    ReminderNotes(){
      this.reminderArray=[]
    var url="note/reminderNotes"
    this.httpService.reminderNotes(url).subscribe((res:any)=>{
      console.log(' all reminder notes response',res);
      res.forEach((card:any)=>{
        this.reminderArray.push(card);
      })
    });
    }


    deleteNote(note){

      var url="note/trash?noteId="+note.noteId;
      this.httpService.archiveUnarchivenote(url,note).subscribe((response:any)=>{
        console.log(response);
        this.ReminderNotes();
      });
  
    }

   
  

}
