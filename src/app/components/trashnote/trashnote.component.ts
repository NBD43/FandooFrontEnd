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

  path1:String ="http://localhost:8080/user/note/getAllArchive/";
  token:String=localStorage.getItem('token');
  notesArchArray : any[] = [];
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
    getcolor :string;
    receiveColor(color){
      this.getcolor = color;
      this.getAllArchive()
  
    }
    changedColor(color){
      this.getcolor = color;
      this.getAllArchive();
    }
  
    getAllArchive(){
      this.notesArchArray=[]
    this.httpService.getNotesArchive(this.path1).subscribe((res:any)=>{
      console.log('get all Archive notes response',res);
      res.forEach((card:any)=>{
        this.notesArchArray.push(card);
      })
    });
    }
  
    onEdit(data){
      console.log(data);
      alert(data);
      
      const dialogRef = this.dialog.open(NoteeditComponent,
        {
          panelClass:'myapp-no-padding-dialog',
           width: '60vw',
           height:'20vh',
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