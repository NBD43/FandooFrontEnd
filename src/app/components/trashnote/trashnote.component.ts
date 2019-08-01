import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http-service';
import { NoteeditComponent } from '../noteedit/noteedit.component';
import {MatDialog} from '@angular/material/dialog';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-trashnote',
  templateUrl: './trashnote.component.html',
  styleUrls: ['./trashnote.component.scss']
})
export class TrashnoteComponent implements OnInit {

  path1:String ="http://localhost:8080/user/note/trashNotes/";
  token:String=localStorage.getItem('token');
  notesTrashArray : any[] = [];
  message:String;
    constructor( private httpService:HttpService,private dialog: MatDialog,private dataService:DataserviceService) {
    }
  
    onRefresh(){
      window.location.reload();
    }
  
    ngOnInit() {
    //  this.getAllArchive()
      console.log(this.getAllArchive);
     
      this.dataService.currentMessage.subscribe(
        response => {
          this.message = response;
          this.getAllArchive();
          
        })
  
    
    }
   
  
    
    
    changedArchive(){
      this.getAllArchive();
    }
  
    getAllArchive(){
      this.notesTrashArray=[]
    this.httpService.getNotesArchive(this.path1).subscribe((res:any)=>{
      console.log('get all Archive notes response',res);
      res.forEach((card:any)=>{
        this.notesTrashArray.push(card);
      })
    });
    }


    deleteNote(note){

      var url="note/trash?noteId="+note.noteId;
      this.httpService.archiveUnarchivenote(url,note).subscribe((response:any)=>{
        console.log(response);
        this.getAllArchive();
      });
  
    }

    deletePermanently(note){
      console.log(note);
      var url="note/delete?noteId="+note.noteId;
      this.httpService.deleteNote(url).subscribe(
        (response:any)=>{
          console.log(response);
          this.getAllArchive();
          
        }
      )
      
    }
  
    
    
  
  }