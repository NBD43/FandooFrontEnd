import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/service/http-service';

@Component({
  selector: 'app-noteicon',
  templateUrl: './noteicon.component.html',
  styleUrls: ['./noteicon.component.scss']
})
export class NoteiconComponent implements OnInit {

  colorArray : any[] = [
    "#f06292","#ce93d8","#81D4FA","#FFAB91","#a5d6a7","#bdbdbd","#FFE57F","#00BCD4"
  ]

  @Input() noteDetails:any;
  @Output() colorChanged : EventEmitter<any> = new EventEmitter();
  @Output() archiveChanged:EventEmitter<any> = new EventEmitter();
  constructor(private httpService:HttpService) { }

  ngOnInit() {
    console.log(this.noteDetails);
    
  }

  onReminder(){
    alert("add the reminder to note");

  }

  onCollaborator(){
    alert("collaborate notewith other user");
  }

  deleteNote(note){

    var url="note/trash?noteId="+note.noteId
    this.httpService.archiveUnarchivenote(url,note).subscribe((response:any)=>{
      console.log(response);
      this.archiveChanged.emit();
    });

  }

  addImageToNote(){
    alert("set the note background image");
  }

  addArchive(note:any){
    //alert("add the note to trash");
  // console.log(note);
  
    var url="note/archive?noteId="+note.noteId
    this.httpService.archiveUnarchivenote(url,note).subscribe((response:any)=>{
      console.log(response);
      this.archiveChanged.emit();
    });


  }

  onColorChange(color){
    console.log(color);
  
    console.log(this.noteDetails);
    var data = {
      "color":color,
      "noteId":this.noteDetails.noteId
    }
    var url ="note/colour"
    this.httpService.noteColorChanger(url,data).subscribe((response:any)=>{
      console.log(response);
      this.colorChanged.emit(color);
      
    });
  }
}
