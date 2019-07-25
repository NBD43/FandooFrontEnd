import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http-service';

@Component({
  selector: 'app-getnote',
  templateUrl: './getnote.component.html',
  styleUrls: ['./getnote.component.scss']
})
export class GetnoteComponent implements OnInit {
path:String ="http://localhost:8080/user/note/getAllNotes/";
token:String=localStorage.getItem('token');
notesArray : any[] = [];
  constructor( private httpService:HttpService) { }

  ngOnInit() {
    this.getAllNotes()
  }

  getAllNotes(){
  this.httpService.getNotes(this.path).subscribe((res:any)=>{
    console.log('get all notes response',res);
    res.forEach((card:any)=>{
      this.notesArray.push(card);
    })
  });
  }

}
