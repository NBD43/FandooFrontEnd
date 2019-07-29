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

  @Input() noteDetails:any[] =[];
  @Output() color : EventEmitter<any> = new EventEmitter();

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

  noteColorChanger(){
    alert("note color changer");
  }

  addImageToNote(){
    alert("set the note background image");
  }

  addToTrash(){
    alert("add the note to trash");
  }

  onColorChange(color){
    console.log(color);
    this.color.emit(color);
    console.log(this.noteDetails);
    var data = {
      "color":color,
      "noteId":this.noteDetails
    }
    var url ="note/colour"
    this.httpService.noteColorChanger(url,data).subscribe((response:any)=>{
      console.log(response);
      
      
    });
  }
}
