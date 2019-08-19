import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { HttpService } from 'src/app/service/http-service';

@Component({
  selector: 'app-label-notes',
  templateUrl: './label-notes.component.html',
  styleUrls: ['./label-notes.component.scss']
})
export class LabelNotesComponent implements OnInit {
  noteArray : any[] = [];
  label:String;

  constructor(private data: DataserviceService, private httpService: HttpService) { }

  ngOnInit() {
    this.data.currentLabel.subscribe(label => {
      this.label=label;
      this.labelNotes();
    } ); 
    //this.data.currentMessage.subscribe(message => this.message = message)
    // this.labelNotes();
    console.log("label notes"+this.noteArray);
  }

  labelNotes(){
     this.noteArray=[]
    console.log('label in label - notes',this.label);
    var url="profile/search?label="+this.label;
    this.httpService.getRequest(url).subscribe((res:any)=>{
      console.log('get all label response',res);
      res.forEach((card:any)=>{
        this.noteArray.push(card);
      })
    })
    
  }

}
