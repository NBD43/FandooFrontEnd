import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http-service';
import { NoteeditComponent } from '../noteedit/noteedit.component';
import {MatDialog} from '@angular/material/dialog';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-getnote',
  templateUrl: './getnote.component.html',
  styleUrls: ['./getnote.component.scss']
})
export class GetnoteComponent implements OnInit {
path:String ="http://localhost:8080/user/note/notes/";
token:String=localStorage.getItem('token');
notesArray : any[] = [];
message:String;
  constructor( private httpService:HttpService,private dialog: MatDialog,private dataService:DataserviceService) {
  }

  onRefresh(){
    window.location.reload();
  }

  ngOnInit() {
    // setInterval(()=>{
    //   this.notesArray=null;
    //   this.getAllNotes()
    // },1000)
   // this.getAllNotes();
    //this.getAllNotes()
  // this.receiveColor();
 // this.getAllNotes();
    console.log(this.getAllNotes);
    //this.updateColor
    this.dataService.currentMessage.subscribe(
      response => {
        this.message = response;
        this.getAllNotes();
        //this.NoteLabel();
        //this.updateColor();
      })

  
  }
  getcolor :string;
  receiveColor(color){
    this.getcolor = color;
    this.getAllNotes()

  }
  changedColor(color){
    this.getcolor = color;
    this.getAllNotes();
  }

  changedArchive(){
    this.getAllNotes();
  }

  getAllNotes(){
    this.notesArray=[]
  this.httpService.getNotes(this.path).subscribe((res:any)=>{
    console.log('get all notes response',res);
    res.forEach((card:any)=>{
      this.notesArray.push(card);
    })
  });
  }

  onEdit(data){
    console.log(data);
    alert(data);
    
    const dialogRef = this.dialog.open(NoteeditComponent,
      {
        
        panelClass:'update-dialog',
         width: '50%',
         height:'fit-content',
         
        data:{
          noteId:data.noteId,
          color:data.colour,
          title:data.title,
          description:data.description
        }
      });
  
      dialogRef.afterClosed().subscribe(
        (data2:any) =>
        {
          if(data2!=null)
          { 
            console.log(data2)
            this.httpService.editnote('note/update?noteId='+data.noteId,data2).subscribe(
            value =>
            {
              console.log(value);
              this.onRefresh();
            
            }
          );
          }
    })
    
  }
  

}
