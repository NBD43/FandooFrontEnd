import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noteicon',
  templateUrl: './noteicon.component.html',
  styleUrls: ['./noteicon.component.scss']
})
export class NoteiconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}
