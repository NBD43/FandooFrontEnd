import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/service/http-service';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-noteicon',
  templateUrl: './noteicon.component.html',
  styleUrls: ['./noteicon.component.scss']
})
export class NoteiconComponent implements OnInit {
  labelArray : any[] = [];
  colorArray : any[] = [
    "#f06292","#ce93d8","#81D4FA","#FFAB91","#a5d6a7","#bdbdbd","#FFE57F","#00BCD4"
  ]

  @Input() noteDetails:any;
  @Output() colorChanged : EventEmitter<any> = new EventEmitter();
  @Output() archiveChanged:EventEmitter<any> = new EventEmitter();
  constructor(private httpService:HttpService,private dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.noteDetails);
    this.getAllLabels();
    
  }

  onReminder(){
    alert("add the reminder to note");

  }

  onCollaborator(){
    //alert("collaborate notewith other user");
    //var data=this.noteDetails;
    const dialogRef = this.dialog.open(CollaboratorComponent,
      {
        width: '400px',
        height: 'fit-content',
        data: this.noteDetails
      });
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

  addLabel(note,label){
    console.log(note);
    console.log(label);

    var url="label/addlabeltonote?labelId="+label.labelId+"&noteId="+note.noteId;
    this.httpService.addLabelToNote(url,note).subscribe((res:any)=>{
      console.log(res);
      this.archiveChanged.emit();
    });
    
    
  }

  getAllLabels(){
    var path="http://localhost:8080/user/label/getlabel";
    this.labelArray=[]
  this.httpService.getNotes(path).subscribe((res:any)=>{
    console.log('get all label response',res);
    res.forEach((card:any)=>{
      this.labelArray.push(card);
    })
  });
  }
}
